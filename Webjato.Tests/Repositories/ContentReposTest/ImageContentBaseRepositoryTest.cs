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
    public class ImageContentBaseRepositoryTest {
        private ImageContentBaseRepository<RegularImage> repo;
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
            repo = new ImageContentBaseRepository<RegularImage>(db, imgRepo, utils);
        }

        [Test]
        public void ImageContentBaseRepository_Create() {
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            repo.Create(siteId, pageId, 5);
            var img = db.AsQueryable().Single();
            Assert.AreEqual(200, img.Position.X);
            Assert.AreEqual(200, img.Position.Y);
            Assert.AreEqual(5, img.Position.ZIndex);
            Assert.AreEqual(100, img.ImageScale);
        }

        [Test]
        public void ImageContentBaseRepository_Update() {
            var siteId = ObjectId.GenerateNewId();
            var position = new Position { X = 1, Y = 2, ZIndex = 3 };
            var img1 = new RegularImage { Id = ObjectId.GenerateNewId(), ImageScale = 1, Position = position };
            var img2 = new RegularImage { Id = img1.Id, SiteId = siteId, ImageScale = 2, Position = position, ImageExportedKey = "ImageExportedKey", ImageExportedSize = new Size { Width = 320, Height = 240 } };
            db.Save(img2);
            A.CallTo(() => utils.AuthenticateContent(img2, img1)).DoesNothing();
            A.CallTo(() => imgRepo.UpdateScale(img1.Id, siteId, 1)).Returns(img2);
            A.CallTo(() => utils.NormalizePosition(position)).Returns(position);
            repo.Update(img1, true);
            var img3 = db.AsQueryable().Single();
            Assert.IsNotNull(img3.Updated);
            Assert.AreEqual(position.X, img3.Position.X);
            Assert.AreEqual(position.Y, img3.Position.Y);
            Assert.AreEqual(position.ZIndex, img3.Position.ZIndex);
            Assert.AreEqual(320, img3.RecommendedSize.Width);
            Assert.AreEqual(240, img3.RecommendedSize.Height);
            A.CallTo(() => utils.AuthenticateContent(A<RegularImage>.Ignored, img1)).MustHaveHappened();
            A.CallTo(() => imgRepo.UpdateScale(img1.Id, siteId, 1)).MustHaveHappened();
            A.CallTo(() => utils.NormalizePosition(position)).MustHaveHappened();
        }

        [Test]
        public void ImageContentBaseRepository_Delete() {
            var img = new RegularImage { Id = ObjectId.GenerateNewId(), SiteId = ObjectId.GenerateNewId() };
            db.Save(img);
            repo.Delete(img);
            A.CallTo(() => imgRepo.ClearImage(img.Id, img.SiteId)).MustHaveHappened();
            Assert.IsFalse(db.AsQueryable().Any(x => x.Id == img.Id));
        }

        [Test]
        public void ImageContentBaseRepository_Duplicate() {
            var original = new RegularImage {
                SiteId = ObjectId.GenerateNewId(),
                PageId = ObjectId.GenerateNewId(),
                Position = new Position {
                    X = 0,
                    Y = 5
                }
            };
            db.Insert(original);
            var targetPageId = ObjectId.GenerateNewId();
            var targetSite = ObjectId.GenerateNewId();
            repo.Duplicate(original, targetSite, targetPageId, 5);
            var duplicated = db.AsQueryable().Last();
            Assert.AreEqual(targetSite, duplicated.SiteId);
            Assert.AreEqual(targetPageId, duplicated.PageId);
            Assert.AreNotEqual(original.Id, duplicated.Id);
            Assert.AreEqual(5, duplicated.Position.ZIndex);
            A.CallTo(() => imgRepo.Duplicate(original.SiteId, A<RegularImage>.Ignored, targetSite, A<RegularImage>.Ignored)).MustHaveHappened();
        }
    }
}