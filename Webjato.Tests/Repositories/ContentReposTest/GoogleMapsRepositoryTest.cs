using FakeItEasy;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using NUnit.Framework;
using System.Linq;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;
using Webjato.Repositories;
using Webjato.Repositories.ContentRepos;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;

namespace Webjato.Tests.Repositories.ContentReposTest {
    [TestFixture]
    public class GoogleMapsRepositoryTest {
        private MongoCollection<GoogleMaps> collection;
        private ContentUtilities contentUtils;
        private GoogleMapsRepository repo;

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<GoogleMaps>();
            collection.RemoveAll();
            contentUtils = A.Fake<ContentUtilities>();
            A.CallTo(() => contentUtils.GetContentType<GoogleMaps>()).Returns(ContentType.GOOGLE_MAPS);
            repo = new GoogleMapsRepository(collection, contentUtils);
        }

        [Test]
        public void GoogleMapsRepository_Create() {
            repo.Create(ObjectId.GenerateNewId(), ObjectId.GenerateNewId(), 5);
            var maps = collection.AsQueryable().Single();
            Assert.IsEmpty(maps.Address);
            Assert.AreEqual(525, maps.Size.Width);
            Assert.AreEqual(550, maps.Size.Height);
            Assert.AreEqual(200, maps.Position.X);
            Assert.AreEqual(200, maps.Position.Y);
            Assert.AreEqual(5, maps.Position.ZIndex);
            Assert.IsNull(maps.Updated);
        }

        [Test]
        public void GoogleMapsRepository_Update() {
            //Creates the maps
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            var maps1 = new GoogleMaps {
                Id = ObjectId.GenerateNewId(),
                SiteId = siteId,
                PageId = pageId,
                Address = "Rio de Janeiro",
                Size = new Size { Width = 525, Height = 550 },
                Type = ContentType.GOOGLE_MAPS
            };
            //Store it in the collection
            collection.Save(maps1);
            //Modifies it
            maps1.SiteId = ObjectId.GenerateNewId();
            maps1.Address = "São Paulo";
            maps1.Size = new Size { Width = 860, Height = 0 };
            maps1.Type = ContentType.BOX;
            //Requests update
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).DoesNothing();
            A.CallTo(() => contentUtils.NormalizePosition(A<Position>.Ignored)).Returns(null);
            repo.Update(maps1);
            var maps2 = collection.AsQueryable().Single();
            Assert.AreEqual(siteId, maps2.SiteId);
            Assert.AreEqual(pageId, maps2.PageId);
            Assert.AreEqual("São Paulo", maps2.Address);
            Assert.AreEqual(860, maps2.Size.Width);
            Assert.AreEqual(510, maps2.Size.Height);
            Assert.AreEqual(ContentType.GOOGLE_MAPS, maps2.Type);
            Assert.IsNotNull(maps2.Updated);
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).MustHaveHappened();
            A.CallTo(() => contentUtils.NormalizePosition(null)).MustHaveHappened();
        }

        [Test]
        public void GoogleMapsRepository_NormalizeMapSize() {
            var s1 = repo.NormalizeMapSize(600);
            Assert.AreEqual(600, s1.Width);
            Assert.AreEqual(550, s1.Height);
            var s2 = repo.NormalizeMapSize(860);
            Assert.AreEqual(860, s2.Width);
            Assert.AreEqual(510, s2.Height);
            var s3 = repo.NormalizeMapSize(0);
            Assert.AreEqual(525, s3.Width);
            Assert.AreEqual(550, s3.Height);
            var s4 = repo.NormalizeMapSize(640);
            Assert.AreEqual(640, s4.Width);
            Assert.AreEqual(480, s4.Height);
        }

        [Test]
        public void GoogleMapsRepository_Duplicate() {
            var original = new GoogleMaps {
                Id = ObjectId.GenerateNewId(),
                Position = new Position {
                    X = 0,
                    Y = 1
                },
                Address = "Address",
                Size = new Size {
                    Width = 320,
                    Height = 240
                }
            };
            collection.Save(original);
            var targetPageId = ObjectId.GenerateNewId();
            var targetSite = ObjectId.GenerateNewId();
            repo.Duplicate(original, targetSite, targetPageId, 5);
            var duplicated = collection.AsQueryable().Last();
            Assert.AreEqual(targetSite, duplicated.SiteId);
            Assert.AreEqual(targetPageId, duplicated.PageId);
            Assert.AreNotEqual(original.Id, duplicated.Id);
            Assert.AreEqual(original.Address, duplicated.Address);
            Assert.AreEqual(5, duplicated.Position.ZIndex);
            NUnitExtension.CompareObjects(original.Size, duplicated.Size);
        }
    }
}