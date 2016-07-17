using MongoDB.Bson;
using MongoDB.Driver;
using System;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;

namespace Webjato.Repositories.ContentRepos {
    public class ExpandableImageRepository : ImageContentBaseRepository<ExpandableImage> {
        private MongoCollection<ExpandableImage> db;
        private ContentUtilities utils;
        private ScalableImageRepository<ExpandableImage> expandableImageRepo;
        private TemporaryImageRepository tmpImgRepo;

        public ExpandableImageRepository(
            MongoCollection<ExpandableImage> collection,
            ScalableImageRepository<ExpandableImage> scalableImageRepository,
            TemporaryImageRepository temporaryImageRepository,
            ContentUtilities contentUtilities)
            : base(collection, scalableImageRepository, contentUtilities) {
            db = collection;
            utils = contentUtilities;
            expandableImageRepo = scalableImageRepository;
            tmpImgRepo = temporaryImageRepository;
        }

        public override ExpandableImage Create(ObjectId siteId, ObjectId pageId, int zindex) {
            var img = base.Create(siteId, pageId, zindex);
            img.ExpandedImage = new SimpleImage();
            db.Save(img);
            return img;
        }

        public virtual ExpandableImage UpdateFromTemporaryImage(ObjectId id, TemporaryImage tmpImg, bool setRecommendedSize) {
            var siteId = Get(id).SiteId;
            var img = expandableImageRepo.UpdateFromTemporaryImage(tmpImg, id, siteId, setRecommendedSize);
            //TODO - este inline if só está testando um dos casos. fazer o outro teste.
            var originalTemporaryImage = (tmpImg.CroppedFrom != null) ? tmpImgRepo.Get((ObjectId)tmpImg.CroppedFrom) : tmpImg;
            img.ExpandedImage.Id = originalTemporaryImage.Id;
            img.ExpandedImage.ImageName = originalTemporaryImage.Name;
            img.ExpandedImage.ImageKey = originalTemporaryImage.Key;
            img.ExpandedImage.ImageSize = new Size { Width = originalTemporaryImage.Width, Height = originalTemporaryImage.Height };
            img.Updated = DateTime.UtcNow;
            db.Save(img);
            if (tmpImg.CroppedFrom != null) {
                tmpImgRepo.Delete((ObjectId)tmpImg.CroppedFrom, true);
            }
            return img;
        }

        public override ExpandableImage Duplicate(ExpandableImage original, ObjectId targetSite, ObjectId targetPage, int zindex) {
            var delta = (original.PageId == targetPage) ? 50 : 0;
            var duplicated = base.Create(targetSite, targetPage, original.Position.X + delta, original.Position.Y + delta, zindex);
            duplicated = expandableImageRepo.DuplicateSimpleImage(original.SiteId, original, duplicated.SiteId, duplicated, false);
            return duplicated;
        }
    }
}