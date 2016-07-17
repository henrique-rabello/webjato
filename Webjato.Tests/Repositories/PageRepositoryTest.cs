using FakeItEasy;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using NUnit.Framework;
using System;
using System.Linq;
using SystemInterface.IO;
using Webjato.Entities;
using Webjato.Repositories;
using Webjato.Repositories.AwsRepos;
using Webjato.Utilities;

namespace Webjato.Tests.Repositories {
    [TestFixture]
    public class PageRepositoryTest {
        private MongoCollection<Page> collection;
        private PageRepository repo;
        private S3Repository s3repo;
        private General utils;
        private IPath path;

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<Page>();
            collection.RemoveAll();
            s3repo = A.Fake<S3Repository>();
            utils = A.Fake<General>();
            path = A.Fake<IPath>();
            repo = new PageRepository(collection, utils, s3repo, path);
        }

        [Test]
        public void PageRepository_CreatePage() {
            Assert.IsFalse(collection.AsQueryable().Any());
            var siteId = ObjectId.GenerateNewId();
            //Page 1
            repo.CreatePage(siteId);
            Assert.IsTrue(collection.AsQueryable().Any());
            var p1 = collection.AsQueryable().Single();
            Assert.AreEqual(siteId, p1.SiteId);
            Assert.AreEqual(1, p1.Position);
            Assert.IsFalse(p1.IsTemplate);
            Assert.AreEqual(600, p1.Height);
            Assert.IsNull(p1.Title);
            Assert.IsNull(p1.FileName);
            Assert.IsNull(p1.Updated);
            Assert.IsNull(p1.Thumb);
            //Page 2
            repo.CreatePage(siteId);
            var p2 = collection.AsQueryable().ElementAt(1);
            Assert.AreEqual(2, p2.Position);
        }

        [Test]
        public void PageRepository_Get() {
            var page = new Page { SiteId = ObjectId.GenerateNewId(), Height = 500, IsTemplate = false, Title = "Page title", Position = 3 };
            collection.Insert(page);
            Assert.AreEqual("Page title", repo.Get(page.Id).Title);
        }

        [Test]
        [ExpectedException(typeof(Exception))]
        public void PageRepository_GetEx() {
            repo.Get(ObjectId.GenerateNewId());
        }

        [Test]
        public void PageRepository_GetBySite() {
            var site1Id = ObjectId.GenerateNewId();
            var site2Id = ObjectId.GenerateNewId();
            collection.Insert(new Page { SiteId = site1Id, Title = "Page 1", Position = 1 });
            collection.Insert(new Page { SiteId = site1Id, Title = "Page 2", Position = 2 });
            collection.Insert(new Page { SiteId = site2Id, Title = "Page 3", Position = 1 });
            var list = repo.GetBySite(site1Id);
            Assert.AreEqual(2, list.Count);
            Assert.AreEqual("Page 1", list[0].Title);
            Assert.AreEqual("Page 2", list[1].Title);
        }

        [Test]
        public void PageRepository_GetTemplates() {
            collection.Insert(new Page { Title = null, Thumb = null, IsTemplate = true });
            collection.Insert(new Page { Title = "", Thumb = null, IsTemplate = true });
            collection.Insert(new Page { Title = null, Thumb = "", IsTemplate = true });
            collection.Insert(new Page { Title = "Title", Thumb = "Thumb", IsTemplate = true });
            var templates = repo.GetTemplates();
            Assert.AreEqual(1, templates.Count);
            Assert.AreEqual("Title", templates[0].Title);
            Assert.AreEqual("Thumb", templates[0].Thumb);
        }

        [Test]
        public void PageRepository_UpdateTitle() {
            var page1 = new Page { Title = "Old title" };
            collection.Insert(page1);
            repo.UpdateTitle(page1.Id, "New title");
            var page2 = collection.AsQueryable().Single();
            Assert.AreEqual("New title", page2.Title);
            Assert.IsNotNull(page2.Updated);
            repo.UpdateTitle(page1.Id, null);
            var page3 = collection.AsQueryable().Single();
            Assert.IsEmpty(page3.Title);
        }

        [Test]
        public void PageRepository_UpdateHeight() {
            var pageId = ObjectId.GenerateNewId();
            collection.Save(new Page { Id = pageId, Height = 300 });
            repo.UpdateHeight(pageId, 333);
            var page = collection.AsQueryable().Single();
            Assert.AreEqual(333, page.Height);
        }

        [Test]
        public void PageRepository_SwapPosition() {
            var page1 = new Page { Title = "Page A", Position = 1 };
            var page2 = new Page { Title = "Page B", Position = 2 };
            collection.Insert(page1);
            collection.Insert(page2);
            repo.SwapPosition(page1.Id, page2.Id);
            var page1_1 = collection.AsQueryable().ElementAt(0);
            var page2_1 = collection.AsQueryable().ElementAt(1);
            Assert.AreEqual(2, page1_1.Position);
            Assert.IsNotNull(page1_1.Updated);
            Assert.AreEqual(1, page2_1.Position);
            Assert.IsNotNull(page2_1.Updated);
        }

        [Test]
        public void PageRepository_UpdateThumb() {
            var siteId = ObjectId.GenerateNewId();
            var page = new Page { SiteId = siteId, IsTemplate = false, Updated = null, Thumb = "OldThumb" };
            collection.Insert(page);
            A.CallTo(() => path.GetExtension("thumbPath")).Returns(".png");
            A.CallTo(() => utils.GenerateRandomFileName(".png")).Returns("randomName.png");
            A.CallTo(() => utils.GetS3FolderForSite(siteId)).Returns("s3Folder/");
            repo.UpdateThumb(page.Id, "thumbPath");
            A.CallTo(() => s3repo.PutObject("thumbPath", "s3Folder/randomName.png")).MustHaveHappened();
            A.CallTo(() => s3repo.DeleteObject("s3Folder/OldThumb")).MustHaveHappened();
            page = collection.AsQueryable().Single();
            Assert.AreEqual("randomName.png", page.Thumb);
            Assert.IsNotNull(page.Updated);
            Assert.IsTrue(page.IsTemplate);
        }

        [Test]
        public void PageRepository_EnsureTargetPageMinimumHeight() {
            var sourceId = ObjectId.GenerateNewId();
            var targetId = ObjectId.GenerateNewId();
            collection.Save(new Page { Id = sourceId, Height = 2 });
            collection.Save(new Page { Id = targetId, Height = 1 });
            repo.EnsureTargetPageMinimumHeight(sourceId, targetId);
            var target = collection.AsQueryable().Where(x => x.Id == targetId).Single();
            Assert.AreEqual(2, target.Height);
        }
    }
}