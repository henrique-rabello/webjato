using MongoDB.Bson;
using MongoDB.Driver;
using System;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;

namespace Webjato.Repositories.ContentRepos {
    public class SocialPluginRepository : ContentBaseRepository<SocialPlugins> {
        private MongoCollection<SocialPlugins> db;
        private ContentUtilities utils;

        public SocialPluginRepository(MongoCollection<SocialPlugins> collection, ContentUtilities contentUtilities)
            : base(collection, contentUtilities) {
            db = collection;
            utils = contentUtilities;
        }

        public virtual SocialPlugins Create(ObjectId siteId, ObjectId pageId, int zindex) {
            var sp = Create(siteId, pageId, 20, 270, zindex);
            sp.Facebook = new SocialPlugin();
            sp.Twitter = new SocialPlugin();
            sp.YouTube = new SocialPlugin();
            sp.LinkedIn = new SocialPlugin();
            sp.GooglePlus = new SocialPlugin();
            sp.Pinterest = new SocialPlugin();
            sp.Instagram = new SocialPlugin();
            sp.Size = SocialPluginSize.Large;
            db.Save(sp);
            return sp;
        }

        public virtual SocialPlugins Update(SocialPlugins sp) {
            var mySP = Get(sp.Id);
            utils.AuthenticateContent(mySP, sp);
            mySP.Facebook.Enabled = sp.Facebook.Enabled;
            mySP.Facebook.URL = sp.Facebook.URL;
            mySP.Twitter.Enabled = sp.Twitter.Enabled;
            mySP.Twitter.URL = sp.Twitter.URL;
            mySP.YouTube.Enabled = sp.YouTube.Enabled;
            mySP.YouTube.URL = sp.YouTube.URL;
            mySP.LinkedIn.Enabled = sp.LinkedIn.Enabled;
            mySP.LinkedIn.URL = sp.LinkedIn.URL;
            mySP.GooglePlus.Enabled = sp.GooglePlus.Enabled;
            mySP.GooglePlus.URL = sp.GooglePlus.URL;
            mySP.Pinterest.Enabled = sp.Pinterest.Enabled;
            mySP.Pinterest.URL = sp.Pinterest.URL;
            mySP.Instagram.Enabled = sp.Instagram.Enabled;
            mySP.Instagram.URL = sp.Instagram.URL;
            mySP.Size = sp.Size;
            mySP.Position = utils.NormalizePosition(sp.Position);
            mySP.Updated = DateTime.UtcNow;
            db.Save(mySP);
            return mySP;
        }

        public SocialPlugins Duplicate(SocialPlugins original, ObjectId targetSite, ObjectId targetPage, int zindex) {
            var delta = (original.PageId == targetPage) ? 50 : 0;
            var duplicated = base.Create(targetSite, targetPage, original.Position.X + delta, original.Position.Y + delta, zindex);
            duplicated.Facebook = original.Facebook;
            duplicated.Twitter = original.Twitter;
            duplicated.YouTube = original.YouTube;
            duplicated.LinkedIn = original.LinkedIn;
            duplicated.GooglePlus = original.GooglePlus;
            duplicated.Pinterest = original.Pinterest;
            duplicated.Instagram = original.Instagram;
            duplicated.Size = original.Size;
            db.Save(duplicated);
            return duplicated;
        }
    }
}