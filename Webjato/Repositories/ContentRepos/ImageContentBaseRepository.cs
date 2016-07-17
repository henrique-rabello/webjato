using MongoDB.Bson;
using MongoDB.Driver;
using System;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Utilities;

namespace Webjato.Repositories.ContentRepos {
    public class ImageContentBaseRepository<T> : ContentBaseRepository<T>, IContentBaseRepository where T : ScalableImage, new() {
        private MongoCollection<T> db;
        private ContentUtilities utils;
        private ScalableImageRepository<T> imgRepo;

        public ImageContentBaseRepository(MongoCollection<T> collection, ScalableImageRepository<T> scalableImageRepository, ContentUtilities contentUtilities)
            : base(collection, contentUtilities) {
            db = collection;
            utils = contentUtilities;
            imgRepo = scalableImageRepository;
        }

        public virtual T Create(ObjectId siteId, ObjectId pageId, int zindex) {
            var img = Create(siteId, pageId, 200, 200, zindex);
            img.ImageScale = 100;
            db.Save(img);
            return img;
        }

        public virtual T Update(T img, bool updateRecommendedSize) {
            var myImg = Get(img.Id);
            utils.AuthenticateContent(myImg, img);
            if (myImg.ImageScale != img.ImageScale) {
                myImg = imgRepo.UpdateScale(myImg.Id, myImg.SiteId, img.ImageScale);
            }
            myImg.Position = utils.NormalizePosition(img.Position);
            myImg.Updated = DateTime.UtcNow;
            if (updateRecommendedSize && !String.IsNullOrEmpty(myImg.ImageExportedKey)) {
                if (myImg.RecommendedSize == null) {
                    myImg.RecommendedSize = new Size();
                }
                myImg.RecommendedSize.Width = myImg.ImageExportedSize.Width;
                myImg.RecommendedSize.Height = myImg.ImageExportedSize.Height;
            }
            db.Save(myImg);
            return myImg;
        }

        public override void Delete(ContentBase img) {
            imgRepo.ClearImage(img.Id, img.SiteId);
            base.Delete(img);
        }

        public virtual T Duplicate(T original, ObjectId targetSite, ObjectId targetPage, int zindex) {
            var delta = (original.PageId == targetPage) ? 50 : 0;
            var duplicated = base.Create(targetSite, targetPage, original.Position.X + delta, original.Position.Y + delta, zindex);
            imgRepo.Duplicate(original.SiteId, original, duplicated.SiteId, duplicated);
            db.Save(duplicated);
            return duplicated;
        }
    }
}