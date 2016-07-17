using MongoDB.Bson;
using MongoDB.Driver;
using System;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;

namespace Webjato.Repositories.ContentRepos {
    public class RegularImageRepository : ImageContentBaseRepository<RegularImage> {
        private MongoCollection<RegularImage> db;
        private ContentUtilities utils;
        private ScalableImageRepository<RegularImage> imgRepo;

        public RegularImageRepository(MongoCollection<RegularImage> collection, ScalableImageRepository<RegularImage> scalableImageRepository, ContentUtilities contentUtilities)
            : base(collection, scalableImageRepository, contentUtilities) {
                db = collection;
                utils = contentUtilities;
                imgRepo = scalableImageRepository;
        }
    }
}