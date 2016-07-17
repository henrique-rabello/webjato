using FakeItEasy;
using MongoDB.Bson;
using NUnit.Framework;
using System.Collections.Generic;
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
    public class ContentManagerTest {
        private BoxRepository boxRepo;
        private ContactFormRepository contactFormRepo;
        private GoogleMapsRepository googleMapsRepo;
        private LineRepository lineRepo;
        private LinkedImageRepository linkedImageRepo;
        private RegularImageRepository regularImageRepo;
        private ExpandableImageRepository expandableImageRepo;
        private SocialPluginRepository socialPluginRepo;
        private TextRepository textRepo;
        private VideoRepository videoRepo;
        private ContentUtilities contentUtils;
        private ContentManager repo;

        [SetUp]
        public void BeforeEach() {
            var s3Repo = A.Fake<S3Repository>(x => x.WithArgumentsForConstructor(new object[] { null, new AuxiliaryConstants() }));
            var tmpImgRepo = A.Fake<TemporaryImageRepository>(x => x.WithArgumentsForConstructor(new object[] { null, s3Repo, A.Fake<ImageUtils>(), new General(), new AuxiliaryConstants(), null, null }));
            var imgRepo1 = A.Fake<ScalableImageRepository<LinkedImage>>(x => x.WithArgumentsForConstructor(new object[] { null, s3Repo, A.Fake<General>(), A.Fake<ImageUtils>(), A.Fake<IPath>(), A.Fake<IFile>(), new AuxiliaryConstants { TemporaryFolder = "TmpFolder/" }, tmpImgRepo }));
            var imgRepo2 = A.Fake<ScalableImageRepository<RegularImage>>(x => x.WithArgumentsForConstructor(new object[] { null, s3Repo, A.Fake<General>(), A.Fake<ImageUtils>(), A.Fake<IPath>(), A.Fake<IFile>(), new AuxiliaryConstants { TemporaryFolder = "TmpFolder/" }, tmpImgRepo }));
            var imgRepo3 = A.Fake<ScalableImageRepository<ExpandableImage>>(x => x.WithArgumentsForConstructor(new object[] { null, s3Repo, A.Fake<General>(), A.Fake<ImageUtils>(), A.Fake<IPath>(), A.Fake<IFile>(), new AuxiliaryConstants { TemporaryFolder = "TmpFolder/" }, tmpImgRepo }));
            contentUtils = A.Fake<ContentUtilities>();
            boxRepo = A.Fake<BoxRepository>(x => x.WithArgumentsForConstructor(new object[] { null, contentUtils }));
            contactFormRepo = A.Fake<ContactFormRepository>(x => x.WithArgumentsForConstructor(new object[] { null, contentUtils }));
            googleMapsRepo = A.Fake<GoogleMapsRepository>(x => x.WithArgumentsForConstructor(new object[] { null, contentUtils }));
            lineRepo = A.Fake<LineRepository>(x => x.WithArgumentsForConstructor(new object[] { null, contentUtils }));
            linkedImageRepo = A.Fake<LinkedImageRepository>(x => x.WithArgumentsForConstructor(new object[] { null, imgRepo1, contentUtils }));
            regularImageRepo = A.Fake<RegularImageRepository>(x => x.WithArgumentsForConstructor(new object[] { null, imgRepo2, contentUtils }));
            expandableImageRepo = A.Fake<ExpandableImageRepository>(x => x.WithArgumentsForConstructor(new object[] { null, imgRepo3, tmpImgRepo, contentUtils }));
            socialPluginRepo = A.Fake<SocialPluginRepository>(x => x.WithArgumentsForConstructor(new object[] { null, contentUtils }));
            textRepo = A.Fake<TextRepository>(x => x.WithArgumentsForConstructor(new object[] { null, contentUtils }));
            videoRepo = A.Fake<VideoRepository>(x => x.WithArgumentsForConstructor(new object[] { null, contentUtils }));
            repo = new ContentManager(boxRepo, contactFormRepo, googleMapsRepo, lineRepo, linkedImageRepo, regularImageRepo, expandableImageRepo, socialPluginRepo, textRepo, videoRepo);
        }

        [Test]
        public void ContentManager_GetBySite() {
            var siteId = ObjectId.GenerateNewId();
            var id = ObjectId.GenerateNewId();
            A.CallTo(() => boxRepo.GetBySite(siteId)).Returns(new List<Box> { new Box { Id = id } });
            var list = repo.GetBySite(siteId);
            Assert.AreEqual(1, list.Count);
            Assert.AreEqual(id, list[0].Id);
            A.CallTo(() => boxRepo.GetBySite(siteId)).MustHaveHappened();
            A.CallTo(() => contactFormRepo.GetBySite(siteId)).MustHaveHappened();
            A.CallTo(() => googleMapsRepo.GetBySite(siteId)).MustHaveHappened();
            A.CallTo(() => lineRepo.GetBySite(siteId)).MustHaveHappened();
            A.CallTo(() => linkedImageRepo.GetBySite(siteId)).MustHaveHappened();
            A.CallTo(() => regularImageRepo.GetBySite(siteId)).MustHaveHappened();
            A.CallTo(() => expandableImageRepo.GetBySite(siteId)).MustHaveHappened();
            A.CallTo(() => socialPluginRepo.GetBySite(siteId)).MustHaveHappened();
            A.CallTo(() => textRepo.GetBySite(siteId)).MustHaveHappened();
            A.CallTo(() => videoRepo.GetBySite(siteId)).MustHaveHappened();
        }

        [Test]
        public void ContentManager_GetByPage() {
            var pageId = ObjectId.GenerateNewId();
            var id = ObjectId.GenerateNewId();
            A.CallTo(() => boxRepo.GetByPage(pageId)).Returns(new List<Box> { new Box { Id = id } });
            var list = repo.GetByPage(pageId);
            Assert.AreEqual(1, list.Count);
            Assert.AreEqual(id, list[0].Id);
            A.CallTo(() => boxRepo.GetByPage(pageId)).MustHaveHappened();
            A.CallTo(() => contactFormRepo.GetByPage(pageId)).MustHaveHappened();
            A.CallTo(() => googleMapsRepo.GetByPage(pageId)).MustHaveHappened();
            A.CallTo(() => lineRepo.GetByPage(pageId)).MustHaveHappened();
            A.CallTo(() => linkedImageRepo.GetByPage(pageId)).MustHaveHappened();
            A.CallTo(() => regularImageRepo.GetByPage(pageId)).MustHaveHappened();
            A.CallTo(() => expandableImageRepo.GetByPage(pageId)).MustHaveHappened();
            A.CallTo(() => socialPluginRepo.GetByPage(pageId)).MustHaveHappened();
            A.CallTo(() => textRepo.GetByPage(pageId)).MustHaveHappened();
            A.CallTo(() => videoRepo.GetByPage(pageId)).MustHaveHappened();
        }

        [Test]
        public void ContentManager_GetImagesBySite() {
            var siteId = ObjectId.GenerateNewId();
            var list = repo.GetImagesBySite(siteId);
            Assert.IsNotNull(list);
            A.CallTo(() => linkedImageRepo.GetBySite(siteId)).MustHaveHappened();
            A.CallTo(() => regularImageRepo.GetBySite(siteId)).MustHaveHappened();
            A.CallTo(() => expandableImageRepo.GetBySite(siteId)).MustHaveHappened();
        }

        [Test]
        public void ContentManager_GetRepository() {
            Assert.AreSame(boxRepo, repo.GetRepository(ContentType.BOX));
            Assert.AreSame(contactFormRepo, repo.GetRepository(ContentType.CONTACT_FORM));
            Assert.AreSame(googleMapsRepo, repo.GetRepository(ContentType.GOOGLE_MAPS));
            Assert.AreSame(lineRepo, repo.GetRepository(ContentType.LINE));
            Assert.AreSame(linkedImageRepo, repo.GetRepository(ContentType.LINKED_IMAGE));
            Assert.AreSame(regularImageRepo, repo.GetRepository(ContentType.IMAGE));
            Assert.AreSame(expandableImageRepo, repo.GetRepository(ContentType.EXPANDABLE_IMAGE));
            Assert.AreSame(socialPluginRepo, repo.GetRepository(ContentType.SOCIAL_PLUGINS));
            Assert.AreSame(textRepo, repo.GetRepository(ContentType.TEXT));
            Assert.AreSame(videoRepo, repo.GetRepository(ContentType.VIDEO));
        }

        [Test]
        public void ContentManager_UpdateContentsZIndex() {
            var indexer = new ContentIndex { Id = ObjectId.GenerateNewId(), Type = ContentType.BOX, ZIndex = 1 };
            repo.UpdateContentsZIndex(new List<ContentIndex> { indexer });
            A.CallTo(() => boxRepo.UpdateZIndex(indexer.Id, indexer.ZIndex)).MustHaveHappened();
        }

        [Test]
        public void ContentManager_DeleteContent() {
            var box = new Box { Type = ContentType.BOX };
            repo.DeleteContent(box);
            A.CallTo(() => boxRepo.Delete(box)).MustHaveHappened();
        }

        [Test]
        public void ContentManager_UpdatePositionY() {
            var siteId = ObjectId.GenerateNewId();
            var id = ObjectId.GenerateNewId();
            var box = new Box { Id = id, Position = new Position { Y = 0 }, Type = ContentType.BOX };
            A.CallTo(() => boxRepo.GetBySite(siteId)).Returns(new List<Box> { box });
            repo.UpdatePositionY(siteId, 3);
            A.CallTo(() => boxRepo.UpdatePosition(A<ContentBase>.That.Matches(x => x.Position.Y == 3))).MustHaveHappened();
            Assert.AreEqual(3, box.Position.Y);
        }
    }
}