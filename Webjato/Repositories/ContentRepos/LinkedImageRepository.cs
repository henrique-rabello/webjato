using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Webjato.Entities.Content;
using Webjato.Utilities;
using MongoDB.Driver.Linq;
using MongoDB.Driver;
using MongoDB.Bson;
using Webjato.Entities;
using Webjato.Repositories.SiteRepos;
using Webjato.Entities.Enums;

namespace Webjato.Repositories.ContentRepos {
    public class LinkedImageRepository : ImageContentBaseRepository<LinkedImage> {
        private ScalableImageRepository<LinkedImage> imgRepo;
        private ContentUtilities utils;
        private MongoCollection<LinkedImage> db;

        public LinkedImageRepository(MongoCollection<LinkedImage> collection, ScalableImageRepository<LinkedImage> scalableImageRepo, ContentUtilities contentUtilities)
            : base(collection, scalableImageRepo, contentUtilities) {
            imgRepo = scalableImageRepo;
            utils = contentUtilities;
            db = collection;
        }

        public override LinkedImage Create(ObjectId siteId, ObjectId pageId, int zindex) {
            var img = base.Create(siteId, pageId, zindex);
            img.LinkType = LinkType.EXTERNAL;
            db.Save(img);
            return img;
        }

        public override LinkedImage Update(LinkedImage img, bool updateRecommendedSize) {
            var myImg = base.Update(img, updateRecommendedSize);
            myImg.LinkType = img.LinkType;
            myImg.LinkURL = img.LinkURL;
            myImg.TargetPageId = img.TargetPageId;
            db.Save(myImg);
            return myImg;
        }

        public override LinkedImage Duplicate(LinkedImage original, ObjectId targetSite, ObjectId targetPage, int zindex) {
            var delta = (original.PageId == targetPage) ? 50 : 0;
            var duplicated = base.Create(targetSite, targetPage, original.Position.X + delta, original.Position.Y + delta, zindex);
            imgRepo.Duplicate(original.SiteId, original, original.SiteId, duplicated);
            duplicated.LinkType = original.LinkType;
            duplicated.LinkURL = original.LinkURL;
            duplicated.TargetPageId = original.TargetPageId;
            db.Save(duplicated);
            return duplicated;
        }
    }
}