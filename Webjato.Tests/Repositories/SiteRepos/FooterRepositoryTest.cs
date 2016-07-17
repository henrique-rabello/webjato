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
    public class FooterRepositoryTest {
        private MongoCollection<Footer> collection;
        private FooterRepository repo;

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<Footer>();
            repo = new FooterRepository(collection);
        }

        [TearDown]
        public void AfterEach() {
            collection.RemoveAll();
        }

        [Test]
        public void FooterRepository_CreateFooter() {
            Assert.IsFalse(collection.AsQueryable().Any());
            var siteId = ObjectId.GenerateNewId();
            repo.CreateFooter(siteId);
            var footer = collection.AsQueryable().Single();
            Assert.AreEqual(siteId, footer.Id);
            Assert.AreEqual("#FFFFFF", footer.Color);
            Assert.IsFalse(footer.IsTransparent);
            Assert.AreEqual("<span style=\"font-size: 13px; color: #666666;\">© 2014 Meu Site - Todos os direitos reservados.</span>", footer.Text);
            Assert.IsNull(footer.Updated);
        }

        [Test]
        [ExpectedException(typeof(ArgumentException))]
        public void FooterRepository_CreateFooter_Ex() {
            var id = ObjectId.GenerateNewId();
            collection.Save(new Footer { Id = id });
            repo.CreateFooter(id);
        }

        [Test]
        public void FooterRepository_Get() {
            var id = ObjectId.GenerateNewId();
            collection.Save(new Footer { Id = id });
            var footer = repo.Get(id);
            Assert.AreEqual(id, footer.Id);
        }

        [Test]
        [ExpectedException(typeof(ArgumentException))]
        public void FooterRepository_Get_Ex() {
            repo.Get(ObjectId.GenerateNewId());
        }

        [Test]
        public void FooterRepository_Update1() {
            var siteId = ObjectId.GenerateNewId();
            collection.Insert(new Footer { Id = siteId, Color = "#FFFFFF", IsTransparent = true });
            repo.Update(siteId, ColorTranslator.FromHtml("#000000"));
            var footer = collection.AsQueryable().Single();
            Assert.AreEqual("#000000", footer.Color);
            Assert.IsFalse(footer.IsTransparent);
            Assert.IsNotNull(footer.Updated);
        }

        [Test]
        public void FooterRepository_Update2() {
            var siteId = ObjectId.GenerateNewId();
            collection.Insert(new Footer { Id = siteId, IsTransparent = false });
            repo.Update(siteId, true);
            var footer = collection.AsQueryable().Single();
            Assert.IsTrue(footer.IsTransparent);
            Assert.IsNotNull(footer.Updated);
        }

        [Test]
        public void FooterRepository_Update3() {
            var siteId = ObjectId.GenerateNewId();
            collection.Insert(new Footer { Id = siteId, Text = "Texto1" });
            repo.Update(siteId, "Texto2");
            var footer = collection.AsQueryable().Single();
            Assert.AreEqual("Texto2", footer.Text);
            Assert.IsNotNull(footer.Updated);
        }
    }
}