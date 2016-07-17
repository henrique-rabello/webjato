using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;
using System.Linq;
using Webjato.Entities;
using Webjato.Entities.Enums;

namespace Webjato.Repositories {
    public class OptionalFeatureRepository {
        private MongoCollection<OptionalFeature> db;

        public OptionalFeatureRepository(MongoCollection<OptionalFeature> collection) {
            db = collection;
        }

        public virtual void AssociateFeature(FEATURE feature, ObjectId userId) {
            if (IsAssociated(feature, userId)) return;
            db.Insert(new OptionalFeature { Feature = feature, UserId = userId });
        }

        public virtual void DissociateFeature(FEATURE feature, ObjectId userId) {
            int featureId = (int)feature;
            db.Remove(Query<OptionalFeature>.EQ(x => x.UserId, userId));
        }

        public virtual bool IsAssociated(FEATURE feature, ObjectId userId) {
            return (db.AsQueryable().Any(x => x.UserId == userId && x.Feature == feature));
        }
    }
}