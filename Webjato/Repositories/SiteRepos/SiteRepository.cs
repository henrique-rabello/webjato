using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;

namespace Webjato.Repositories.SiteRepos {
    public class SiteRepository {
        private MongoCollection<Site> db;

        public SiteRepository(MongoCollection<Site> collection) {
            db = collection;
        }

        public virtual Site CreateSite(ObjectId userId) {
            var site = new Site { UserId = userId, Alignment = HALIGNMENT.CENTER, Title = "", Menu = GetDefaultMenu() };
            db.Insert(site);
            return site;
        }

        public virtual Menu GetDefaultMenu() {
            var menu = new Menu {
                Id = "foc",
                VAlign = VALIGNMENT.BOTTOM,
                Parts = new List<MenuPart> {
                    new MenuPart { Id = "BgActive", Value = "#DDF0F8" },
                    new MenuPart { Id = "Text", Value="#333333"},
                    new MenuPart { Id = "TextActive", Value = "#333333" }
                }
            };
            return menu;
        }

        public virtual Site Get(ObjectId id) {
            if (!db.AsQueryable().Any(x => x.Id == id)) {
                throw new Exception("WJ => Could not find a Site Id '" + id.ToString() + "'.");
            }
            return db.AsQueryable().Single(x => x.Id == id);
        }

        public virtual Site GetByUserId(ObjectId userId) {
            if (!db.AsQueryable().Any(x => x.UserId == userId)) {
                throw new Exception("WJ => Could not find a Site for User Id '" + userId.ToString() + "'.");
            }
            return db.AsQueryable().Single(x => x.UserId == userId);
        }

        public virtual void UpdateAligment(ObjectId userId, HALIGNMENT newAligment) {
            var site = GetByUserId(userId);
            site.Alignment = newAligment;
            site.Updated = DateTime.UtcNow;
            db.Save(site);
        }

        public virtual void UpdateTitle(ObjectId userId, string newTitle) {
            if (String.IsNullOrEmpty(newTitle)) newTitle = "";
            var site = GetByUserId(userId);
            site.Title = newTitle;
            site.Updated = DateTime.UtcNow;
            db.Save(site);
        }

        public virtual Site UpdateMenu(ObjectId userId, Menu menu) {
            var site = GetByUserId(userId);
            site.Menu = menu;
            site.Updated = DateTime.UtcNow;
            db.Save(site);
            return site;
        }

        public List<Site> GetAll() {
            return db.AsQueryable().ToList();
        }
    }
}