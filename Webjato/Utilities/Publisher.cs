using MongoDB.Bson;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SystemInterface.IO;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;
using Webjato.Repositories;
using Webjato.Repositories.AwsRepos;
using Webjato.Repositories.ContentRepos;
using Webjato.Repositories.SiteRepos;

namespace Webjato.Utilities {
    public class Publisher {
        private class Step {
            public StepId Id { get; set; }
            public Progress Progress { get; set; }
            public Action<Progress, string, string> Cleanup { get; set; }
            public Step() {
                this.Progress = Publisher.Progress.NotStarted;
            }
        }

        private enum StepId {
            TmpFolder,
            Bucket,
            Route53
        }

        private enum Progress {
            NotStarted,
            Working,
            Done
        }

        private PublishRepository publishRepo;
        private SiteRepository siteRepo;
        private ContentManager contMngr;
        private FrameRepository frmRepo;
        private PageRepository pageRepo;
        private BackgroundRepository<Background> bgRepo;
        private BackgroundRepository<Header> headerRepo;
        private FooterRepository footerRepo;
        private LogoRepository logoRepo;
        private S3Repository s3Repo;
        private BucketRepository bucketRepo;
        private Route53Repository route53Repo;
        private AuxiliaryConstants consts;
        private IPath path;
        private IFile file;
        private IDirectory directory;
        private General utils;
        private AwsUtilities awsUtils;
        private IISRepository iisRepo;

        public Publisher(PublishRepository publishRepository,
                            SiteRepository siteRepository,
                            ContentManager contentManager,
                            FrameRepository frameRepository,
                            PageRepository pageRepository,
                            BackgroundRepository<Background> backgroundRepository,
                            BackgroundRepository<Header> headerRepository,
                            FooterRepository footerRepository,
                            LogoRepository logoRepository,
                            S3Repository s3Repository,
                            BucketRepository bucketRepository,
                            Route53Repository route53Repository,
                            AuxiliaryConstants auxiliaryConstants,
                            IPath ipath,
                            IFile ifile,
                            IDirectory idirectory,
                            General utilities,
                            AwsUtilities awsUtilities,
                            IISRepository iisRepository) {
            publishRepo = publishRepository;
            siteRepo = siteRepository;
            contMngr = contentManager;
            frmRepo = frameRepository;
            pageRepo = pageRepository;
            bgRepo = backgroundRepository;
            headerRepo = headerRepository;
            footerRepo = footerRepository;
            logoRepo = logoRepository;
            s3Repo = s3Repository;
            bucketRepo = bucketRepository;
            route53Repo = route53Repository;
            consts = auxiliaryConstants;
            path = ipath;
            file = ifile;
            directory = idirectory;
            utils = utilities;
            awsUtils = awsUtilities;
            iisRepo = iisRepository;
        }

        public virtual string SiteToJson(ObjectId siteId) {
            var info = new PublishInfo();
            info.Site = siteRepo.Get(siteId);
            info.Contents = contMngr.GetBySite(siteId);
            info.Frame = frmRepo.Get(siteId);
            info.Pages = pageRepo.GetBySite(siteId);
            info.Bg = bgRepo.Get(siteId);
            info.Header = headerRepo.Get(siteId);
            info.Footer = footerRepo.Get(siteId);
            info.Logo = logoRepo.Get(siteId);
            return JsonConvert.SerializeObject(info);
        }

        public virtual void AssemblyFilesForOnline(ObjectId siteId, string folder) {
            if (!directory.Exists(folder)) {
                directory.CreateDirectory(folder);
            }
            else {
                utils.ClearFolderContents(folder);
            }
            //Copy template files
            utils.CopyFolder(consts.PathSourceFilesForPublishing, folder, true);
            //Create json file
            var randomFactor = Guid.NewGuid().ToString().Split(new char[] { '-' })[0];
            var jsonName = randomFactor + ".json";
            var jsonPath = path.Combine(folder, jsonName);
            file.WriteAllText(jsonPath, SiteToJson(siteId), Encoding.UTF8);
            //Replace json name in index.html
            var indexPath = path.Combine(folder, "index.html");
            var indexContents = file.ReadAllText(indexPath);
            indexContents = indexContents.Replace("{0}", jsonName);
            file.WriteAllText(indexPath, indexContents, Encoding.UTF8);
            //Download site assets
            DownloadImages(siteId, folder);
        }

        public virtual void AssemblyFilesForOffline(string folder) {
            utils.ClearFolderContents(folder);
            file.Copy(path.Combine(consts.PathSourceFilesForPublishing, "offline.html"), path.Combine(folder, "index.html"));
        }

        public virtual void DownloadImages(ObjectId siteId, string folder) {
            var localFolder = path.Combine(folder, "images/");
            var s3Folder = utils.GetS3FolderForSite(siteId);
            var images = contMngr.GetImagesBySite(siteId);
            foreach (var image in images) {
                var scalableImage = (ScalableImage)image;
                DownloadAsset(s3Folder, scalableImage.ImageExportedKey, localFolder);
                if (image.Type == ContentType.EXPANDABLE_IMAGE) {
                    DownloadAsset(s3Folder, ((ExpandableImage)image).ExpandedImage.ImageKey, localFolder);
                }
            }
            var bg = bgRepo.Get(siteId);
            if (bg.ImageKey != null) {
                DownloadAsset(s3Folder, bg.ImageKey, localFolder);
            }
            var header = headerRepo.Get(siteId);
            if (header.ImageKey != null) {
                DownloadAsset(s3Folder, header.ImageKey, localFolder);
            }
            var logo = logoRepo.Get(siteId);
            if (logo.ImageExportedKey != null) {
                DownloadAsset(s3Folder, logo.ImageExportedKey, localFolder);
            }
        }

        public virtual void DownloadAsset(string s3Folder, string s3Key, string targetFolder) {
            var key = s3Folder + s3Key;
            var localFile = path.Combine(targetFolder, s3Key);
            s3Repo.GetObject(key, localFile);
        }

        public virtual Publish PublishSiteOnIIS(ObjectId siteId, string subdomain) {
            var sitePath = path.Combine(consts.PathClientSites, siteId.ToString());
            AssemblyFilesForOnline(siteId, sitePath);
            var address = String.Format(consts.SubdomainPublishingAddress, subdomain);
            iisRepo.AddSite(siteId.ToString(), address, sitePath);
            return publishRepo.NewPublish(siteId, subdomain, address);
        }

        public virtual Publish PublishSiteOnRoute53(ObjectId siteId, string subdomain) {
            string bucketName = String.Format(consts.SubdomainPublishingAddress, subdomain);
            var steps = GetCleanupInstructions();
            string tmpfolder = "";
            Exception ex = null;
            Publish currentPublish = null;
            try {
                //Compile files into a temporary folder
                steps[0].Progress = Progress.Working;
                var tmpFolder = path.Combine(consts.TemporaryFolder, utils.GenerateRandomFileName(""));
                AssemblyFilesForOnline(siteId, tmpfolder);
                steps[0].Progress = Progress.Done;
                //Clears the bucket (if it already exists) and uploads the files to the bucket
                steps[1].Progress = Progress.Working;
                bucketRepo.EmptyBucket(bucketName);
                bucketRepo.Create(bucketName);
                awsUtils.UploadFolder(tmpfolder, bucketName);
                steps[1].Progress = Progress.Done;
                //Creates a new route to the bucket
                steps[2].Progress = Progress.Working;
                route53Repo.CreateRecordSet(bucketName);
                steps[2].Progress = Progress.Done;
            }
            catch (Exception exception) {
                ex = exception;
            }
            var previousPublish = publishRepo.GetLastPublish(siteId);
            var previousDNS = (previousPublish != null) ? previousPublish.DNS : null;
            if (ex == null) {
                currentPublish = publishRepo.NewPublish(siteId, subdomain, bucketName);
            }
            foreach (var step in steps) {
                switch (step.Id) {
                    case StepId.TmpFolder:
                        step.Cleanup.Invoke(step.Progress, tmpfolder, null);
                        break;
                    case StepId.Bucket:
                    case StepId.Route53:
                        step.Cleanup.Invoke(step.Progress, previousDNS, bucketName);
                        break;
                }
            }
            return currentPublish;
        }

        public virtual void TakeOfflineOnIIS(ObjectId siteId) {
            var activePublish = publishRepo.GetActivePublish(siteId);
            if (activePublish == null) {
                return;
            }
            var sitePath = path.Combine(consts.PathClientSites, siteId.ToString());
            AssemblyFilesForOffline(sitePath);
            publishRepo.TakeOffline(siteId);
        }

        public virtual void TakeOfflineOnRoute53(ObjectId siteId) {
            var activePublish = publishRepo.GetActivePublish(siteId);
            if (activePublish == null) {
                return;
            }
            route53Repo.DeleteRecordSet(activePublish.DNS);
            bucketRepo.DeleteBucket(activePublish.DNS);
            publishRepo.TakeOffline(siteId);
        }

        private List<Step> GetCleanupInstructions() {
            Action<Progress, string, string, Action<string>> cleanup = (Progress progress, string previousDNS, string currentDNS, Action<string> DeleteAwsItem) => {
                switch (progress) {
                    case Progress.Working:
                        DeleteAwsItem.Invoke(currentDNS);
                        return;
                    case Progress.Done:
                        if (!String.IsNullOrEmpty(previousDNS) && (previousDNS != currentDNS)) {
                            DeleteAwsItem.Invoke(previousDNS);
                        }
                        return;
                }
            };
            return new List<Step> {
                new Step {
                    Id = StepId.TmpFolder,
                    Cleanup = (Progress progress, string tmpFolder, string unused) => {
                        if (!directory.Exists(tmpFolder)) {
                            return;
                        }
                        try {
                            directory.Delete(tmpFolder);
                        }
                        catch {
                            //...
                        }
                    }
                },
                new Step {
                    Id = StepId.Bucket,
                    Cleanup = (Progress progress, string previousDNS, string currentDNS) => {
                        cleanup.Invoke(progress, previousDNS, currentDNS, (string item) => bucketRepo.DeleteBucket(item));
                    }
                },
                new Step {
                    Id = StepId.Route53,
                    Cleanup = (Progress progress, string previousDNS, string currentDNS) => {
                        cleanup.Invoke(progress, previousDNS, currentDNS, (string item) => route53Repo.DeleteRecordSet(item));
                    }
                }
            };
        }
    }
}