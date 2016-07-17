using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;

namespace Webjato.Repositories.SiteRepos {
    public class FrameRepository {
        private MongoCollection<Frame> db;

        public FrameRepository(MongoCollection<Frame> collection) {
            db = collection;
        }

        public virtual Frame CreateFrame(ObjectId siteId) {
            if (db.AsQueryable().Any(x => x.Id == siteId)) {
                throw new ArgumentException("WJ => Cannot create this frame. A frame Id '" + siteId.ToString() + "' already exists.");
            }
            var defaultBorder = new FrameBorder { Color = "#FFFFFF", Width = 0 };
            var frame = new Frame {
                Id = siteId,
                MarginTop = 0,
                Color = "#FFFFFF",
                IsTransparent = false,
                BorderTop = defaultBorder,
                BorderBottom = defaultBorder,
                BorderSides = defaultBorder
            };
            db.Save(frame);
            return frame;

        }

        public virtual Frame Get(ObjectId siteId) {
            if (!db.AsQueryable().Any(x => x.Id == siteId)) {
                throw new ArgumentException("WJ => Could not find Frame Id '" + siteId.ToString() + "'.");
            }
            return db.AsQueryable().Single(x => x.Id == siteId);
        }

        public virtual Frame Update(ObjectId siteId, int marginTop) {
            var frame = Get(siteId);
            frame.MarginTop = marginTop;
            frame.Updated = DateTime.UtcNow;
            db.Save(frame);
            return frame;
        }

        public virtual Frame Update(ObjectId siteId, Color color) {
            var frame = Get(siteId);
            frame.Color = ColorTranslator.ToHtml(color);
            frame.IsTransparent = false;
            frame.Updated = DateTime.UtcNow;
            db.Save(frame);
            return frame;
        }

        public virtual Frame Update(ObjectId siteId, bool isTransparent) {
            var frame = Get(siteId);
            frame.IsTransparent = isTransparent;
            frame.Updated = DateTime.UtcNow;
            db.Save(frame);
            return frame;
        }

        public virtual Frame Update(ObjectId siteId, FrameBorderType borderType, Color color, int width) {
            var border = new FrameBorder { Color = ColorTranslator.ToHtml(color), Width = width };
            var frame = Get(siteId);
            switch (borderType) {
                case FrameBorderType.TOP :
                    frame.BorderTop = border;
                    break;
                case FrameBorderType.BOTTOM :
                    frame.BorderBottom = border;
                    break;
                case FrameBorderType.SIDES:
                    frame.BorderSides = border;
                    break;
            }
            frame.Updated = DateTime.UtcNow;
            db.Save(frame);
            return frame;
        }
    }
}