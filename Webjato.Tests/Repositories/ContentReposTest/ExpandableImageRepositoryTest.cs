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
    public class ExpandableImageRepositoryTest {
        private ExpandableImageRepository repo;
        private MongoCollection<ExpandableImage> db;
        private ContentUtilities utils;
        private ScalableImageRepository<ExpandableImage> expandableImageRepo;
        private TemporaryImageRepository tmpImgRepo;

        [SetUp]
        public void BeforeEach() {
            db = TestUtilities.GetCollection<ExpandableImage>();
            db.RemoveAll();
            utils = A.Fake<ContentUtilities>();
            A.CallTo(() => utils.GetContentType<ExpandableImage>()).Returns(ContentType.EXPANDABLE_IMAGE);
            var s3Repo = A.Fake<S3Repository>(x => x.WithArgumentsForConstructor(new object[] { null, new AuxiliaryConstants() }));
            tmpImgRepo = A.Fake<TemporaryImageRepository>(x => x.WithArgumentsForConstructor(new object[] { null, s3Repo, A.Fake<ImageUtils>(), new General(), new AuxiliaryConstants(), null, null }));
            expandableImageRepo = A.Fake<ScalableImageRepository<ExpandableImage>>(x => x.WithArgumentsForConstructor(new object[] { db, s3Repo, A.Fake<General>(), A.Fake<ImageUtils>(), A.Fake<IPath>(), A.Fake<IFile>(), new AuxiliaryConstants { TemporaryFolder = "TmpFolder/" }, tmpImgRepo }));
            repo = new ExpandableImageRepository(db, expandableImageRepo, tmpImgRepo, utils);
        }

        [Test]
        public void ExpandableImageRepository_Create() {
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            repo.Create(siteId, pageId, 5);
            var img = db.AsQueryable().Single();
            Assert.AreEqual(200, img.Position.X);
            Assert.AreEqual(200, img.Position.Y);
            Assert.AreEqual(5, img.Position.ZIndex);
            Assert.AreEqual(100, img.ImageScale);
            Assert.IsNotNull(img.ExpandedImage);
        }

        [Test]
        public void ExpandableImageRepository_UpdateFromTemporaryImage() {
            var img = new ExpandableImage { Id = ObjectId.GenerateNewId(), SiteId = ObjectId.GenerateNewId(), ExpandedImage = new SimpleImage { ImageKey = "OldKey", ImageName = "OldName", ImageSize = new Size { Width = 50, Height = 100 } } };
            db.Save(img);
            var tmpImgCropped = new TemporaryImage { CroppedFrom = ObjectId.GenerateNewId() };
            var tmpImgOriginal = new TemporaryImage { Id = (ObjectId)tmpImgCropped.CroppedFrom, Name = "Name", Key = "Key", Width = 100, Height = 200 };
            A.CallTo(() => expandableImageRepo.UpdateFromTemporaryImage(tmpImgCropped, img.Id, img.SiteId, true)).Returns(img);
            A.CallTo(() => expandableImageRepo.UpdateFromTemporaryImage(tmpImgCropped, img.Id, img.SiteId, true)).Returns(img);
            A.CallTo(() => tmpImgRepo.Get((ObjectId)tmpImgCropped.CroppedFrom)).Returns(tmpImgOriginal);
            repo.UpdateFromTemporaryImage(img.Id, tmpImgCropped, true);
            var img2 = db.AsQueryable().Single();
            Assert.AreEqual("Name", img2.ExpandedImage.ImageName);
            Assert.AreEqual("Key", img2.ExpandedImage.ImageKey);
            Assert.AreEqual(100, img2.ExpandedImage.ImageSize.Width);
            Assert.AreEqual(200, img2.ExpandedImage.ImageSize.Height);
            Assert.IsNotNull(img2.Updated);
            A.CallTo(() => tmpImgRepo.Delete(tmpImgOriginal.Id, true)).MustHaveHappened();
        }

        [Test]
        public void ExpandableImageRepository_Duplicate() {
            var source = new ExpandableImage {
                Id = ObjectId.GenerateNewId(),
                Position = new Position { X = 1, Y = 2},
                SiteId = ObjectId.GenerateNewId()
            };
            db.Save(source);
            A.CallTo(() => expandableImageRepo.DuplicateSimpleImage(source.SiteId, source, source.SiteId, A<ExpandableImage>.That.Matches(x => x.Id != source.Id), false)).Returns(new ExpandableImage());
            repo.Duplicate(source, source.SiteId, ObjectId.GenerateNewId(), 5);
            A.CallTo(() => expandableImageRepo.DuplicateSimpleImage(source.SiteId, source, source.SiteId, A<ExpandableImage>.That.Matches(x => x.Id != source.Id), false)).MustHaveHappened();
        }
    }
}