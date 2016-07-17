using MongoDB.Bson;
using MongoDB.Driver;
using System;
using SystemInterface.IO;
using Webjato.Entities;
using Webjato.Repositories.AwsRepos;
using Webjato.Utilities;

namespace Webjato.Repositories {
    public class ScalableImageRepository<T> : SimpleImageRepository<T> where T : IScalableImage {
        private MongoCollection<T> db;
        private IFile File;
        private IPath Path;
        private General util;
        private S3Repository s3repo;
        private ImageUtils imgUtils;
        private string tmpFolder;

        public ScalableImageRepository(MongoCollection<T> collection, S3Repository s3repository, General general, ImageUtils imageUtils, IPath path, IFile file, AuxiliaryConstants auxConst, TemporaryImageRepository temporaryImageRepository)
            : base(collection, s3repository, temporaryImageRepository, general, path, imageUtils) {
            db = collection;
            s3repo = s3repository;
            util = general;
            imgUtils = imageUtils;
            Path = path;
            File = file;
            tmpFolder = auxConst.TemporaryFolder;
        }

        public virtual T ClearImage(ObjectId id, ObjectId siteId) {
            ClearSimpleImage(id, siteId);
            return  ClearScaledImage(id, siteId);
        }

        public virtual T UpdateFromTemporaryImage(TemporaryImage tmpImg, ObjectId id, ObjectId siteId, bool setRecommendedSize) {
            var img = NewSimpleImageFromTemporaryImage(tmpImg, id, siteId, setRecommendedSize);
            return UpdateScale(id, siteId, img.ImageScale);
        }

        public virtual T UpdateScale(ObjectId id, ObjectId siteId, int scale) {
            var img = ClearScaledImage(id, siteId);
            img.ImageScale = scale;
            img.Updated = DateTime.UtcNow;
            db.Save(img);
            if (String.IsNullOrEmpty(img.ImageKey)) {
                return img;
            }
            var s3Folder = util.GetS3FolderForSite(siteId);
            var localImageKey = Path.Combine(tmpFolder, img.ImageKey);
            if (!File.Exists(localImageKey)) {
                s3repo.GetObject(s3Folder + img.ImageKey, localImageKey);
            }
            var scaledImageKey = util.GenerateRandomFileName(Path.GetExtension(img.ImageName));
            var tmpFilepath = Path.Combine(tmpFolder, scaledImageKey);
            var scaledSize = imgUtils.ScaleImage(localImageKey, (double)img.ImageScale, tmpFilepath);
            s3repo.PutObject(tmpFilepath, s3Folder + scaledImageKey);
            File.Delete(localImageKey);
            File.Delete(tmpFilepath);
            img.ImageExportedKey = scaledImageKey;
            img.ImageExportedSize = new Size { Width = scaledSize.Width, Height = scaledSize.Height };
            img.Updated = DateTime.UtcNow;
            db.Save(img);
            return img;
        }

        public virtual T ClearScaledImage(ObjectId id, ObjectId siteId) {
            var img = Get(id);
            if (!String.IsNullOrEmpty(img.ImageExportedKey)) {
                var s3Folder = util.GetS3FolderForSite(siteId);
                s3repo.DeleteObject(s3Folder + img.ImageExportedKey);
            }
            img.ImageExportedKey = null;
            img.ImageExportedSize = new Size { Width = 0, Height = 0 };
            img.Updated = DateTime.UtcNow;
            db.Save(img);
            return img;
        }

        public virtual T Duplicate(ObjectId sourceSiteId, T source, ObjectId targetSiteId, T target) {
            target = base.DuplicateSimpleImage(sourceSiteId, source, targetSiteId, target, true);
            if (source.ImageExportedKey == null) {
                return target;
            }
            var imageKey = util.GenerateRandomFileName(Path.GetExtension(source.ImageExportedKey));
            s3repo.CopyObject(util.GetS3FolderForSite(sourceSiteId) + source.ImageExportedKey, util.GetS3FolderForSite(targetSiteId) + imageKey);
            target.ImageExportedKey = imageKey;
            target.ImageScale = source.ImageScale;
            target.ImageExportedSize = source.ImageExportedSize;
            db.Save(target);
            return target;
        }
    }
}