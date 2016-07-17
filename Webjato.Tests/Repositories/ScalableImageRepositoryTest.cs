using FakeItEasy;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using NUnit.Framework;
using System.Linq;
using SystemInterface.IO;
using Webjato.Entities;
using Webjato.Repositories;
using Webjato.Repositories.AwsRepos;
using Webjato.Utilities;

namespace Webjato.Tests.Repositories {
    [TestFixture]
    public class ScalableImageRepositoryTest {
        private MongoCollection<ScalableImage> db;
        private S3Repository s3Repo;
        private TemporaryImageRepository tmpImgRepo;
        private General general;
        private ImageUtils imgUtils;
        private IPath path;
        private IFile file;
        private ScalableImageRepository<ScalableImage> repo;

        [SetUp]
        public void BeforeEach() {
            db = TestUtilities.GetCollection<ScalableImage>();
            db.RemoveAll();
            s3Repo = A.Fake<S3Repository>(x => x.WithArgumentsForConstructor(new object[] { null, new AuxiliaryConstants() }));
            general = A.Fake<General>();
            A.CallTo(() => general.GetS3FolderForSite(A<ObjectId>.Ignored)).Returns("S3Folder/");
            imgUtils = A.Fake<ImageUtils>();
            path = A.Fake<IPath>();
            file = A.Fake<IFile>();
            tmpImgRepo = A.Fake<TemporaryImageRepository>(x => x.WithArgumentsForConstructor(new object[] { null, s3Repo, A.Fake<ImageUtils>(), new General(), new AuxiliaryConstants(), null, null }));
            repo = new ScalableImageRepository<ScalableImage>(db, s3Repo, general, imgUtils, path, file, new AuxiliaryConstants { TemporaryFolder = "TmpFolder/" }, tmpImgRepo);
        }

        [Test]
        public void ScalableImageRepository_ClearImage() {
            var imgId = ObjectId.GenerateNewId();
            db.Save(new ScalableImage { Id = imgId, ImageKey = "Key", ImageName = "Name", ImageSize = new Size { Width = 10, Height = 20}, ImageExportedKey = "ExpKey", ImageExportedSize = new Size { Width = 30, Height = 40 }, ImageScale = 100 });
            repo.ClearImage(imgId, imgId);
            var img = db.AsQueryable().Single();
            Assert.IsNull(img.ImageName);
            Assert.IsNull(img.ImageKey);
            Assert.IsNull(img.ImageExportedKey);
            Assert.AreEqual(0, img.ImageSize.Width);
            Assert.AreEqual(0, img.ImageSize.Height);
            Assert.AreEqual(0, img.ImageExportedSize.Width);
            Assert.AreEqual(0, img.ImageExportedSize.Height);
            Assert.IsNotNull(img.Updated);
            A.CallTo(() => s3Repo.DeleteObject("S3Folder/Key")).MustHaveHappened();
            A.CallTo(() => s3Repo.DeleteObject("S3Folder/ExpKey")).MustHaveHappened();
        }

        [Test]
        public void ScalableImageRepository_UpdateFromTemporaryImage() {
            var imgId = ObjectId.GenerateNewId();
            var tmpImgId = ObjectId.GenerateNewId();
            db.Save(new ScalableImage { Id = imgId, ImageKey = "Key", ImageName = "Name", ImageSize = new Size { Width = 10, Height = 20 }, ImageScale = 100, ImageExportedKey = "ExpKey", ImageExportedSize = new Size { Width = 30, Height = 40 } });
            A.CallTo(() => path.Combine("TmpFolder/", "TmpKey")).Returns("TmpFolder/TmpKey");
            A.CallTo(() => file.Exists("TmpFolder/TmpKey")).Returns(false);
            A.CallTo(() => path.GetExtension("TmpName")).Returns(".PNG");
            A.CallTo(() => general.GenerateRandomFileName(".PNG")).Returns("NewName.PNG");
            A.CallTo(() => path.Combine("TmpFolder/", "NewName.PNG")).Returns("TmpFolder/NewName.PNG");
            A.CallTo(() => imgUtils.ScaleImage("TmpFolder/TmpKey", 100, "TmpFolder/NewName.PNG")).Returns(new Size { Width = 320, Height = 240 });
            repo.UpdateFromTemporaryImage(new TemporaryImage { Id = tmpImgId, Name = "TmpName", Key = "TmpKey", Width = 320, Height = 240 }, imgId, imgId, true);
            var img = db.AsQueryable().Single();
            Assert.AreEqual("TmpName", img.ImageName);
            Assert.AreEqual("TmpKey", img.ImageKey);
            Assert.AreEqual(320, img.ImageSize.Width);
            Assert.AreEqual(240, img.ImageSize.Height);
            Assert.AreEqual("NewName.PNG", img.ImageExportedKey);
            Assert.AreEqual(100, img.ImageScale);
            Assert.AreEqual(320, img.ImageExportedSize.Width);
            Assert.AreEqual(240, img.ImageExportedSize.Height);
            Assert.AreEqual(320, img.RecommendedSize.Width);
            Assert.AreEqual(240, img.RecommendedSize.Height);
            Assert.IsNotNull(img.Updated);
            A.CallTo(() => s3Repo.GetObject("S3Folder/TmpKey", "TmpFolder/TmpKey")).MustHaveHappened();
            A.CallTo(() => imgUtils.ScaleImage("TmpFolder/TmpKey", 100, "TmpFolder/NewName.PNG")).MustHaveHappened();
            A.CallTo(() => s3Repo.PutObject("TmpFolder/NewName.PNG", "S3Folder/NewName.PNG")).MustHaveHappened();
            A.CallTo(() => file.Delete("TmpFolder/TmpKey")).MustHaveHappened();
            A.CallTo(() => file.Delete("TmpFolder/NewName.PNG")).MustHaveHappened();
        }

        [Test]
        public void ScalableImageRepository_UpdateScale() {
            var imgId = ObjectId.GenerateNewId();
            db.Save(new ScalableImage { Id = imgId, ImageKey = "Key", ImageName = "Name", ImageSize = new Size { Width = 10, Height = 20 }, ImageExportedKey = "ExpKey", ImageExportedSize = new Size { Width = 30, Height = 40 } });
            A.CallTo(() => path.Combine("TmpFolder/", "Key")).Returns("TmpFolder/Key");
            A.CallTo(() => file.Exists("TmpFolder/Key")).Returns(false);
            A.CallTo(() => path.GetExtension("Name")).Returns(".PNG");
            A.CallTo(() => general.GenerateRandomFileName(".PNG")).Returns("NewName.PNG");
            A.CallTo(() => path.Combine("TmpFolder/", "NewName.PNG")).Returns("TmpFolder/NewName.PNG");
            A.CallTo(() => imgUtils.ScaleImage("TmpFolder/Key", 50, "TmpFolder/NewName.PNG")).Returns(new Size { Width = 5, Height = 10 });
            repo.UpdateScale(imgId, imgId, 50);
            var img = db.AsQueryable().Single();
            Assert.AreEqual("NewName.PNG", img.ImageExportedKey);
            Assert.AreEqual(50, img.ImageScale);
            Assert.IsNotNull(img.Updated);
            Assert.AreEqual(5, img.ImageExportedSize.Width);
            Assert.AreEqual(10, img.ImageExportedSize.Height);
            A.CallTo(() => s3Repo.GetObject("S3Folder/Key", "TmpFolder/Key")).MustHaveHappened();
            A.CallTo(() => imgUtils.ScaleImage("TmpFolder/Key", 50, "TmpFolder/NewName.PNG")).MustHaveHappened();
            A.CallTo(() => s3Repo.PutObject("TmpFolder/NewName.PNG", "S3Folder/NewName.PNG")).MustHaveHappened();
            A.CallTo(() => file.Delete("TmpFolder/Key")).MustHaveHappened();
            A.CallTo(() => file.Delete("TmpFolder/NewName.PNG")).MustHaveHappened();
        }

        [Test]
        public void ScalableImageRepository_UpdateScale_NoImage() {
            var id = ObjectId.GenerateNewId();
            db.Save(new ScalableImage { Id = id, ImageScale = 50 });
            repo.UpdateScale(id, id, 100);
            var img = db.AsQueryable().Single();
            Assert.AreEqual(img.ImageScale, 100);
            Assert.IsNotNull(img.Updated);
        }

        [Test]
        public void ScalableImageRepository_ClearScaledImage() {
            var imgId = ObjectId.GenerateNewId();
            db.Save(new ScalableImage { Id = imgId, ImageExportedKey = "ExpKey", ImageExportedSize = new Size { Width = 10, Height = 20 }, ImageScale = 100 });
            repo.ClearScaledImage(imgId, imgId);
            var img = db.AsQueryable().Single();
            Assert.IsNull(img.ImageExportedKey);
            Assert.AreEqual(0, img.ImageExportedSize.Width);
            Assert.AreEqual(0, img.ImageExportedSize.Height);
            Assert.IsNotNull(img.Updated);
            A.CallTo(() => s3Repo.DeleteObject("S3Folder/ExpKey")).MustHaveHappened();
        }

        [Test]
        public void ScalableImageRepository_Duplicate() {
            var sourceSiteId = ObjectId.GenerateNewId();
            var targetSiteId = ObjectId.GenerateNewId();
            var source = new ScalableImage {
                ImageExportedKey = "ImageExportedKey",
                ImageScale = 100,
                ImageExportedSize = new Size {
                    Width = 320,
                    Height = 240
                }
            };
            var target = new ScalableImage {
                Id = ObjectId.GenerateNewId()
            };
            db.Save(target);
            A.CallTo(() => path.GetExtension("ImageExportedKey")).Returns(".png");
            A.CallTo(() => general.GenerateRandomFileName(".png")).Returns("file.png");
            A.CallTo(() => general.GetS3FolderForSite(sourceSiteId)).Returns("SourceFolder/");
            A.CallTo(() => general.GetS3FolderForSite(targetSiteId)).Returns("TargetFolder/");
            repo.Duplicate(sourceSiteId, source, targetSiteId, target);
            var duplicated = db.AsQueryable().Single();
            Assert.AreEqual("file.png", duplicated.ImageExportedKey);
            Assert.AreEqual(source.ImageScale, duplicated.ImageScale);
            NUnitExtension.CompareObjects(source.ImageExportedSize, duplicated.ImageExportedSize);
            A.CallTo(() => s3Repo.CopyObject("SourceFolder/ImageExportedKey", "TargetFolder/file.png")).MustHaveHappened();
        }

        [Test]
        public void ScalableImageRepository_Duplicate_NoSource() {
            var source = new ScalableImage { SiteId = ObjectId.GenerateNewId() };
            var target = new ScalableImage { SiteId = ObjectId.GenerateNewId() };
            var duplicated = repo.Duplicate(source.SiteId, source, target.SiteId, target);
            NUnitExtension.CompareObjects(duplicated, target);
        }
    }
}