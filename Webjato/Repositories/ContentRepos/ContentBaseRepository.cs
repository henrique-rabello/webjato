using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Utilities;

namespace Webjato.Repositories.ContentRepos {
    public class ContentBaseRepository<T> : IContentBaseRepository where T : ContentBase, new() {
        private MongoCollection<T> db;
        private ContentUtilities utils;

        public ContentBaseRepository(MongoCollection<T> collection, ContentUtilities contentUtilities) {
            db = collection;
            utils = contentUtilities;
        }

        public virtual T Create(ObjectId siteId, ObjectId pageId, int x, int y, int zindex) {
            var type = utils.GetContentType<T>();
            var content = new T {
                SiteId = siteId,
                PageId = pageId,
                Position = new Position {
                    X = x,
                    Y = y,
                    ZIndex = zindex
                },
                Type = type
            };
            db.Insert(content);
            db.Save(content);
            return content;
        }

        public virtual T Get(ObjectId id) {
            if (!db.AsQueryable().Any(x => x.Id == id)) {
                throw new ArgumentException("WJ => Could not find " + typeof(T).Name + " id '" + id.ToString() + "'.");
            }
            return db.AsQueryable().Single(x => x.Id == id);
        }

        public virtual List<T> GetBySite(ObjectId id) {
            return db.AsQueryable().Where(x => x.SiteId == id).ToList();
        }

        public virtual List<T> GetByPage(ObjectId id) {
            return db.AsQueryable().Where(x => x.PageId == id).ToList();
        }

        public virtual void Delete(ContentBase content) {
            utils.AuthenticateContent(Get(content.Id), content);
            db.Remove(Query<T>.EQ(x => x.Id, content.Id));
        }

        public virtual ContentBase UpdatePosition(ContentBase content) {
            var myContent = Get(content.Id);
            utils.AuthenticateContent(myContent, content);
            myContent.Position = utils.NormalizePosition(content.Position);
            myContent.Updated = DateTime.Now;
            db.Save(myContent);
            return myContent;
        }

        public virtual ContentBase UpdateZIndex(ObjectId id, int zindex) {
            var content = Get(id);
            content.Position.ZIndex = zindex;
            content.Updated = DateTime.Now;
            db.Save(content);
            return content;
        }

        public virtual ContentBase SimpleUpdate(ContentBase content) {
            db.Save(content);
            return content;
        }
    }
}