using FakeItEasy;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using NUnit.Framework;
using System;
using System.Drawing;
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
    public class BackgroundRepositoryTest {
        private MongoCollection<Background> bgCollection;
        private MongoCollection<Header> headerCollection;
        private BackgroundRepository<Background> bgRepo;
        private BackgroundRepository<Header> headerRepo;
        private S3Repository s3Repo;
        private TemporaryImageRepository tmpImgRepo;

        [SetUp]
        public void BeforeEach() {
            bgCollection = TestUtilities.GetCollection<Background>();
            headerCollection = TestUtilities.GetCollection<Header>();
            s3Repo = A.Fake<S3Repository>(x => x.WithArgumentsForConstructor(new object[] { null, new AuxiliaryConstants() }));
            tmpImgRepo = A.Fake<TemporaryImageRepository>(x => x.WithArgumentsForConstructor(new object[] { null, s3Repo, A.Fake<ImageUtils>(), new General(), new AuxiliaryConstants(), null, null }));
            var path = A.Fake<IPath>();
            var imgUtils = A.Fake<ImageUtils>();
            bgRepo = new BackgroundRepository<Background>(bgCollection, s3Repo, new General(), tmpImgRepo, path, imgUtils);
            headerRepo = new BackgroundRepository<Header>(headerCollection, s3Repo, new General(), tmpImgRepo, path, imgUtils);
        }

        [TearDown]
        public void AfterEach() {
            bgCollection.RemoveAll();
            headerCollection.RemoveAll();
        }

        [Test]
        public void BackgroundRepository_CreateBackground() {
            bgRepo.CreateBackground(ObjectId.GenerateNewId());
            var bg = bgCollection.AsQueryable().Single();
            Assert.AreEqual(BACKGROUND_TYPE.NOT_SET, bg.BgType);
            Assert.AreEqual("#FFFFFF", bg.Color);
            Assert.IsNull(bg.ImageKey);
            Assert.IsNull(bg.ImageName);
            Assert.IsFalse(bg.IsFixed);
            Assert.AreEqual(HALIGNMENT.LEFT, bg.HAlign);
            Assert.AreEqual(VALIGNMENT.TOP, bg.VAlign);
            Assert.IsTrue(bg.HRepeat);
            Assert.IsTrue(bg.VRepeat);
            Assert.IsNull(bg.Updated);
        }

        [Test]
        [ExpectedException(typeof(ArgumentException))]
        public void BackgroundRepository_CreateBackgroundEx() {
            var id = ObjectId.GenerateNewId();
            bgCollection.Save(new Background { Id = id });
            bgRepo.CreateBackground(id);
        }

        [Test]
        public void BackgroundRepository_CreateHeader() {
            headerRepo.CreateBackground(ObjectId.GenerateNewId());
            var bg = headerCollection.AsQueryable().Single();
            Assert.AreEqual(BACKGROUND_TYPE.NOT_SET, bg.BgType);
            Assert.AreEqual("#FFFFFF", bg.Color);
            Assert.IsNull(bg.ImageKey);
            Assert.IsNull(bg.ImageName);
            Assert.IsFalse(bg.IsFixed);
            Assert.AreEqual(HALIGNMENT.LEFT, bg.HAlign);
            Assert.AreEqual(VALIGNMENT.TOP, bg.VAlign);
            Assert.IsTrue(bg.HRepeat);
            Assert.IsTrue(bg.VRepeat);
            Assert.AreEqual(100, bg.Height);
            Assert.IsFalse(bg.IsTransparent);
            Assert.IsNull(bg.Updated);
        }

        [Test]
        public void BackgroundRepository_Get() {
            var siteId = ObjectId.GenerateNewId();
            bgCollection.Save(new Background { Id = siteId });
            var bg = bgRepo.Get(siteId);
            Assert.AreEqual(siteId, bg.Id);
        }

        [Test]
        [ExpectedException(typeof(ArgumentException))]
        public void BackgroundRepository_Get_Ex() {
            bgRepo.Get(ObjectId.GenerateNewId());
        }

        [Test]
        public void BackgroundRepository_UpdateColor() {
            var siteId = ObjectId.GenerateNewId();
            headerCollection.Save(new Header { Id = siteId, Color = "#FFFFFF", BgType=BACKGROUND_TYPE.EFFECT, ImageKey="key", ImageName="name", IsTransparent = true });
            headerRepo.Update(siteId, ColorTranslator.FromHtml("#000000"));
            var header = headerCollection.AsQueryable().Single();
            Assert.AreEqual("#000000", header.Color);
            Assert.AreEqual(BACKGROUND_TYPE.NOT_SET, header.BgType);
            Assert.IsNull(header.ImageKey);
            Assert.IsNull(header.ImageName);
            Assert.IsFalse(header.IsTransparent);
            Assert.IsNotNull(header.Updated);
            A.CallTo(() => s3Repo.DeleteObject("sites/" + siteId.ToString() + "/key")).MustHaveHappened(Repeated.Exactly.Once);
        }

        [Test]
        public void BackgroundRepository_UpdateImageOrEffect() {
            var siteId = ObjectId.GenerateNewId();
            headerCollection.Save(new Header { Id = siteId, BgType = BACKGROUND_TYPE.NOT_SET, ImageKey = "key", ImageName = "name", Color = "#FFFFFF", HRepeat = true, VRepeat = true, HAlign = HALIGNMENT.CENTER, VAlign = VALIGNMENT.MIDDLE });
            headerRepo.Update(siteId, BACKGROUND_TYPE.IMAGE, "image.png", "my image");
            var header = headerCollection.AsQueryable().Single();
            Assert.AreEqual(BACKGROUND_TYPE.IMAGE, header.BgType);
            Assert.AreNotEqual("key", header.ImageKey);
            Assert.AreEqual("my image", header.ImageName);
            Assert.AreEqual("#FFFFFF", header.Color);
            Assert.IsFalse(header.HRepeat);
            Assert.IsFalse(header.VRepeat);
            Assert.AreEqual(HALIGNMENT.LEFT, header.HAlign);
            Assert.AreEqual(VALIGNMENT.TOP, header.VAlign);
            Assert.IsNotNull(header.Updated);
            A.CallTo(() => s3Repo.DeleteObject("sites/" + siteId.ToString() + "/key")).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => s3Repo.PutObject("image.png", A<string>.Ignored)).MustHaveHappened(Repeated.Exactly.Once);
        }

        [Test]
        public void BackgroundRepository_Update_1() {
            var siteId = ObjectId.GenerateNewId();
            bgCollection.Save(new Background { Id = siteId, ImageKey = "key", ImageName = "name", BgType = BACKGROUND_TYPE.NOT_SET, Color = "#FFFFFF", IsFixed = false, HRepeat = false, VRepeat = false, HAlign = HALIGNMENT.LEFT, VAlign = VALIGNMENT.TOP });
            bgRepo.Update(siteId, ColorTranslator.FromHtml("#000000"), true, true, true, HALIGNMENT.CENTER, VALIGNMENT.MIDDLE);
            var bg = bgCollection.AsQueryable().Single();
            Assert.AreEqual("key", bg.ImageKey);
            Assert.AreEqual("name", bg.ImageName);
            Assert.AreEqual(BACKGROUND_TYPE.NOT_SET, bg.BgType);
            Assert.AreEqual("#000000", bg.Color);
            Assert.IsTrue(bg.IsFixed);
            Assert.IsTrue(bg.HRepeat);
            Assert.IsTrue(bg.VRepeat);
            Assert.AreEqual(HALIGNMENT.CENTER, bg.HAlign);
            Assert.AreEqual(VALIGNMENT.MIDDLE, bg.VAlign);
            Assert.IsNotNull(bg.Updated);
        }

        [Test]
        public void BackgroundRepository_Update_2() {
            var siteId = ObjectId.GenerateNewId();
            headerCollection.Save(new Header { Id = siteId, ImageKey = "key", ImageName = "name", BgType = BACKGROUND_TYPE.NOT_SET, Color = "#FFFFFF", Height = 100, HRepeat = false, VRepeat = false, HAlign = HALIGNMENT.LEFT, VAlign = VALIGNMENT.TOP });
            headerRepo.Update(siteId, ColorTranslator.FromHtml("#000000"), true, true, HALIGNMENT.CENTER, VALIGNMENT.MIDDLE, 200);
            var header = headerCollection.AsQueryable().Single();
            Assert.AreEqual("key", header.ImageKey);
            Assert.AreEqual("name", header.ImageName);
            Assert.AreEqual(BACKGROUND_TYPE.NOT_SET, header.BgType);
            Assert.AreEqual("#000000", header.Color);
            Assert.AreEqual(200, header.Height);
            Assert.IsTrue(header.HRepeat);
            Assert.IsTrue(header.VRepeat);
            Assert.AreEqual(HALIGNMENT.CENTER, header.HAlign);
            Assert.AreEqual(VALIGNMENT.MIDDLE, header.VAlign);
            Assert.IsNotNull(header.Updated);
        }

        [Test]
        public void BackgroundRepository_Update_3() {
            var siteId = ObjectId.GenerateNewId();
            var imgId = ObjectId.GenerateNewId();
            headerCollection.Save(new Header { Id = siteId, BgType = BACKGROUND_TYPE.NOT_SET, ImageKey = "key", ImageName = "name", Color = "#FFFFFF", HRepeat = true, VRepeat = true, HAlign = HALIGNMENT.CENTER, VAlign = VALIGNMENT.MIDDLE });
            headerRepo.UpdateFromTemporaryImage(new TemporaryImage { Id = imgId, SiteId = siteId, Key = "tmpkey", Name = "tmpname" });
            var header = headerCollection.AsQueryable().Single();
            Assert.AreEqual(BACKGROUND_TYPE.IMAGE, header.BgType);
            Assert.AreEqual("tmpkey", header.ImageKey);
            Assert.AreEqual("tmpname", header.ImageName);
            Assert.IsFalse(header.HRepeat);
            Assert.IsFalse(header.VRepeat);
            Assert.AreEqual(HALIGNMENT.LEFT, header.HAlign);
            Assert.AreEqual(VALIGNMENT.TOP, header.VAlign);
            Assert.IsNotNull(header.Updated);
            A.CallTo(() => tmpImgRepo.Delete(imgId, true)).MustHaveHappened();
        }

        [Test]
        public void BackgroundRepository_UpdateTransparency() {
            var siteId = ObjectId.GenerateNewId();
            headerCollection.Save(new Header{ Id = siteId, BgType = BACKGROUND_TYPE.EFFECT, ImageName = "name", ImageKey = "key", IsTransparent=false});
            headerRepo.Update(siteId, true);
            var header = headerCollection.AsQueryable().Single();
            Assert.IsTrue(header.IsTransparent);
            Assert.IsNull(header.ImageKey);
            Assert.IsNull(header.ImageName);
            Assert.AreEqual(BACKGROUND_TYPE.NOT_SET, header.BgType);
            Assert.IsNotNull(header.Updated);
            A.CallTo(() => s3Repo.DeleteObject("sites/" + siteId.ToString() + "/key")).MustHaveHappened(Repeated.Exactly.Once);
        }

        [Test]
        public void BackgroundRepository_UpdateHeight() {
            var siteId = ObjectId.GenerateNewId();
            headerCollection.Save(new Header { Id = siteId, Height = 100 });
            headerRepo.Update(siteId, 200);
            var header = headerCollection.AsQueryable().Single();
            Assert.AreEqual(200, header.Height);
            Assert.IsNotNull(header.Updated);
        }

        [Test]
        public void BackgroundRepository_ClearImage() {
            var siteId = ObjectId.GenerateNewId();
            bgCollection.Save(new Background { Id = siteId, BgType = BACKGROUND_TYPE.IMAGE, ImageKey = "key", ImageName = "name" });
            bgRepo.ClearImage(siteId);
            var bg = bgCollection.AsQueryable().Single();
            Assert.AreEqual(BACKGROUND_TYPE.NOT_SET, bg.BgType);
            Assert.IsNull(bg.ImageKey);
            Assert.IsNull(bg.ImageName);
            Assert.IsNotNull(bg.Updated);
            A.CallTo(() => s3Repo.DeleteObject("sites/" + siteId.ToString() + "/key")).MustHaveHappened(Repeated.Exactly.Once);
        }
    }
}