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
    public class TemporaryImageRepositoryTest {
        private MongoCollection<TemporaryImage> collection;
        private S3Repository s3Repo;
        private ImageUtils imgUtils;
        private General utils;
        private IPath path;
        private IFile file;
        private TemporaryImageRepository repo;
        private string tmpFolder = "tmpFolder/";

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<TemporaryImage>();
            s3Repo = A.Fake<S3Repository>();
            imgUtils = A.Fake<ImageUtils>();
            utils = A.Fake<General>();
            path = A.Fake<IPath>();
            file = A.Fake<IFile>();
            repo = new TemporaryImageRepository(collection, s3Repo, imgUtils, utils, new AuxiliaryConstants { TemporaryFolder = tmpFolder}, path, file);
        }

        [TearDown]
        public void AfterEach() {
            collection.RemoveAll();
        }

        [Test]
        public void TemporaryImageRepository_CreateTemporaryImage1() {
            var siteId = ObjectId.GenerateNewId();
            A.CallTo(() => path.GetExtension("filepath")).Returns(".png");
            A.CallTo(() => utils.GenerateRandomFileName(".png")).Returns("imagekey.png");
            A.CallTo(() => utils.GetS3FolderForSite(siteId)).Returns("s3folder/");
            A.CallTo(() => imgUtils.GetImageDimensions("filepath")).Returns(new Size { Width = 320, Height = 240 });
            repo.CreateTemporaryImage(siteId, "filepath", "filename");
            A.CallTo(() => s3Repo.PutObject("filepath", "s3folder/imagekey.png")).MustHaveHappened();
            var tmpimg = collection.AsQueryable().Single();
            Assert.AreEqual(siteId, tmpimg.SiteId);
            Assert.AreEqual("imagekey.png", tmpimg.Key);
            Assert.AreEqual("filename", tmpimg.Name);
            Assert.AreEqual(320, tmpimg.Width);
            Assert.AreEqual(240, tmpimg.Height);
            Assert.IsNull(tmpimg.CroppedFrom);
        }

        [Test]
        public void TemporaryImageRepository_CreateTemporaryImage2() {
            var siteId = ObjectId.GenerateNewId();
            A.CallTo(() => path.GetExtension("filepath")).Returns(".png");
            A.CallTo(() => utils.GenerateRandomFileName(".png")).Returns("imagekey.png");
            A.CallTo(() => utils.GetS3FolderForSite(siteId)).Returns("s3folder/");
            A.CallTo(() => imgUtils.GetImageDimensions("filepath")).Returns(new Size { Width = 320, Height = 240 });
            repo.CreateTemporaryImage(siteId, "filepath", "filename", 100, 100);
            A.CallTo(() => s3Repo.PutObject("filepath", "s3folder/imagekey.png")).MustHaveHappened();
            var tmpimg = collection.AsQueryable().Single();
            Assert.AreEqual(siteId, tmpimg.SiteId);
            Assert.AreEqual("imagekey.png", tmpimg.Key);
            Assert.AreEqual("filename", tmpimg.Name);
            Assert.AreEqual(320, tmpimg.Width);
            Assert.AreEqual(240, tmpimg.Height);
        }

        [Test]
        public void TemporaryImageRepository_CreateTemporaryImage3() {
            var siteId = ObjectId.GenerateNewId();
            A.CallTo(() => path.GetExtension("filepath")).Returns(".png");
            A.CallTo(() => path.GetExtension("imagekey.png")).Returns(".png");
            A.CallTo(() => path.Combine(tmpFolder, "imagekey.png")).Returns(tmpFolder + "imagekey.png");
            A.CallTo(() => utils.GenerateRandomFileName(".png")).Returns("imagekey.png");
            A.CallTo(() => utils.GetS3FolderForSite(siteId)).Returns("s3folder/");
            A.CallTo(() => imgUtils.GetImageDimensions("filepath")).Returns(new Size { Width = 320, Height = 240 });
            A.CallTo(() => imgUtils.GetImageDimensions(tmpFolder + "imagekey.png")).Returns(new Size { Width = 640, Height = 480 });
            repo.CreateTemporaryImage(siteId, "filepath", "filename", 640, 480);
            A.CallTo(() => imgUtils.AssureMinimunCanvasSize("filepath", tmpFolder + "imagekey.png", 640, 480)).MustHaveHappened();
            //A.CallTo(() => file.Delete("filepath")).MustHaveHappened();
            var tmpimg = collection.AsQueryable().Single();
            Assert.AreEqual(siteId, tmpimg.SiteId);
            Assert.AreEqual("filename", tmpimg.Name);
            Assert.AreEqual(640, tmpimg.Width);
            Assert.AreEqual(480, tmpimg.Height);
        }

        [Test]
        public void TemporaryImageRepository_Get() {
            var id = ObjectId.GenerateNewId();
            collection.Save(new TemporaryImage { Id = id, Key = "key"});
            var img = repo.Get(id);
            Assert.AreEqual(id, img.Id);
            Assert.AreEqual("key", img.Key);
        }

        [Test]
        [ExpectedException(typeof(ArgumentException))]
        public void TemporaryImageRepository_GetEx() {
            repo.Get(ObjectId.GenerateNewId());
        }

        [Test]
        public void TemporaryImageRepository_Delete1() {
            var id = ObjectId.GenerateNewId();
            var siteId = ObjectId.GenerateNewId();
            collection.Save(new TemporaryImage { Id = id, SiteId = siteId, Key = "key" });
            A.CallTo(() => utils.GetS3FolderForSite(siteId)).Returns("s3folder/");
            repo.Delete(id, false);
            A.CallTo(() => s3Repo.DeleteObject("s3folder/key")).MustHaveHappened();
            Assert.AreEqual(0, collection.AsQueryable().Count());
        }

        [Test]
        public void TemporaryImageRepository_Delete2() {
            var id = ObjectId.GenerateNewId();
            var siteId = ObjectId.GenerateNewId();
            collection.Save(new TemporaryImage { Id = id, SiteId = siteId, Key = "key" });
            A.CallTo(() => utils.GetS3FolderForSite(siteId)).Returns("s3folder/");
            repo.Delete(id, true);
            A.CallTo(() => s3Repo.DeleteObject("s3folder/key")).MustNotHaveHappened();
            Assert.AreEqual(0, collection.AsQueryable().Count());
        }

        [Test]
        public void TemporaryImageRepository_DeleteBySite() {
            var imgId1 = ObjectId.GenerateNewId();
            var imgId2 = ObjectId.GenerateNewId();
            var siteId1 = ObjectId.GenerateNewId();
            var siteId2 = ObjectId.GenerateNewId();
            collection.Save(new TemporaryImage { Id = imgId1, SiteId = siteId1, Key = "key1" });
            collection.Save(new TemporaryImage { Id = imgId2, SiteId = siteId2, Key = "key2" });
            A.CallTo(() => utils.GetS3FolderForSite(siteId1)).Returns("s3folder1/");
            repo.DeleteBySite(siteId1);
            A.CallTo(() => s3Repo.DeleteObject("s3folder1/key1")).MustHaveHappened();
            Assert.IsFalse(collection.AsQueryable().Any(x => x.SiteId == siteId1));
        }

        [Test]
        public void TemporaryImageRepository_AssureMinimunCanvasSize_NoResize() {
            var id = ObjectId.GenerateNewId();
            var siteId = ObjectId.GenerateNewId();
            collection.Save(new TemporaryImage { Id = id, Width = 100, Height = 100 });
            var tmpimg = repo.AssureMinimunCanvasSize(id, 10, 10);
            Assert.AreEqual(id, tmpimg.Id);
        }

        [Test]
        public void TemporaryImageRepository_AssureMinimunCanvasSize_Resize() {
            var id = ObjectId.GenerateNewId();
            var siteId = ObjectId.GenerateNewId();
            collection.Save(new TemporaryImage { Id = id, SiteId = siteId, Width = 100, Height = 100, Key = "key", Name = "name" });
            A.CallTo(() => utils.GetS3FolderForSite(siteId)).Returns("s3folder/");
            A.CallTo(() => path.Combine(tmpFolder, "key")).Returns("sourceFile");
            A.CallTo(() => path.GetExtension("name")).Returns(".png");
            A.CallTo(() => path.GetExtension("targetFile")).Returns(".png");
            A.CallTo(() => utils.GenerateRandomFileName(".png")).Returns("randomName");
            A.CallTo(() => path.Combine(tmpFolder, "randomName")).Returns("targetFile");
            A.CallTo(() => imgUtils.GetImageDimensions("targetFile")).Returns(new Size { Width = 320, Height = 240 });
            var newTmpImgId = repo.AssureMinimunCanvasSize(id, 320, 240).Id;
            Assert.IsFalse(collection.AsQueryable().Any(x => x.Id == id));
            var tmpimg = collection.AsQueryable().Single(x => x.Id == newTmpImgId);
            Assert.AreNotEqual(id, tmpimg.Id);
            Assert.AreEqual(320, tmpimg.Width);
            Assert.AreEqual(240, tmpimg.Height);
            Assert.AreEqual(siteId, tmpimg.SiteId);
            Assert.AreEqual("randomName", tmpimg.Key);
            Assert.AreEqual("name", tmpimg.Name);
            A.CallTo(() => s3Repo.GetObject("s3folder/key", "sourceFile")).MustHaveHappened();
            A.CallTo(() => imgUtils.AssureMinimunCanvasSize("sourceFile", "targetFile", 320, 240)).MustHaveHappened();
            A.CallTo(() => file.Delete("sourceFile")).MustHaveHappened();
            A.CallTo(() => file.Delete("targetFile")).MustHaveHappened();
        }

        [Test]
        public void TemporaryImageRepository_Crop_DeleteSourceImage() {
            var id = ObjectId.GenerateNewId();
            var siteId = ObjectId.GenerateNewId();
            collection.Save(new TemporaryImage { Id = id, SiteId = siteId, Width = 100, Height = 100, Key = "key", Name = "name" });
            A.CallTo(() => path.Combine(tmpFolder, "key")).Returns("localfile");
            A.CallTo(() => utils.GetS3FolderForSite(siteId)).Returns("s3folder/");
            A.CallTo(() => path.GetExtension("name")).Returns(".png");
            A.CallTo(() => path.GetExtension("targetFile")).Returns(".png");
            A.CallTo(() => utils.GenerateRandomFileName(".png")).Returns("randomName");
            A.CallTo(() => path.Combine(tmpFolder, "randomName")).Returns("targetFile");
            A.CallTo(() => imgUtils.GetImageDimensions("targetFile")).Returns(new Size { Width = 320, Height = 240 });
            var newTmpImgId = repo.Crop(id, 1, 2, 3, 4, false).Id;
            Assert.IsFalse(collection.AsQueryable().Any(x => x.Id == id));
            var tmpimg = collection.AsQueryable().Single(x => x.Id == newTmpImgId);
            Assert.AreNotEqual(id, tmpimg.Id);
            Assert.AreEqual(siteId, tmpimg.SiteId);
            Assert.AreEqual("randomName", tmpimg.Key);
            Assert.AreEqual("name", tmpimg.Name);
            Assert.AreEqual(320, tmpimg.Width);
            Assert.AreEqual(240, tmpimg.Height);
            A.CallTo(() => imgUtils.Crop("localfile", "targetFile", 1, 2, 3, 4)).MustHaveHappened();
            A.CallTo(() => s3Repo.GetObject("s3folder/key", "localfile")).MustHaveHappened();
            A.CallTo(() => file.Delete("localfile")).MustHaveHappened();
            A.CallTo(() => file.Delete("targetFile")).MustHaveHappened();   
        }

        [Test]
        public void TemporaryImageRepository_Crop_KeepSourceImage() {
            var id = ObjectId.GenerateNewId();
            var siteId = ObjectId.GenerateNewId();
            collection.Save(new TemporaryImage { Id = id, SiteId = siteId, Width = 100, Height = 100, Key = "key", Name = "name" });
            A.CallTo(() => path.Combine(tmpFolder, "key")).Returns("localfile");
            A.CallTo(() => utils.GetS3FolderForSite(siteId)).Returns("s3folder/");
            A.CallTo(() => path.GetExtension("name")).Returns(".png");
            A.CallTo(() => path.GetExtension("targetFile")).Returns(".png");
            A.CallTo(() => utils.GenerateRandomFileName(".png")).Returns("randomName");
            A.CallTo(() => path.Combine(tmpFolder, "randomName")).Returns("targetFile");
            A.CallTo(() => imgUtils.GetImageDimensions("targetFile")).Returns(new Size { Width = 320, Height = 240 });
            var newTmpImgId = repo.Crop(id, 1, 2, 3, 4, true).Id;
            Assert.IsTrue(collection.AsQueryable().Any(x => x.Id == id));
            var tmpimg = collection.AsQueryable().Single(x => x.Id == newTmpImgId);
            Assert.AreNotEqual(id, tmpimg.Id);
            Assert.AreEqual(siteId, tmpimg.SiteId);
            Assert.AreEqual("randomName", tmpimg.Key);
            Assert.AreEqual("name", tmpimg.Name);
            Assert.AreEqual(320, tmpimg.Width);
            Assert.AreEqual(240, tmpimg.Height);
            A.CallTo(() => imgUtils.Crop("localfile", "targetFile", 1, 2, 3, 4)).MustHaveHappened();
            A.CallTo(() => s3Repo.GetObject("s3folder/key", "localfile")).MustHaveHappened();
            A.CallTo(() => file.Delete("localfile")).MustHaveHappened();
            A.CallTo(() => file.Delete("targetFile")).MustHaveHappened();
        }
    }
}