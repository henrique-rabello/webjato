using MongoDB.Bson;
using MongoDB.Driver;
using System;
using Webjato.Entities.Content;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;

namespace Webjato.Repositories.ContentRepos {
    public class ContactFormRepository : ContentBaseRepository<ContactForm> {
        private MongoCollection<ContactForm> db;
        private ContentUtilities utils;

        public ContactFormRepository(MongoCollection<ContactForm> collection, ContentUtilities contentUtilities)
            : base(collection, contentUtilities) {
            db = collection;
            utils = contentUtilities;
        }

        public virtual ContactForm Create(ObjectId siteId, ObjectId pageId, int zindex) {
            var cf = Create(siteId, pageId, 200, 200, zindex);
            cf.MailTo = "";
            cf.TextColor = "#000000";
            cf.BackgroundColor = "#FFFFFF";
            cf.BorderColor = "#859AB5";
            cf.TextToWriteColor = "#000000";
            db.Save(cf);
            return cf;
        }

        public virtual ContactForm Update(ContactForm cf) {
            var myCf = Get(cf.Id);
            utils.AuthenticateContent(myCf, cf);
            myCf.MailTo = cf.MailTo;
            myCf.TextColor = cf.TextColor;
            myCf.BackgroundColor = cf.BackgroundColor;
            myCf.BorderColor = cf.BorderColor;
            myCf.TextToWriteColor = cf.TextToWriteColor;
            myCf.Position = utils.NormalizePosition(cf.Position);
            myCf.Updated = DateTime.UtcNow;
            db.Save(myCf);
            return myCf;
        }

        public ContactForm Duplicate(ContactForm original, ObjectId targetSite, ObjectId targetPage, int zindex) {
            var delta = (original.PageId == targetPage) ? 50 : 0;
            var duplicated = base.Create(targetSite, targetPage, original.Position.X + delta, original.Position.Y + delta, zindex);
            duplicated.MailTo = original.MailTo;
            duplicated.TextColor = original.TextColor;
            duplicated.BackgroundColor = original.BackgroundColor;
            duplicated.BorderColor = original.BorderColor;
            duplicated.TextToWriteColor = original.TextToWriteColor;
            db.Save(duplicated);
            return duplicated;
        }
    }
}