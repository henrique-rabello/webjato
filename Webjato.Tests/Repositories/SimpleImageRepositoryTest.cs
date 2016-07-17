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
    public class SimpleImageRepositoryConcreteForTesting : SimpleImageRepository<SimpleImage> {
        public SimpleImageRepositoryConcreteForTesting(MongoCollection<SimpleImage> db, S3Repository s3, TemporaryImageRepository tmpRepo, General util, IPath path, ImageUtils imgUtils)
            : base(db, s3, tmpRepo, util, path, imgUtils) { }
    }

    [TestFixture]
    public class SimpleImageRepositoryTest {
        private MongoCollection<SimpleImage> db;
        private S3Repository s3Repo;
        private TemporaryImageRepository tmpImgRepo;
        private SimpleImageRepositoryConcreteForTesting repo;
        private General util;
        private IPath path;
        private ImageUtils imgUtils;

        [SetUp]
        public void BeforeEach() {
            db = TestUtilities.GetCollection<SimpleImage>();
            db.RemoveAll();
            s3Repo = A.Fake<S3Repository>(x => x.WithArgumentsForConstructor(new object[] { null, new AuxiliaryConstants() }));
            tmpImgRepo = A.Fake<TemporaryImageRepository>(x => x.WithArgumentsForConstructor(new object[] { null, s3Repo, A.Fake<ImageUtils>(), new General(), new AuxiliaryConstants(), null, null }));
            util = A.Fake<General>();
            A.CallTo(() => util.GetS3FolderForSite(A<ObjectId>.Ignored)).Returns("folder/");
            path = A.Fake<IPath>();
            imgUtils = A.Fake<ImageUtils>();
            repo = new SimpleImageRepositoryConcreteForTesting(db, s3Repo, tmpImgRepo, util, path, imgUtils);
        }

        [Test]
        public void SimpleImageRepository_Get() {
            var id = ObjectId.GenerateNewId();
            db.Save(new SimpleImage { Id = id });
            var logo = repo.Get(id);
            Assert.AreEqual(id, logo.Id);
        }

        [Test]
        [ExpectedException(typeof(ArgumentException))]
        public void SimpleImageRepository_GetEx() {
            repo.Get(ObjectId.GenerateNewId());
        }

        [Test]
        public void SimpleImageRepository_ClearImage() {
            var id = ObjectId.GenerateNewId();
            db.Save(new SimpleImage { Id = id, ImageKey = "key", ImageName = "name", ImageSize = new Size { Width = 800, Height = 600 } });
            repo.ClearSimpleImage(id, id);
            var img = db.AsQueryable().Single();
            Assert.IsNull(img.ImageKey);
            Assert.IsNull(img.ImageName);
            Assert.AreEqual(0, img.ImageSize.Width);
            Assert.AreEqual(0, img.ImageSize.Height);
            Assert.IsNotNull(img.Updated);
            A.CallTo(() => s3Repo.DeleteObject("folder/key")).MustHaveHappened();
        }

        [Test]
        public void SimpleImageRepository_UpdateFromTemporaryImage() {
            var tmpImgId = ObjectId.GenerateNewId();
            var imgId = ObjectId.GenerateNewId();
            db.Save(new SimpleImage { Id = imgId, ImageKey = "key", ImageName = "name", ImageSize = new Size { Width = 800, Height = 600 } });
            repo.NewSimpleImageFromTemporaryImage(new TemporaryImage { Id = tmpImgId, Name = "TmpName", Key = "TmpKey", Width = 320, Height = 240 }, imgId, imgId, true);
            var img = db.AsQueryable().Single();
            Assert.AreEqual("TmpName", img.ImageName);
            Assert.AreEqual("TmpKey", img.ImageKey);
            Assert.AreEqual(320, img.ImageSize.Width);
            Assert.AreEqual(240, img.ImageSize.Height);
            Assert.AreEqual(320, img.RecommendedSize.Width);
            Assert.AreEqual(240, img.RecommendedSize.Height);
            A.CallTo(() => s3Repo.DeleteObject("folder/key")).MustHaveHappened();
            A.CallTo(() => tmpImgRepo.Delete(tmpImgId, true)).MustHaveHappened();
        }

        [Test]
        public void SimpleImageRepository_NewSimpleImage() {
            var id = ObjectId.GenerateNewId();
            var siteId = ObjectId.GenerateNewId();
            db.Save(new SimpleImage { Id = id, ImageKey = "key", ImageName = "name", ImageSize = new Size { Width = 800, Height = 600 } });
            A.CallTo(() => path.GetExtension("filepath")).Returns(".png");
            A.CallTo(() => util.GenerateRandomFileName(".png")).Returns("random.png");
            A.CallTo(() => util.GetS3FolderForSite(siteId)).Returns("S3Folder/");
            A.CallTo(() => imgUtils.GetImageDimensions("filepath")).Returns(new Size { Width = 320, Height = 240 });
            repo.NewSimpleImage(id, siteId, "filepath", "filename");
            var img = db.AsQueryable().Single();
            Assert.AreEqual("filename", img.ImageName);
            Assert.AreEqual("random.png", img.ImageKey);
            Assert.AreEqual(320, img.ImageSize.Width);
            Assert.AreEqual(240, img.ImageSize.Height);
            Assert.IsNotNull(img.Updated);
            A.CallTo(() => s3Repo.PutObject("filepath", "S3Folder/random.png")).MustHaveHappened();
        }

        [Test]
        public void SimpleImageRepository_Duplicate() {
            var sourceSiteId = ObjectId.GenerateNewId();
            var targetSiteId = ObjectId.GenerateNewId();
            var source = new SimpleImage {
                ImageName = "ImageName",
                ImageKey = "ImageKey",
                ImageSize = new Size {
                    Width = 320,
                    Height = 240
                }
            };
            var target = new SimpleImage {
                Id = ObjectId.GenerateNewId()
            };
            db.Save(target);
            A.CallTo(() => path.GetExtension("ImageKey")).Returns(".png");
            A.CallTo(() => util.GenerateRandomFileName(".png")).Returns("file.png");
            A.CallTo(() => util.GetS3FolderForSite(sourceSiteId)).Returns("SourceFolder/");
            A.CallTo(() => util.GetS3FolderForSite(targetSiteId)).Returns("TargetFolder/");
            repo.DuplicateSimpleImage(sourceSiteId, source, targetSiteId, target, true);
            var duplicatedCommited = db.AsQueryable().Single();
            Assert.AreEqual(source.ImageName, duplicatedCommited.ImageName);
            Assert.AreEqual(duplicatedCommited.ImageKey, "file.png");
            NUnitExtension.CompareObjects(source.ImageSize, duplicatedCommited.ImageSize);
            A.CallTo(() => s3Repo.CopyObject("SourceFolder/ImageKey", "TargetFolder/file.png")).MustHaveHappened();

            var duplicatedUncommited = repo.DuplicateSimpleImage(sourceSiteId, source, targetSiteId, new SimpleImage { Id = ObjectId.GenerateNewId() }, false);
            Assert.AreEqual(1, db.AsQueryable().Count());
            Assert.AreEqual(target.Id, db.AsQueryable().Single().Id);
        }

        [Test]
        public void SimpleImageRepository_Duplicate_NoSource() {
            var source = new SimpleImage { SiteId = ObjectId.GenerateNewId() };
            var target = new SimpleImage { SiteId = ObjectId.GenerateNewId() };
            var duplicated = repo.DuplicateSimpleImage(source.SiteId, source, target.SiteId, target, true);
            NUnitExtension.CompareObjects(duplicated, target);
        }
    }
}