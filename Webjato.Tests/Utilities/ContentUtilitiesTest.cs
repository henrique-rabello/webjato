using MongoDB.Bson;
using NUnit.Framework;
using System;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;
using Webjato.Utilities;

namespace Webjato.Tests.Utilities.ContentUtilitiesTest {
    [TestFixture]
    public class ContentUtilitiesTest {
        private ContentUtilities utils;

        [SetUp]
        public void BeforeEach() {
            utils = new ContentUtilities();
        }

        [Test]
        public void ContentBaseRepository_NormalizePosition_1() {
            var position = utils.NormalizePosition(new Position { X = -5, Y = -10, ZIndex = 6 });
            Assert.AreEqual(0, position.X);
            Assert.AreEqual(0, position.Y);
            Assert.AreEqual(6, position.ZIndex);
        }

        [Test]
        public void ContentBaseRepository_NormalizePosition_2() {
            var position = utils.NormalizePosition(new Position { X = 5, Y = 10, ZIndex = 15 });
            Assert.AreEqual(5, position.X);
            Assert.AreEqual(10, position.Y);
            Assert.AreEqual(15, position.ZIndex);
        }

        [Test]
        public void ContentBaseRepository_NormalizePosition_3() {
            var position = utils.NormalizePosition(new Position { X = 0, Y = 0, ZIndex = 15 });
            Assert.AreEqual(0, position.X);
            Assert.AreEqual(0, position.Y);
            Assert.AreEqual(15, position.ZIndex);
        }

        [Test]
        public void ContentBaseRepository_AutenticateContent() {
            var id = ObjectId.GenerateNewId();
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            var content1 = new Box { Id = id, SiteId = siteId, PageId = pageId };
            var content2 = new Box { Id = id, SiteId = siteId, PageId = pageId };
            utils.AuthenticateContent(content1, content2);
        }

        [Test]
        [ExpectedException(typeof(Exception))]
        public void ContentBaseRepository_AutenticateContent_Ex1() {
            var id = ObjectId.GenerateNewId();
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            var content1 = new Box { Id = id, SiteId = siteId, PageId = pageId };
            var content2 = new Box { Id = ObjectId.GenerateNewId(), SiteId = siteId, PageId = pageId };
            utils.AuthenticateContent(content1, content2);
        }

        [Test]
        [ExpectedException(typeof(Exception))]
        public void ContentBaseRepository_AutenticateContent_Ex2() {
            var id = ObjectId.GenerateNewId();
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            var content1 = new Box { Id = id, SiteId = siteId, PageId = pageId };
            var content2 = new Box { Id = id, SiteId = ObjectId.GenerateNewId(), PageId = pageId };
            utils.AuthenticateContent(content1, content2);
        }

        [Test]
        [ExpectedException(typeof(Exception))]
        public void ContentBaseRepository_AutenticateContent_Ex3() {
            var id = ObjectId.GenerateNewId();
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            var content1 = new Box { Id = id, SiteId = siteId, PageId = pageId };
            var content2 = new Box { Id = id, SiteId = siteId, PageId = ObjectId.GenerateNewId() };
            utils.AuthenticateContent(content1, content2);
        }

        [Test]
        public void ContentBaseRepository_GetContentType() {
            Assert.AreEqual(ContentType.BOX, utils.GetContentType<Box>());
            Assert.AreEqual(ContentType.TEXT, utils.GetContentType<Webjato.Entities.Content.Text>());
            Assert.AreEqual(ContentType.LINE, utils.GetContentType<Line>());
            Assert.AreEqual(ContentType.CONTACT_FORM, utils.GetContentType<ContactForm>());
            Assert.AreEqual(ContentType.GOOGLE_MAPS, utils.GetContentType<GoogleMaps>());
            Assert.AreEqual(ContentType.IMAGE, utils.GetContentType<RegularImage>());
            Assert.AreEqual(ContentType.LINKED_IMAGE, utils.GetContentType<LinkedImage>());
            Assert.AreEqual(ContentType.SOCIAL_PLUGINS, utils.GetContentType<SocialPlugins>());
            Assert.AreEqual(ContentType.VIDEO, utils.GetContentType<Video>());
            Assert.AreEqual(ContentType.EXPANDABLE_IMAGE, utils.GetContentType<ExpandableImage>());
        }
    }
}