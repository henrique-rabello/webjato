using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Linq;
using SystemInterface.IO;
using Webjato.Entities;
using Webjato.Repositories.AwsRepos;
using Webjato.Utilities;

namespace Webjato.Repositories {
    public abstract class SimpleImageRepository<T> where T : ISimpleImage {
        private MongoCollection<T> db;
        private S3Repository s3repo;
        private TemporaryImageRepository tmpImgRepo;
        private General utils;
        private IPath path;
        private ImageUtils imgUtils;

        public SimpleImageRepository(MongoCollection<T> collection, S3Repository s3repository, TemporaryImageRepository temporaryImageRepository, General general, IPath ipath, ImageUtils imageUtils) {
            db = collection;
            s3repo = s3repository;
            tmpImgRepo = temporaryImageRepository;
            utils = general;
            path = ipath;
            imgUtils = imageUtils;
        }

        public virtual T Get(ObjectId id) {
            if (!db.AsQueryable().Any(x => x.Id == id)) {
                throw new ArgumentException("WJ => Could not find " + typeof(T).Name + " Id '" + id.ToString() + "'.");
            }
            return db.AsQueryable().Single(x => x.Id == id);
        }
        
        public virtual T ClearSimpleImage(ObjectId id,  ObjectId siteId) {
            var img = Get(id);
            if (!String.IsNullOrEmpty(img.ImageKey)) {
                var s3Folder = utils.GetS3FolderForSite(siteId);
                s3repo.DeleteObject(s3Folder + img.ImageKey);
            }
            img.ImageName = null;
            img.ImageKey = null;
            img.ImageSize = new Size { Width = 0, Height = 0 };
            img.Updated = DateTime.UtcNow;
            db.Save(img);
            return img;
        }

        public virtual T NewSimpleImageFromTemporaryImage(TemporaryImage tmpimg, ObjectId id, ObjectId siteId, bool setRecommendedSize) {
            var img = ClearSimpleImage(id, siteId);
            img.ImageName = tmpimg.Name;
            img.ImageKey = tmpimg.Key;
            img.ImageSize = new Size { Width = tmpimg.Width, Height = tmpimg.Height };
            img.Updated = DateTime.UtcNow;
            if (setRecommendedSize) {
                img.RecommendedSize = new Size {
                    Width = tmpimg.Width,
                    Height = tmpimg.Height
                };
            }
            db.Save(img);
            tmpImgRepo.Delete(tmpimg.Id, true);
            return img;
        }

        public virtual T NewSimpleImage(ObjectId id, ObjectId siteId, string filepath, string filename) {
            var imageKey = utils.GenerateRandomFileName(path.GetExtension(filepath));
            s3repo.PutObject(filepath, utils.GetS3FolderForSite(siteId) + imageKey);
            var size = imgUtils.GetImageDimensions(filepath);
            var img = ClearSimpleImage(id, siteId);
            img.ImageKey = imageKey;
            img.ImageName = filename;
            img.ImageSize = new Size { Width = size.Width, Height = size.Height };
            img.Updated = DateTime.UtcNow;
            db.Save(img);
            return img;
        }

        public virtual T DuplicateSimpleImage(ObjectId sourceSiteId, T source, ObjectId targetSiteId, T target, bool commitChangesToDataBase) {
            if (source.ImageKey == null) {
                return target;
            }
            var imageKey = utils.GenerateRandomFileName(path.GetExtension(source.ImageKey));
            s3repo.CopyObject(utils.GetS3FolderForSite(sourceSiteId) + source.ImageKey, utils.GetS3FolderForSite(targetSiteId) + imageKey);
            target.ImageKey = imageKey;
            target.ImageName = source.ImageName;
            target.ImageSize = source.ImageSize;
            target.RecommendedSize = source.RecommendedSize;
            if (commitChangesToDataBase) {
                db.Save(target);
            }
            return target;
        }
    }
}