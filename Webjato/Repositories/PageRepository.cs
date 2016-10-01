using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using SystemInterface.IO;
using Webjato.Entities;
using Webjato.Repositories.AwsRepos;
using Webjato.Utilities;

namespace Webjato.Repositories {
    public class PageRepository {
        private MongoCollection<Page> db;
        private General util;
        private S3Repository s3repo;
        private IPath path;

        public PageRepository(MongoCollection<Page> database, General generalUtilities, S3Repository s3repository, IPath ipath) {
            db = database;
            util = generalUtilities;
            s3repo = s3repository;
            path = ipath;
        }

        public virtual Page CreatePage(ObjectId siteId) {
            int position = 1;
            if (db.AsQueryable().Any(x => x.SiteId == siteId)) {
                position = db.AsQueryable().Where(x => x.SiteId == siteId).Select(x => x.Position).Max() + 1;
            }
            var page = new Page {
                SiteId = siteId,
                Position = position,
                Height = 600 };
            db.Insert(page);
            return page;
        }

        public virtual Page Get(ObjectId id) {
            if (!db.AsQueryable().Any(x => x.Id == id)) {
                throw new Exception("WJ => Could not find Page Id '" + id.ToString() + "'.");
            }
            return db.AsQueryable().Single(x => x.Id == id);
        }

        public virtual List<Page> GetBySite(ObjectId siteId) {
            return db.AsQueryable().Where(x => x.SiteId == siteId).ToList();
        }

        public virtual List<Page> GetTemplates() {
            return db.AsQueryable().Where(x => x.IsTemplate && !String.IsNullOrEmpty(x.Title) && !String.IsNullOrEmpty(x.Thumb)).ToList();
        }

        public virtual void UpdateTitle(ObjectId id, string newTitle, string newFileName) {
            if (String.IsNullOrEmpty(newTitle)) newTitle = "";
            if (String.IsNullOrEmpty(newFileName)) newFileName = "";
            var page = Get(id);
            page.Title = newTitle;
            page.FileName = newFileName;
            page.Updated = DateTime.UtcNow;
            db.Save(page);
        }

        public virtual void UpdateHeight(ObjectId id, int height) {
            var page = Get(id);
            page.Height = height;
            page.Updated = DateTime.UtcNow;
            db.Save(page);
        }

        public virtual void SwapPosition(ObjectId id1, ObjectId id2) {
            var page1 = Get(id1);
            var page2 = Get(id2);
            var aux = page1.Position;
            page1.Position = page2.Position;
            page1.Updated = DateTime.UtcNow;
            page2.Position = aux;
            page2.Updated = DateTime.UtcNow;
            db.Save(page1);
            db.Save(page2);
        }

        public virtual Page UpdateThumb(ObjectId id, string thumbPath) {
            var page = Get(id);
            if (!String.IsNullOrEmpty(page.Thumb)) {
                s3repo.DeleteObject(util.GetS3FolderForSite(page.SiteId) + page.Thumb);
            }
            var key = util.GenerateRandomFileName(path.GetExtension(thumbPath));
            s3repo.PutObject(thumbPath, util.GetS3FolderForSite(page.SiteId) + key);
            page.Thumb = key;
            page.IsTemplate = true;
            page.Updated = DateTime.Now;
            db.Save(page);
            return page;
        }

        public virtual void EnsureTargetPageMinimumHeight(ObjectId sourcePageId, ObjectId targetPageId) {
            var source = Get(sourcePageId);
            var target = Get(targetPageId);
            if (source.Height > target.Height) {
                UpdateHeight(targetPageId, source.Height);
            }
        }
    }
}