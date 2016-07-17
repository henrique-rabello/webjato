using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Drawing;
using System.Linq;
using Webjato.Entities.Site;

namespace Webjato.Repositories.SiteRepos {
    public class FooterRepository {
        private MongoCollection<Footer> db;

        public FooterRepository(MongoCollection<Footer> collection) {
            db = collection;
        }

        public virtual void CreateFooter(ObjectId siteId) {
            if (db.AsQueryable().Any(x => x.Id == siteId)) {
                throw new ArgumentException("WJ => Cannot create this footer. A Footer Id '" + siteId.ToString() + "' already exists.");
            }
            var footer = new Footer { Id = siteId, Color = "#FFFFFF", IsTransparent = false, Text = "<span style=\"font-size: 13px; color: #666666;\">© 2014 Meu Site - Todos os direitos reservados.</span>" };
            db.Save(footer);
        }

        public virtual Footer Get(ObjectId siteId) {
            if (!db.AsQueryable().Any(x => x.Id == siteId)) {
                throw new ArgumentException("WJ => Could not find Footer Id '" + siteId.ToString() + "'.");
            }
            return db.AsQueryable().Single(x => x.Id == siteId);
        }

        public virtual Footer Update(ObjectId siteId, Color color) {
            var footer = Get(siteId);
            footer.Color = ColorTranslator.ToHtml(color);
            footer.IsTransparent = false;
            footer.Updated = DateTime.UtcNow;
            db.Save(footer);
            return footer;
        }

        public virtual Footer Update(ObjectId siteId, bool isTransparent) {
            var footer = Get(siteId);
            footer.IsTransparent = isTransparent;
            footer.Updated = DateTime.UtcNow;
            db.Save(footer);
            return footer;
        }

        public virtual Footer Update(ObjectId siteId, string text) {
            var footer = Get(siteId);
            footer.Text = text;
            footer.Updated = DateTime.UtcNow;
            db.Save(footer);
            return footer;
        }
    }
}