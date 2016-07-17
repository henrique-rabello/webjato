using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using NUnit.Framework;
using System.Linq;
using Webjato.Entities;
using Webjato.Entities.Enums;
using Webjato.Repositories;

namespace Webjato.Tests.Repositories {
    [TestFixture]
    public class OptionalFeatureRepositoryTest {
        private MongoCollection<OptionalFeature> collection;
        private OptionalFeatureRepository repo;

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<OptionalFeature>();
            repo = new OptionalFeatureRepository(collection);
        }

        [TearDown]
        public void AfterEach() {
            collection.RemoveAll();
        }

        [Test]
        public void OptionalFeatureRepository_AssociateFeature() {
            var userId = ObjectId.GenerateNewId();
            Assert.IsFalse(collection.AsQueryable().Any(x => x.Feature == FEATURE.HELP && x.UserId == userId));
            repo.AssociateFeature(FEATURE.HELP, userId);
            Assert.IsTrue(collection.AsQueryable().Any(x => x.Feature == FEATURE.HELP && x.UserId == userId));
            repo.AssociateFeature(FEATURE.HELP, userId);
        }

        [Test]
        public void OptionalFeatureRepository_DissociateFeature() {
            var userId = ObjectId.GenerateNewId();
            collection.Insert(new OptionalFeature { Feature = FEATURE.HELP, UserId = userId });
            repo.DissociateFeature(FEATURE.HELP, userId);
            Assert.IsFalse(collection.AsQueryable().Any(x => x.Feature == FEATURE.HELP && x.UserId == userId));
        }

        [Test]
        public void OptionalFeatureRepository_IsAssociated() {
            var userId = ObjectId.GenerateNewId();
            Assert.IsFalse(repo.IsAssociated(FEATURE.HELP, userId));
            collection.Insert(new OptionalFeature { Feature = FEATURE.HELP, UserId = userId });
            Assert.IsTrue(repo.IsAssociated(FEATURE.HELP, userId));
        }
    }
}