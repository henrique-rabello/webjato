using FakeItEasy;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using NUnit.Framework;
using System.Linq;
using SystemInterface.IO;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;
using Webjato.Repositories;
using Webjato.Repositories.AwsRepos;
using Webjato.Repositories.ContentRepos;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;

namespace Webjato.Tests.Repositories.ContentReposTest {
    [TestFixture]
    public class LinkedImageRepositoryTest {
        private LinkedImageRepository repo;
        private MongoCollection<LinkedImage> db;
        private ContentUtilities utils;
        private ScalableImageRepository<LinkedImage> imgRepo;

        [SetUp]
        public void BeforeEach() {
            db = TestUtilities.GetCollection<LinkedImage>();
            db.RemoveAll();
            utils = A.Fake<ContentUtilities>();
            A.CallTo(() => utils.GetContentType<LinkedImage>()).Returns(ContentType.LINKED_IMAGE);
            var s3Repo = A.Fake<S3Repository>(x => x.WithArgumentsForConstructor(new object[] { null, new AuxiliaryConstants() }));
            var tmpImgRepo = A.Fake<TemporaryImageRepository>(x => x.WithArgumentsForConstructor(new object[] { null, s3Repo, A.Fake<ImageUtils>(), new General(), new AuxiliaryConstants(), null, null }));
            imgRepo = A.Fake<ScalableImageRepository<LinkedImage>>(x => x.WithArgumentsForConstructor(new object[] { db, s3Repo, A.Fake<General>(), A.Fake<ImageUtils>(), A.Fake<IPath>(), A.Fake<IFile>(), new AuxiliaryConstants { TemporaryFolder = "TmpFolder/" }, tmpImgRepo }));
            repo = new LinkedImageRepository(db, imgRepo, utils);
        }

        [Test]
        public void LinkedImageRepository_Create() {
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            repo.Create(siteId, pageId, 5);
            var img = db.AsQueryable().Single();
            Assert.AreEqual(LinkType.EXTERNAL, img.LinkType);
            Assert.AreEqual(5, img.Position.ZIndex);
        }

        [Test]
        public void LinkedImageRepository_Update() {
            var siteId = ObjectId.GenerateNewId();
            var position = new Position { X = 1, Y = 2, ZIndex = 3 };
            var img1 = new LinkedImage { Id = ObjectId.GenerateNewId(), ImageScale = 1, Position = position, LinkType = LinkType.EXTERNAL, LinkURL = "External", TargetPageId = ObjectId.GenerateNewId() };
            var img2 = new LinkedImage { Id = img1.Id, SiteId = siteId, ImageScale = 2, Position = position, LinkType = LinkType.INTERNAL, LinkURL = "Internal", TargetPageId = null };
            db.Save(img2);
            A.CallTo(() => utils.AuthenticateContent(img2, img1)).DoesNothing();
            A.CallTo(() => imgRepo.UpdateScale(img1.Id, siteId, 1)).Returns(img2);
            A.CallTo(() => utils.NormalizePosition(position)).Returns(position);
            repo.Update(img1, false);
            var img3 = db.AsQueryable().Single();
            Assert.AreEqual(LinkType.EXTERNAL, img3.LinkType);
            Assert.AreEqual("External", img3.LinkURL);
            Assert.IsNotNull(img3.TargetPageId);
        }

        [Test]
        public void LinkedImageRepository_Duplicate() {
            var original = new LinkedImage {
                Id = ObjectId.GenerateNewId(),
                Position = new Position { X = 1, Y = 2 },
                LinkType = LinkType.EXTERNAL,
                LinkURL = "LinkURL",
                TargetPageId = ObjectId.GenerateNewId()
            };
            db.Save(original);
            var targetPageId = ObjectId.GenerateNewId();
            var targetSite = ObjectId.GenerateNewId();
            repo.Duplicate(original, targetSite, targetPageId, 5);
            var duplicated = db.AsQueryable().Last();
            Assert.AreEqual(targetSite, duplicated.SiteId);
            Assert.AreEqual(targetPageId, duplicated.PageId);
            Assert.AreEqual(duplicated.LinkType, original.LinkType);
            Assert.AreEqual(duplicated.LinkURL, original.LinkURL);
            Assert.AreEqual(duplicated.TargetPageId, original.TargetPageId);
            Assert.AreEqual(5, duplicated.Position.ZIndex);
        }
    }
}