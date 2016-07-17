using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;

namespace Webjato.Repositories.ContentRepos {
    public class GoogleMapsRepository : ContentBaseRepository<GoogleMaps> {
        private MongoCollection<GoogleMaps> db;
        private ContentUtilities utils;

        public GoogleMapsRepository(MongoCollection<GoogleMaps> collection, ContentUtilities contentUtilities)
            : base(collection, contentUtilities) {
            db = collection;
            utils = contentUtilities;
        }

        public virtual GoogleMaps Create(ObjectId siteId, ObjectId pageId, int zindex) {
            var maps = Create(siteId, pageId, 200, 200, zindex);
            maps.Address = "";
            maps.Size = NormalizeMapSize(480);
            db.Save(maps);
            return maps;
        }

        public virtual GoogleMaps Update(GoogleMaps maps) {
            var myMaps = Get(maps.Id);
            utils.AuthenticateContent(myMaps, maps);
            myMaps.Address = maps.Address;
            myMaps.Size = NormalizeMapSize(maps.Size.Width);
            myMaps.Position = utils.NormalizePosition(maps.Position);
            myMaps.Updated = DateTime.UtcNow;
            db.Save(myMaps);
            return myMaps;
        }

        /// <summary>[Segurança] Evita o uso de tamanhos inválidos.</summary>
        public virtual Size NormalizeMapSize(int width) {
            switch (width) {
                case 414:
                    return new Size { Width = 414, Height = 233 };
                case 480:
                    return new Size { Width = 480, Height = 270 };
                case 870:
                    return new Size { Width = 870, Height = 300 };
                case 1000:
                    return new Size { Width = 1000, Height = 400 };
                default:
                    throw new ArgumentException("[WJ] Unknown video width " + width.ToString());
            }
        }

        public GoogleMaps Duplicate(GoogleMaps original, ObjectId targetSite, ObjectId targetPage, int zindex) {
            var delta = (original.PageId == targetPage) ? 50 : 0;
            var duplicated = base.Create(targetSite, targetPage, original.Position.X + delta, original.Position.Y + delta, zindex);
            duplicated.Address = original.Address;
            duplicated.Size = original.Size;
            db.Save(duplicated);
            return duplicated;
        }
    }
}