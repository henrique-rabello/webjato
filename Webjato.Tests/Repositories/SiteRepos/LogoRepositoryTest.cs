using FakeItEasy;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using NUnit.Framework;
using System;
using System.Linq;
using SystemInterface.IO;
using Webjato.Entities;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;
using Webjato.Repositories;
using Webjato.Repositories.AwsRepos;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;

namespace Webjato.Tests.Repositories.SiteRepos {
    [TestFixture]
    public class LogoRepositoryTest {
        private MongoCollection<Logo> collection;
        private LogoRepository repo;
        private S3Repository s3Repo;
        private TemporaryImageRepository tmpImgRepo;
        private General general;
        private ImageUtils imgUtils;
        private IPath path;
        private IFile file;

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<Logo>();
            s3Repo = A.Fake<S3Repository>(x => x.WithArgumentsForConstructor(new object[] { null, new AuxiliaryConstants() }));
            general = A.Fake<General>();
            A.CallTo(() => general.GetS3FolderForSite(A<ObjectId>.Ignored)).Returns("Folder/");
            imgUtils = A.Fake<ImageUtils>();
            path = A.Fake<IPath>();
            file = A.Fake<IFile>();
            tmpImgRepo = A.Fake<TemporaryImageRepository>(x => x.WithArgumentsForConstructor(new object[] { null, s3Repo, A.Fake<ImageUtils>(), new General(), new AuxiliaryConstants(), null, null }));
            repo = new LogoRepository(collection, s3Repo, general, imgUtils, path, file, new AuxiliaryConstants { TemporaryFolder = "TmpFolder/" }, tmpImgRepo);
        }

        [TearDown]
        public void AfterEach() {
            collection.RemoveAll();
        }

        [Test]
        public void LogoRepository_CreateLogo() {
            var id = ObjectId.GenerateNewId();
            Assert.IsFalse(collection.AsQueryable().Any());
            repo.CreateLogo(id);
            var logo = collection.AsQueryable().Single();
            Assert.AreEqual(id, logo.Id);
            Assert.AreEqual(LogoType.NOT_SET, logo.LogoType);
            Assert.IsNull(logo.Text);
            Assert.AreEqual(0, logo.Position.X);
            Assert.AreEqual(0, logo.Position.Y);
            Assert.IsNull(logo.ImageKey);
            Assert.IsNull(logo.ImageExportedKey);
            Assert.IsNull(logo.ImageName);
            Assert.AreEqual(100, logo.ImageScale);
            Assert.AreEqual(0, logo.ImageSize.Width);
            Assert.AreEqual(0, logo.ImageSize.Height);
            Assert.AreEqual(0, logo.ImageExportedSize.Width);
            Assert.AreEqual(0, logo.ImageExportedSize.Height);
            Assert.IsNull(logo.Updated);
        }

        [Test]
        [ExpectedException(typeof(ArgumentException))]
        public void LogoRepository_CreateLogo_Ex() {
            var id = ObjectId.GenerateNewId();
            collection.Save(new Logo { Id = id });
            repo.CreateLogo(id);
        }

        [Test]
        public void LogoRepository_UpdateText() {
            var id = ObjectId.GenerateNewId();
            collection.Save(new Logo { Id = id, Text = "Old text" });
            repo.UpdateText(id, "New text");
            var logo = collection.AsQueryable().Single();
            Assert.AreEqual(LogoType.TEXT, logo.LogoType);
            Assert.AreEqual("New text", logo.Text);
            Assert.IsNotNull(logo.Updated);
        }

        [Test]
        public void LogoRepository_UpdatePosition() {
            var id = ObjectId.GenerateNewId();
            collection.Save(new Logo { Id = id, Position = new Position { X = 1, Y = 2 } });
            repo.UpdatePosition(id, 10, 20);
            var logo = collection.AsQueryable().Single();
            Assert.AreEqual(10, logo.Position.X);
            Assert.AreEqual(20, logo.Position.Y);
            Assert.IsNotNull(logo.Updated);
        }
    }
}