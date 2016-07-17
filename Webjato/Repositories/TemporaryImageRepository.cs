using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;
using System;
using System.Linq;
using SystemInterface.IO;
using Webjato.Entities;
using Webjato.Repositories.AwsRepos;
using Webjato.Utilities;

namespace Webjato.Repositories {
    public class TemporaryImageRepository {
        private MongoCollection<TemporaryImage> db;
        private S3Repository s3Repo;
        private ImageUtils imgUtils;
        private General utils;
        private IPath Path;
        private IFile File;
        private string tmpFolderPath;

        public TemporaryImageRepository(MongoCollection<TemporaryImage> collection, S3Repository s3repository, ImageUtils imageUtils, General general, AuxiliaryConstants auxiliaryConstants, IPath path, IFile file) {
            db = collection;
            s3Repo = s3repository;
            imgUtils = imageUtils;
            utils = general;
            Path = path;
            File = file;
            tmpFolderPath = auxiliaryConstants.TemporaryFolder;
        }

        public virtual TemporaryImage CreateTemporaryImage(ObjectId siteId, string filePath, string filename) {
            var imageKey = utils.GenerateRandomFileName(Path.GetExtension(filePath));
            s3Repo.PutObject(filePath, utils.GetS3FolderForSite(siteId) + imageKey);
            var size = imgUtils.GetImageDimensions(filePath);
            var tmpImg = new TemporaryImage {
                SiteId = siteId,
                Key = imageKey,
                Name = filename,
                Width = size.Width,
                Height = size.Height,
                CroppedFrom = null
            };
            db.Insert(tmpImg);
            return tmpImg;
        }

        public virtual TemporaryImage CreateTemporaryImage(ObjectId siteId, string filePath, string filename, int minCanvasWidth, int minCanvasHeight) {
            var size = imgUtils.GetImageDimensions(filePath);
            if ((size.Width >= minCanvasWidth) && (size.Height >= minCanvasHeight)) {
                return CreateTemporaryImage(siteId, filePath, filename);
            }
            var newFilePath = Path.Combine(tmpFolderPath, utils.GenerateRandomFileName(Path.GetExtension(filePath)));
            imgUtils.AssureMinimunCanvasSize(filePath, newFilePath, minCanvasWidth, minCanvasHeight);
            //File.Delete(filePath);
            return CreateTemporaryImage(siteId, newFilePath, filename);
        }

        public virtual TemporaryImage Get(ObjectId id) {
            if (!db.AsQueryable().Any(x => x.Id == id)) {
                throw new ArgumentException("WJ => Could not find Temporary Image Id '" + id.ToString() + "'.");
            }
            return db.AsQueryable().Single(x => x.Id == id);
        }

        public virtual void Delete(ObjectId id, bool keepFile) {
            var tmpImg = Get(id);
            if (!keepFile) {
                s3Repo.DeleteObject(utils.GetS3FolderForSite(tmpImg.SiteId) + tmpImg.Key);
            }
            db.Remove(Query<TemporaryImage>.EQ(x => x.Id, id));
        }

        public void DeleteBySite(ObjectId siteId) {
            var tmpImgList = db.AsQueryable().Where(x => x.SiteId == siteId);
            foreach (var tmpImage in tmpImgList) {
                Delete(tmpImage.Id, false);
            }
        }

        public virtual TemporaryImage AssureMinimunCanvasSize(ObjectId id, int minWidth, int minHeight) {
            var tmpImg = Get(id);
            if ((tmpImg.Width >= minWidth) && (tmpImg.Height >= minHeight)) {
                return tmpImg;
            }
            var sourceFile = Path.Combine(tmpFolderPath, tmpImg.Key);
            s3Repo.GetObject(utils.GetS3FolderForSite(tmpImg.SiteId) + tmpImg.Key, sourceFile);
            var targetFile = Path.Combine(tmpFolderPath, utils.GenerateRandomFileName(Path.GetExtension(tmpImg.Name)));
            imgUtils.AssureMinimunCanvasSize(sourceFile, targetFile, minWidth, minHeight);
            var newTmpImg = CreateTemporaryImage(tmpImg.SiteId, targetFile, tmpImg.Name);
            File.Delete(sourceFile);
            File.Delete(targetFile);
            Delete(tmpImg.Id, false);
            return newTmpImg;
        }

        public virtual TemporaryImage Crop(ObjectId id, int x, int y, int w, int h, bool keepSourceImage) {
            var tmpImg = Get(id);
            var localFile = Path.Combine(tmpFolderPath, tmpImg.Key);
            s3Repo.GetObject(utils.GetS3FolderForSite(tmpImg.SiteId) + tmpImg.Key, localFile);
            var targetFile = Path.Combine(tmpFolderPath, utils.GenerateRandomFileName(Path.GetExtension(tmpImg.Name)));
            imgUtils.Crop(localFile, targetFile, x, y, w, h);
            var newTmpImg = CreateTemporaryImage(tmpImg.SiteId, targetFile, tmpImg.Name);
            newTmpImg.CroppedFrom = id;
            db.Save(newTmpImg);
            File.Delete(localFile);
            File.Delete(targetFile);
            if (!keepSourceImage) {
                Delete(tmpImg.Id, false);
            }
            return newTmpImg;
        }
    }
}