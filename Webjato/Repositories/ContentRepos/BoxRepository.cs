using MongoDB.Bson;
using MongoDB.Driver;
using System;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;

namespace Webjato.Repositories.ContentRepos {
    public class BoxRepository : ContentBaseRepository<Box> {
        private MongoCollection<Box> db;
        private ContentUtilities utils;

        public BoxRepository(MongoCollection<Box> collection, ContentUtilities contentUtilities)
            : base(collection, contentUtilities) {
            db = collection;
            utils = contentUtilities;
        }

        public virtual Box Create(ObjectId siteId, ObjectId pageId, int zindex) {
            var box = Create(siteId, pageId, 25, 270, zindex);
            box.Size = new Size {
                Width = 300,
                Height = 200,
            };
            box.Border = new BoxBorder {
                Exists = true,
                Width = 1,
                Color = "#DDDDDD"
            };
            box.Color = "#FFFFFF";
            db.Save(box);
            return box;
        }

        public virtual Box Update(Box box) {
            var myBox = Get(box.Id);
            utils.AuthenticateContent(myBox, box);
            myBox.Color = box.Color;
            myBox.Size.Width = box.Size.Width;
            myBox.Size.Height = box.Size.Height;
            myBox.Border.Exists = box.Border.Exists;
            myBox.Border.Width = box.Border.Width;
            myBox.Border.Color = box.Border.Color;
            myBox.Position = utils.NormalizePosition(box.Position);
            myBox.Updated = DateTime.UtcNow;
            db.Save(myBox);
            return box;
        }

        public Box Duplicate(Box original, ObjectId targetSite, ObjectId targetPage, int zindex) {
            var delta = (original.PageId == targetPage) ? 50 : 0;
            var duplicated = base.Create(targetSite, targetPage, original.Position.X + delta, original.Position.Y + delta, zindex);
            duplicated.Border = original.Border;
            duplicated.Color = original.Color;
            duplicated.Size = original.Size;
            db.Save(duplicated);
            return duplicated;
        }
    }
}