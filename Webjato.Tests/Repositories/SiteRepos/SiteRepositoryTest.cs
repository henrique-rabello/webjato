using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;
using Webjato.Repositories.SiteRepos;

namespace Webjato.Tests.Repositories.SiteRepos {
    [TestFixture]
    public class SiteRepositoryTest {
        private MongoCollection<Site> collection;
        private SiteRepository repo;

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<Site>();
            repo = new SiteRepository(collection);
        }

        [TearDown]
        public void AfterEach() {
            collection.RemoveAll();
        }

        [Test]
        public void SiteRepository_CreateSite() {
            Assert.IsFalse(collection.AsQueryable().Any());
            var userId = ObjectId.GenerateNewId();
            repo.CreateSite(userId);
            Assert.IsTrue(collection.AsQueryable().Any());
            var site = collection.AsQueryable().Single();
            Assert.AreEqual(userId, site.UserId);
            Assert.AreEqual(HALIGNMENT.CENTER, site.Alignment);
            Assert.IsEmpty(site.Title);
            Assert.IsTrue(CompareWithDefaultMenu(site.Menu));
            Assert.IsNull(site.Updated);
        }

        private bool CompareWithDefaultMenu(Menu menu) {
            return (("foc" == menu.Id) &&
                    (VALIGNMENT.BOTTOM == menu.VAlign) &&
                    (3 == menu.Parts.Count) &&
                    ("BgActive" == menu.Parts[0].Id) &&
                    ("#DDF0F8" == menu.Parts[0].Value) &&
                    ("Text" == menu.Parts[1].Id) &&
                    ("#333333" == menu.Parts[1].Value) &&
                    ("TextActive" == menu.Parts[2].Id) &&
                    ("#333333" == menu.Parts[2].Value));
        }

        [Test]
        public void SiteRepository_GetDefaultMenu() {
            Assert.IsTrue(CompareWithDefaultMenu(repo.GetDefaultMenu()));
        }

        [Test]
        public void SiteRepository_GetByUserId() {
            var userId = ObjectId.GenerateNewId();
            collection.Insert(new Site { UserId = userId, Alignment = HALIGNMENT.LEFT, Title = "My site" });
            var site2 = repo.GetByUserId(userId);
            Assert.AreEqual(userId, site2.UserId);
            Assert.AreEqual(HALIGNMENT.LEFT, site2.Alignment);
            Assert.AreEqual("My site", site2.Title);
        }

        [Test]
        [ExpectedException(typeof(Exception))]
        public void SiteRepository_GetByUserIdEx() {
            repo.GetByUserId(ObjectId.GenerateNewId());
        }

        [Test]
        public void SiteRepository_Get() {
            var siteId = ObjectId.GenerateNewId();
            collection.Save(new Site { Id = siteId, Alignment = HALIGNMENT.LEFT, Title = "My site" });
            var site = repo.Get(siteId);
            Assert.AreEqual(siteId, site.Id);
            Assert.AreEqual(HALIGNMENT.LEFT, site.Alignment);
            Assert.AreEqual("My site", site.Title);
        }

        [Test]
        [ExpectedException(typeof(Exception))]
        public void SiteRepository_GetEx() {
            repo.Get(ObjectId.GenerateNewId());
        }

        [Test]
        public void SiteRepository_UpdateAlignment() {
            var userId = ObjectId.GenerateNewId();
            collection.Insert(new Site { UserId = userId, Alignment = HALIGNMENT.LEFT, Title = "My site" });
            repo.UpdateAligment(userId, HALIGNMENT.RIGHT);
            var site2 = collection.AsQueryable().Single();
            Assert.AreEqual(HALIGNMENT.RIGHT, site2.Alignment);
            Assert.IsNotNull(site2.Updated);
        }

        [Test]
        public void SiteRepository_UpdateTitle() {
            var userId = ObjectId.GenerateNewId();
            collection.Insert(new Site { UserId = userId, Alignment = HALIGNMENT.LEFT, Title = "My site" });
            repo.UpdateTitle(userId, "A new title");
            var site2 = collection.AsQueryable().Single();
            Assert.AreEqual("A new title", site2.Title);
            Assert.IsNotNull(site2.Updated);
            repo.UpdateTitle(userId, null);
            var site3 = collection.AsQueryable().Single();
            Assert.IsEmpty(site3.Title);
        }

        [Test]
        public void SiteRepository_UpdateMenu() {
            var userId = ObjectId.GenerateNewId();
            collection.Insert(new Site { UserId = userId, Menu = null });
            repo.UpdateMenu(userId, new Menu { Id = "Menu1", VAlign = VALIGNMENT.MIDDLE, Parts = null });
            var site = collection.AsQueryable().Single();
            Assert.IsNotNull(site.Menu);
            Assert.AreEqual("Menu1", site.Menu.Id);
            Assert.AreEqual(VALIGNMENT.MIDDLE, site.Menu.VAlign);
            Assert.IsNotNull(site.Updated);
        }
    }
}