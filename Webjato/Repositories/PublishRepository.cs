using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System.Linq;
using Webjato.Entities;

namespace Webjato.Repositories {
    public class PublishRepository {
        private MongoCollection<Publish> db;

        public PublishRepository(MongoCollection<Publish> database) {
            db = database;
        }

        public virtual Publish GetLastPublish(ObjectId siteId) {
            var list = db.AsQueryable().Where(x => x.SiteId == siteId).ToList();
            if (list.Count > 0) {
                return list.OrderByDescending(x => x.Version).First();
            }
            return null;
        }

        public virtual bool IsSubdomainInUse(ObjectId siteId, string subdomain) {
            return db.AsQueryable().Any(x => x.SiteId != siteId && x.Subdomain == subdomain);
        }

        public virtual Publish GetActivePublish(ObjectId siteId) {
            var list = db.AsQueryable().Where(x => x.SiteId == siteId && x.Active).ToList();
            if (list.Count == 0) {
                return null;
            }
            else {
                return list.First();
            }
        }

        internal virtual void TakeOffline(ObjectId siteId) {
            var publish = GetActivePublish(siteId);
            if (publish == null) {
                return;
            }
            publish.Active = false;
            db.Save(publish);
        }

        public virtual Publish NewPublish(ObjectId siteId, string subdomain, string dns) {
            var lastPublish = GetLastPublish(siteId);
            var version = 1;
            if (lastPublish != null) {
                version = lastPublish.Version + 1;
                lastPublish.Active = false;
                db.Save(lastPublish);
            }
            var publish = new Publish {
                SiteId = siteId,
                Subdomain = subdomain,
                DNS = dns,
                Version = version,
                Active = true
            };
            db.Insert(publish);
            return publish;
        }
    }
}