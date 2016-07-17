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
using Webjato.Utilities;

namespace Webjato.Tests.Repositories.ContentReposTest {
    [TestFixture]
    public class RegularImageRepositoryTest {
        private RegularImageRepository repo;
        private MongoCollection<RegularImage> db;
        private ContentUtilities utils;
        private ScalableImageRepository<RegularImage> imgRepo;

        [SetUp]
        public void BeforeEach() {
            db = TestUtilities.GetCollection<RegularImage>();
            db.RemoveAll();
            utils = A.Fake<ContentUtilities>();
            A.CallTo(() => utils.GetContentType<RegularImage>()).Returns(ContentType.IMAGE);
            var s3Repo = A.Fake<S3Repository>(x => x.WithArgumentsForConstructor(new object[] { null, new AuxiliaryConstants() }));
            var tmpImgRepo = A.Fake<TemporaryImageRepository>(x => x.WithArgumentsForConstructor(new object[] { null, s3Repo, A.Fake<ImageUtils>(), new General(), new AuxiliaryConstants(), null, null }));
            imgRepo = A.Fake<ScalableImageRepository<RegularImage>>(x => x.WithArgumentsForConstructor(new object[] { db, s3Repo, A.Fake<General>(), A.Fake<ImageUtils>(), A.Fake<IPath>(), A.Fake<IFile>(), new AuxiliaryConstants { TemporaryFolder = "TmpFolder/" }, tmpImgRepo }));
            repo = new RegularImageRepository(db, imgRepo, utils);
        }

        [Test]
        public void RegularImageRepository_Create() {
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            repo.Create(siteId, pageId, 5);
            var img = db.AsQueryable().Single();
            Assert.AreEqual(200, img.Position.X);
            Assert.AreEqual(200, img.Position.Y);
            Assert.AreEqual(5, img.Position.ZIndex);
            Assert.AreEqual(100, img.ImageScale);
        }
    }
}