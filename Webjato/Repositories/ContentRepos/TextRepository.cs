using MongoDB.Bson;
using MongoDB.Driver;
using System;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;

namespace Webjato.Repositories.ContentRepos {
    public class TextRepository : ContentBaseRepository<Text> {
        private MongoCollection<Text> db;
        private ContentUtilities utils;

        public TextRepository(MongoCollection<Text> collection, ContentUtilities contentUtilities)
            : base(collection, contentUtilities) {
            db = collection;
            utils = contentUtilities;
        }

        public virtual Text Create(ObjectId siteId, ObjectId pageId, int zindex) {
            var text = Create(siteId, pageId, 20, 270, zindex);
            text.Value = "";
            text.Size = new Size {
                Width = 400,
                Height = 100
            };
            db.Save(text);
            return text;
        }

        public virtual Text Update(Text text) {
            var myText = Get(text.Id);
            utils.AuthenticateContent(myText, text);
            myText.Value = text.Value;
            myText.Size.Width = text.Size.Width;
            myText.Size.Height = text.Size.Height;
            myText.Position = utils.NormalizePosition(text.Position);
            myText.Updated = DateTime.UtcNow;
            db.Save(myText);
            return myText;
        }

        public Text Duplicate(Text original, ObjectId targetSite, ObjectId targetPage, int zindex) {
            var delta = (original.PageId == targetPage) ? 50 : 0;
            var duplicated = base.Create(targetSite, targetPage, original.Position.X + delta, original.Position.Y + delta, zindex);
            duplicated.Value = original.Value;
            duplicated.Size = original.Size;
            db.Save(duplicated);
            return duplicated;
        }
    }
}