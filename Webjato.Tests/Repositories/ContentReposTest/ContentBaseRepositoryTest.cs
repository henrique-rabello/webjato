using FakeItEasy;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using NUnit.Framework;
using System;
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
    public class ContentBaseRepositoryTest {
        private MongoCollection<Box> collection;
        private ContentUtilities contentUtils;
        private ContentBaseRepository<Box> repo;

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<Box>();
            collection.RemoveAll();
            contentUtils = A.Fake<ContentUtilities>();
            repo = new ContentBaseRepository<Box>(collection, contentUtils);
        }

        [Test]
        public void ContentBaseRepository_Create() {
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            A.CallTo(() => contentUtils.GetContentType<Box>()).Returns(ContentType.BOX);
            repo.Create(siteId, pageId, 25, 270, 5);
            var box = collection.AsQueryable().Single();
            Assert.AreEqual(siteId, box.SiteId);
            Assert.AreEqual(pageId, box.PageId);
            Assert.IsNotNull(box.Id);
            Assert.AreEqual(25, box.Position.X);
            Assert.AreEqual(270, box.Position.Y);
            Assert.AreEqual(5, box.Position.ZIndex);
            Assert.AreEqual(5, box.Position.ZIndex);
            Assert.AreEqual(ContentType.BOX, box.Type);
            Assert.IsNull(box.Updated);
        }

        [Test]
        public void ContentBaseRepository_Get() {
            var contentId = ObjectId.GenerateNewId();
            collection.Save(new Box { Id = contentId });
            var box = repo.Get(contentId);
            Assert.AreEqual(contentId, box.Id);
        }

        [Test]
        public void ContentBaseRepository_GetBySite() {
            var siteId = ObjectId.GenerateNewId();
            collection.Insert(new Box { SiteId = siteId });
            collection.Insert(new Box { SiteId = siteId });
            collection.Insert(new Box { SiteId = ObjectId.GenerateNewId() });
            var result = repo.GetBySite(siteId);
            Assert.AreEqual(2, result.Count);
        }

        [Test]
        public void ContentBaseRepository_GetByPage() {
            var pageId = ObjectId.GenerateNewId();
            collection.Insert(new Box { PageId = pageId });
            collection.Insert(new Box { PageId = pageId });
            collection.Insert(new Box { PageId = ObjectId.GenerateNewId() });
            var result = repo.GetByPage(pageId);
            Assert.AreEqual(2, result.Count);
        }

        [Test]
        [ExpectedException(typeof(ArgumentException))]
        public void ContentBaseRepository_GetEx() {
            repo.Get(ObjectId.GenerateNewId());
        }

        [Test]
        public void ContentBaseRepository_Delete() {
            var myBox = new Box { Id = ObjectId.GenerateNewId(), SiteId = ObjectId.GenerateNewId() };
            collection.Save(myBox);
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).DoesNothing();
            repo.Delete(myBox);
            Assert.AreEqual(0, collection.AsQueryable().Count());
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).MustHaveHappened();
        }

        [Test]
        public void ContentBaseRepository_UpdatePosition() {
            var myBox = new Box { Id = ObjectId.GenerateNewId(), Position = new Position { X = 0, Y = 1 } };
            collection.Save(myBox);

            var position = new Position { X = 10, Y = 11 };
            A.CallTo(() => contentUtils.NormalizePosition(position)).Returns(position);
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).DoesNothing();
            var otherBox = new Box { Id = myBox.Id, Position = position };

            repo.UpdatePosition(otherBox);

            var finalBox = collection.AsQueryable().Single();
            Assert.AreEqual(10, finalBox.Position.X);
            Assert.AreEqual(11, finalBox.Position.Y);
            Assert.IsNotNull(finalBox.Updated);
        }

        [Test]
        public void ContentBaseRepository_UpdateZIndex() {
            var id = ObjectId.GenerateNewId();
            collection.Save(new Box { Id = id, Position = new Position { ZIndex = 3 } });
            repo.UpdateZIndex(id, 5);
            var box = collection.AsQueryable().Single();
            Assert.AreEqual(5, box.Position.ZIndex);
            Assert.IsNotNull(box.Updated);
        }
    }
}