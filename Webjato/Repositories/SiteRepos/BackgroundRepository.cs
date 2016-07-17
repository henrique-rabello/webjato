using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Drawing;
using System.Linq;
using SystemInterface.IO;
using Webjato.Entities;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;
using Webjato.Repositories.AwsRepos;
using Webjato.Utilities;

namespace Webjato.Repositories.SiteRepos {
    public class BackgroundRepository<TBG> : SimpleImageRepository<TBG> where TBG : BackgroundBase, new() {
        private MongoCollection<TBG> db;
        private S3Repository s3repo;
        private General util;
        private TemporaryImageRepository tmpImgRepo;
        private IPath path;

        public BackgroundRepository(MongoCollection<TBG> collection, S3Repository s3Repository, General general, TemporaryImageRepository temporaryImageRepository, IPath ipath, ImageUtils imageUtils)
            : base(collection, s3Repository, temporaryImageRepository, general, ipath, imageUtils) {
            db = collection;
            s3repo = s3Repository;
            util = general;
            tmpImgRepo = temporaryImageRepository;
            path = ipath;
        }

        public virtual TBG CreateBackground(ObjectId siteId) {
            if (db.AsQueryable().Any(x => x.Id == siteId)) {
                throw new ArgumentException("WJ => Cannot create this background. A BG Id '" + siteId.ToString() + "' already exists.");
            }
            var bg = new TBG { Id = siteId, BgType = BACKGROUND_TYPE.NOT_SET, Color = "#FFFFFF", IsFixed = false, HAlign = HALIGNMENT.LEFT, VAlign = VALIGNMENT.TOP, HRepeat = true, VRepeat = true, Height = 100, IsTransparent = false };
            db.Save(bg);
            return bg;
        }

        public virtual TBG Update(ObjectId siteId, Color color) {
            var bg = Get(siteId);
            if (bg.BgType == BACKGROUND_TYPE.EFFECT) {
                bg = ClearImage(siteId);
            }
            if (typeof(TBG).Equals(typeof(Header))) {
                bg.IsTransparent = false;
            }
            bg.Color = ColorTranslator.ToHtml(color);
            bg.Updated = DateTime.UtcNow;
            db.Save(bg);
            return bg;
        }

        public virtual TBG Update(ObjectId siteId, BACKGROUND_TYPE type, string filePath, string filename) {
            var bg = NewSimpleImage(siteId, siteId, filePath, filename);
            bg.BgType = type;
            if (typeof(TBG).Equals(typeof(Header)) && (type == BACKGROUND_TYPE.IMAGE)) {
                bg.HRepeat = false;
                bg.VRepeat = false;
                bg.HAlign = HALIGNMENT.LEFT;
                bg.VAlign = VALIGNMENT.TOP;
            }
            db.Save(bg);
            return bg;
        }

        public virtual TBG UpdateFromTemporaryImage(TemporaryImage img) {
            var bg = NewSimpleImageFromTemporaryImage(img, img.SiteId, img.SiteId, false);
            bg.BgType = BACKGROUND_TYPE.IMAGE;
            if (typeof(TBG).Equals(typeof(Header))) {
                bg.HRepeat = false;
                bg.VRepeat = false;
                bg.HAlign = HALIGNMENT.LEFT;
                bg.VAlign = VALIGNMENT.TOP;
            }
            db.Save(bg);
            return bg;
        }

        public virtual TBG Update(ObjectId siteId, Color color, bool isFixed, bool hRepeat, bool vRepeat, HALIGNMENT align, VALIGNMENT valign) {
            var bg = Get(siteId);
            bg.Color = ColorTranslator.ToHtml(color);
            bg.IsFixed = isFixed;
            bg.HRepeat = hRepeat;
            bg.VRepeat = vRepeat;
            bg.HAlign = align;
            bg.VAlign = valign;
            bg.Updated = DateTime.UtcNow;
            db.Save(bg);
            return bg;
        }

        public virtual TBG Update(ObjectId siteId, Color color, bool hRepeat, bool vRepeat, HALIGNMENT align, VALIGNMENT valign, int height) {
            var bg = Get(siteId);
            bg.Color = ColorTranslator.ToHtml(color);
            bg.HRepeat = hRepeat;
            bg.VRepeat = vRepeat;
            bg.HAlign = align;
            bg.VAlign = valign;
            bg.Height = height;
            bg.Updated = DateTime.UtcNow;
            db.Save(bg);
            return bg;
        }

        public virtual TBG Update(ObjectId siteId, bool isTransparent) {
            var bg = Get(siteId);
            if (isTransparent && bg.BgType == BACKGROUND_TYPE.EFFECT) {
                bg = ClearImage(siteId);
            }
            bg.IsTransparent = isTransparent;
            bg.Updated = DateTime.UtcNow;
            db.Save(bg);
            return bg;
        }

        public virtual TBG Update(ObjectId siteId, int height) {
            var bg = Get(siteId);
            bg.Height = height;
            bg.Updated = DateTime.UtcNow;
            db.Save(bg);
            return bg;
        }

        public virtual TBG ClearImage(ObjectId siteId) {
            var bg = ClearSimpleImage(siteId, siteId);
            bg.BgType = BACKGROUND_TYPE.NOT_SET;
            db.Save(bg);
            return bg;
        }
    }
}