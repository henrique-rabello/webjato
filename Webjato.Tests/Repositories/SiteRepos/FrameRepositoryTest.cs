using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using NUnit.Framework;
using System;
using System.Drawing;
using System.Linq;
using Webjato.Entities.Site;
using Webjato.Repositories.SiteRepos;

namespace Webjato.Tests.Repositories.SiteRepos {
    [TestFixture]
    public class FrameRepositoryTest {
        private MongoCollection<Frame> collection;
        private FrameRepository repo;

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<Frame>();
            repo = new FrameRepository(collection);
        }

        [TearDown]
        public void AfterEach() {
            collection.RemoveAll();
        }

        [Test]
        public void FrameRepository_CreateFrame() {
            Assert.IsFalse(collection.AsQueryable().Any());
            var siteId = ObjectId.GenerateNewId();
            repo.CreateFrame(siteId);
            var frame = collection.AsQueryable().Single();
            Assert.AreEqual(siteId, frame.Id);
            Assert.AreEqual(0, frame.MarginTop);
            Assert.AreEqual("#FFFFFF", frame.Color);
            Assert.IsFalse(frame.IsTransparent);
            Assert.AreEqual(0, frame.BorderTop.Width);
            Assert.AreEqual("#FFFFFF", frame.BorderTop.Color);
            Assert.AreEqual(0, frame.BorderBottom.Width);
            Assert.AreEqual("#FFFFFF", frame.BorderBottom.Color);
            Assert.AreEqual(0, frame.BorderSides.Width);
            Assert.AreEqual("#FFFFFF", frame.BorderSides.Color);
            Assert.IsNull(frame.Updated);
        }

        [Test]
        [ExpectedException(typeof(ArgumentException))]
        public void FrameRepository_CreateFrameEx() {
            var siteId = ObjectId.GenerateNewId();
            collection.Save(new Frame { Id = siteId });
            repo.CreateFrame(siteId);
        }

        [Test]
        public void FrameRepository_Get() {
            var siteId = ObjectId.GenerateNewId();
            collection.Save(new Frame{ Id = siteId});
            var frame = repo.Get(siteId);
            Assert.AreEqual(siteId, frame.Id);
        }

        [Test]
        [ExpectedException(typeof(ArgumentException))]
        public void FrameRepository_GetEx() {
            repo.Get(ObjectId.GenerateNewId());
        }

        [Test]
        public void FrameRepository_Update1() {
            var siteId = ObjectId.GenerateNewId();
            collection.Save(new Frame { Id = siteId, MarginTop = 0 });
            repo.Update(siteId, 10);
            var frame = collection.AsQueryable().Single();
            Assert.AreEqual(10, frame.MarginTop);
            Assert.IsNotNull(frame.Updated);
        }

        [Test]
        public void FrameRepository_Update2() {
            var siteId = ObjectId.GenerateNewId();
            collection.Save(new Frame { Id = siteId, Color = "#FFFFFF", IsTransparent = true });
            repo.Update(siteId, ColorTranslator.FromHtml("#000000"));
            var frame = collection.AsQueryable().Single();
            Assert.AreEqual("#000000", frame.Color);
            Assert.IsFalse(frame.IsTransparent);
            Assert.IsNotNull(frame.Updated);
        }

        [Test]
        public void FrameRepository_Update3() {
            var siteId = ObjectId.GenerateNewId();
            collection.Save(new Frame { Id = siteId, IsTransparent = true });
            repo.Update(siteId, false);
            var frame = collection.AsQueryable().Single();
            Assert.IsFalse(frame.IsTransparent);
            Assert.IsNotNull(frame.Updated);
        }

        [Test]
        public void FrameRepository_Update4() {
            var siteId = ObjectId.GenerateNewId();
            collection.Save(new Frame { Id = siteId, Color = "#FFFFFF", BorderTop = new FrameBorder { Width = 0, Color = "#FFFFFF" }, BorderBottom = new FrameBorder { Width = 0, Color = "#FFFFFF" }, BorderSides = new FrameBorder { Width = 0, Color = "#FFFFFF" } });
            repo.Update(siteId, Webjato.Entities.Enums.FrameBorderType.TOP, ColorTranslator.FromHtml("#000000"), 1);
            var frame = collection.AsQueryable().Single();
            Assert.AreEqual("#000000", frame.BorderTop.Color);
            Assert.AreEqual(1, frame.BorderTop.Width);
            Assert.AreEqual("#FFFFFF", frame.BorderBottom.Color);
            Assert.AreEqual(0, frame.BorderBottom.Width);
            Assert.AreEqual("#FFFFFF", frame.BorderSides.Color);
            Assert.AreEqual(0, frame.BorderSides.Width);
            Assert.IsNotNull(frame.Updated);
            repo.Update(siteId, Webjato.Entities.Enums.FrameBorderType.BOTTOM, ColorTranslator.FromHtml("#111111"), 2);
            frame = collection.AsQueryable().Single();
            Assert.AreEqual("#000000", frame.BorderTop.Color);
            Assert.AreEqual(1, frame.BorderTop.Width);
            Assert.AreEqual("#111111", frame.BorderBottom.Color);
            Assert.AreEqual(2, frame.BorderBottom.Width);
            Assert.AreEqual("#FFFFFF", frame.BorderSides.Color);
            Assert.AreEqual(0, frame.BorderSides.Width);
            repo.Update(siteId, Webjato.Entities.Enums.FrameBorderType.SIDES, ColorTranslator.FromHtml("#222222"), 3);
            frame = collection.AsQueryable().Single();
            Assert.AreEqual("#000000", frame.BorderTop.Color);
            Assert.AreEqual(1, frame.BorderTop.Width);
            Assert.AreEqual("#111111", frame.BorderBottom.Color);
            Assert.AreEqual(2, frame.BorderBottom.Width);
            Assert.AreEqual("#222222", frame.BorderSides.Color);
            Assert.AreEqual(3, frame.BorderSides.Width);
        }
    }
}