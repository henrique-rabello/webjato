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
    public class SocialPluginRepositoryTest {
        private MongoCollection<SocialPlugins> collection;
        private ContentUtilities contentUtils;
        private SocialPluginRepository repo;

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<SocialPlugins>();
            collection.RemoveAll();
            contentUtils = A.Fake<ContentUtilities>();
            A.CallTo(() => contentUtils.GetContentType<SocialPlugins>()).Returns(ContentType.SOCIAL_PLUGINS);
            repo = new SocialPluginRepository(collection, contentUtils);
        }

        [Test]
        public void SocialPluginRepository_Create() {
            repo.Create(ObjectId.GenerateNewId(), ObjectId.GenerateNewId(), 5);
            var sp = collection.AsQueryable().Single();
            Assert.IsFalse(sp.Facebook.Enabled);
            Assert.IsFalse(sp.Twitter.Enabled);
            Assert.IsFalse(sp.YouTube.Enabled);
            Assert.IsFalse(sp.LinkedIn.Enabled);
            Assert.IsFalse(sp.GooglePlus.Enabled);
            Assert.IsFalse(sp.Pinterest.Enabled);
            Assert.IsFalse(sp.Instagram.Enabled);
            Assert.IsEmpty(sp.Facebook.URL);
            Assert.IsEmpty(sp.Twitter.URL);
            Assert.IsEmpty(sp.YouTube.URL);
            Assert.IsEmpty(sp.LinkedIn.URL);
            Assert.IsEmpty(sp.GooglePlus.URL);
            Assert.IsEmpty(sp.Pinterest.URL);
            Assert.IsEmpty(sp.Instagram.URL);
            Assert.AreEqual(SocialPluginSize.Large, sp.Size);
            Assert.AreEqual(20, sp.Position.X);
            Assert.AreEqual(270, sp.Position.Y);
            Assert.AreEqual(5, sp.Position.ZIndex);
            Assert.IsNull(sp.Updated);
        }

        [Test]
        public void SocialPluginRepository_Update() {
            //Creates the plugin
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            var sp1 = new SocialPlugins {
                Id = ObjectId.GenerateNewId(),
                SiteId = siteId,
                PageId = pageId,
                Facebook = new SocialPlugin(),
                Twitter = new SocialPlugin(),
                YouTube = new SocialPlugin(),
                LinkedIn = new SocialPlugin(),
                GooglePlus = new SocialPlugin(),
                Pinterest = new SocialPlugin(),
                Instagram = new SocialPlugin(),
                Size = SocialPluginSize.Large,
                Type = ContentType.SOCIAL_PLUGINS
            };
            //Store it in the collection
            collection.Save(sp1);
            //Modifies it
            sp1.SiteId = ObjectId.GenerateNewId();
            sp1.Facebook.Enabled = true;
            sp1.Facebook.URL = "facebook";
            sp1.Twitter.Enabled = true;
            sp1.Twitter.URL = "twitter";
            sp1.YouTube.Enabled = true;
            sp1.YouTube.URL = "youtube";
            sp1.LinkedIn.Enabled = true;
            sp1.LinkedIn.URL = "linkedin";
            sp1.GooglePlus.Enabled = true;
            sp1.GooglePlus.URL = "googleplus";
            sp1.Pinterest.Enabled = true;
            sp1.Pinterest.URL = "pinterest";
            sp1.Instagram.Enabled = true;
            sp1.Instagram.URL = "instagram";
            sp1.Size = SocialPluginSize.Small;
            sp1.Type = ContentType.BOX;
            //Requests update
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).DoesNothing();
            A.CallTo(() => contentUtils.NormalizePosition(A<Position>.Ignored)).Returns(null);
            repo.Update(sp1);
            var sp2 = collection.AsQueryable().Single();
            Assert.AreEqual(siteId, sp2.SiteId);
            Assert.AreEqual(pageId, sp2.PageId);
            Assert.IsTrue(sp2.Facebook.Enabled);
            Assert.IsTrue(sp2.Twitter.Enabled);
            Assert.IsTrue(sp2.YouTube.Enabled);
            Assert.IsTrue(sp2.LinkedIn.Enabled);
            Assert.IsTrue(sp2.GooglePlus.Enabled);
            Assert.IsTrue(sp2.Pinterest.Enabled);
            Assert.IsTrue(sp2.Instagram.Enabled);
            Assert.AreEqual("facebook", sp2.Facebook.URL);
            Assert.AreEqual("twitter", sp2.Twitter.URL);
            Assert.AreEqual("youtube", sp2.YouTube.URL);
            Assert.AreEqual("linkedin", sp2.LinkedIn.URL);
            Assert.AreEqual("googleplus", sp2.GooglePlus.URL);
            Assert.AreEqual("pinterest", sp2.Pinterest.URL);
            Assert.AreEqual("instagram", sp2.Instagram.URL);
            Assert.AreEqual(SocialPluginSize.Small, sp2.Size);
            Assert.AreEqual(ContentType.SOCIAL_PLUGINS, sp2.Type);
            Assert.IsNotNull(sp2.Updated);
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).MustHaveHappened();
            A.CallTo(() => contentUtils.NormalizePosition(null)).MustHaveHappened();
        }

        [Test]
        public void SocialPluginRepository_Duplicate() {
            var original = new SocialPlugins {
                Id = ObjectId.GenerateNewId(),
                Position = new Position { X = 1, Y = 2 },
                Facebook = new SocialPlugin { Enabled = true, URL = "Facebook" },
                Twitter = new SocialPlugin { Enabled = true, URL = "Twitter" },
                GooglePlus = new SocialPlugin { Enabled = true, URL = "Plus" },
                Instagram = new SocialPlugin { Enabled = true, URL = "Instagram" },
                LinkedIn = new SocialPlugin { Enabled = true, URL = "LinkedIn" },
                Pinterest = new SocialPlugin { Enabled = true, URL = "Pinterest" },
                YouTube = new SocialPlugin { Enabled = true, URL = "YouTube" },
                Size = SocialPluginSize.Large
            };
            collection.Save(original);
            var targetPageId = ObjectId.GenerateNewId();
            var targetSite = ObjectId.GenerateNewId();
            repo.Duplicate(original, targetSite, targetPageId, 5);
            var duplicated = collection.AsQueryable().Last();
            Assert.AreEqual(targetSite, duplicated.SiteId);
            Assert.AreEqual(targetPageId, duplicated.PageId);
            NUnitExtension.CompareObjects(duplicated.Facebook, original.Facebook);
            NUnitExtension.CompareObjects(duplicated.Twitter, original.Twitter);
            NUnitExtension.CompareObjects(duplicated.GooglePlus, original.GooglePlus);
            NUnitExtension.CompareObjects(duplicated.Instagram, original.Instagram);
            NUnitExtension.CompareObjects(duplicated.LinkedIn, original.LinkedIn);
            NUnitExtension.CompareObjects(duplicated.Pinterest, original.Pinterest);
            NUnitExtension.CompareObjects(duplicated.YouTube, original.YouTube);
            Assert.AreEqual(duplicated.Size, original.Size);
            Assert.AreEqual(5, duplicated.Position.ZIndex);
        }
    }
}