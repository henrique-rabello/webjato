using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Linq;
using SystemInterface.IO;
using Webjato.Entities;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;
using Webjato.Repositories.AwsRepos;
using Webjato.Utilities;

namespace Webjato.Repositories.SiteRepos {
    public class LogoRepository : ScalableImageRepository<Logo> {
        private MongoCollection<Logo> db;
        private S3Repository s3repo;
        private General util;
        private ImageUtils imgUtils;
        private TemporaryImageRepository tmpImgRepo;
        private IPath Path;
        private IFile File;
        private string tmpFolder;

        public LogoRepository(MongoCollection<Logo> collection, S3Repository s3repository, General general, ImageUtils imageUtils, IPath path, IFile file, AuxiliaryConstants auxConst, TemporaryImageRepository temporaryImageRepository)
            : base(collection, s3repository, general, imageUtils, path, file, auxConst, temporaryImageRepository) {
            db = collection;
            s3repo = s3repository;
            util = general;
            imgUtils = imageUtils;
            tmpImgRepo = temporaryImageRepository;
            Path = path;
            File = file;
            tmpFolder = auxConst.TemporaryFolder;
        }

        public virtual Logo CreateLogo(ObjectId siteId) {
            if (db.AsQueryable().Any(x => x.Id == siteId)) {
                throw new ArgumentException("WJ => Cannot create this frame. A Logo Id '" + siteId.ToString() + "' already exists.");
            }
            var logo = new Logo { Id = siteId, Position = new Position { X = 0, Y = 0 }, ImageScale = 100, ImageExportedSize = new Size { Width = 0, Height = 0 }, ImageSize = new Size { Width = 0, Height = 0 } };
            db.Save(logo);
            return logo;
        }

        public virtual Logo UpdateText(ObjectId siteId, string text) {
            var logo = ClearImage(siteId, siteId);
            logo.Text = text;
            logo.Updated = DateTime.UtcNow;
            db.Save(logo);
            return logo;
        }

        public virtual Logo UpdatePosition(ObjectId siteId, int x, int y) {
            var logo = Get(siteId);
            logo.Position.X = x;
            logo.Position.Y = y;
            logo.Updated = DateTime.UtcNow;
            db.Save(logo);
            return logo;
        }
    }
}