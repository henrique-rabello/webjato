using FakeItEasy;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using NUnit.Framework;
using System.Linq;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;
using Webjato.Repositories;
using Webjato.Repositories.ContentRepos;
using Webjato.Utilities;

namespace Webjato.Tests.Repositories.ContentReposTest {
    [TestFixture]
    public class VideoRepositoryTest {
        private MongoCollection<Video> collection;
        private ContentUtilities contentUtils;
        private VideoRepository repo;

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<Video>();
            collection.RemoveAll();
            contentUtils = A.Fake<ContentUtilities>();
            A.CallTo(() => contentUtils.GetContentType<Video>()).Returns(ContentType.VIDEO);
            repo = new VideoRepository(collection, contentUtils);
        }

        [Test]
        public void VideoRepository_Create() {
            repo.Create(ObjectId.GenerateNewId(), ObjectId.GenerateNewId(), VideoType.YouTube, 5);
            var video = collection.AsQueryable().Single();
            Assert.IsEmpty(video.VideoId);
            Assert.AreEqual(VideoType.YouTube, video.VideoType);
            Assert.AreEqual(450, video.Size.Width);
            Assert.AreEqual(315, video.Size.Height);
            Assert.AreEqual(200, video.Position.X);
            Assert.AreEqual(200, video.Position.Y);
            Assert.AreEqual(5, video.Position.ZIndex);
            Assert.IsNull(video.Updated);
        }

        [Test]
        public void VideoRepository_Update() {
            //Creates the video
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            var video1 = new Video {
                Id = ObjectId.GenerateNewId(),
                SiteId = siteId,
                PageId = pageId,
                VideoType = VideoType.YouTube,
                VideoId = "YouTube01",
                Size = new Size { Width = 320, Height = 240 },
                Type = ContentType.VIDEO
            };
            //Store it in the collection
            collection.Save(video1);
            //Modifies it
            video1.SiteId = ObjectId.GenerateNewId();
            video1.VideoId = "Vimeo01";
            video1.Size = new Size { Width = 640, Height = 480 };
            video1.VideoType = VideoType.Vimeo;
            video1.Type = ContentType.BOX;
            //Requests update
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).DoesNothing();
            A.CallTo(() => contentUtils.NormalizePosition(A<Position>.Ignored)).Returns(null);
            repo.Update(video1);
            var video2 = collection.AsQueryable().Single();
            Assert.AreEqual(siteId, video2.SiteId);
            Assert.AreEqual(pageId, video2.PageId);
            Assert.AreEqual("Vimeo01", video2.VideoId);
            Assert.AreEqual(640, video2.Size.Width);
            Assert.AreEqual(480, video2.Size.Height);
            Assert.AreEqual(VideoType.Vimeo, video2.VideoType);
            Assert.AreEqual(ContentType.VIDEO, video2.Type);
            Assert.IsNotNull(video2.Updated);
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).MustHaveHappened();
            A.CallTo(() => contentUtils.NormalizePosition(null)).MustHaveHappened();
        }

        [Test]
        public void VideoRepository_NormalizeVideoSize() {
            var s1 = repo.NormalizeVideoSize(230);
            Assert.AreEqual(230, s1.Width);
            Assert.AreEqual(161, s1.Height);
            var s2 = repo.NormalizeVideoSize(480);
            Assert.AreEqual(480, s2.Width);
            Assert.AreEqual(360, s2.Height);
            var s3 = repo.NormalizeVideoSize(640);
            Assert.AreEqual(640, s3.Width);
            Assert.AreEqual(480, s3.Height);
            var s4 = repo.NormalizeVideoSize(0);
            Assert.AreEqual(450, s4.Width);
            Assert.AreEqual(315, s4.Height);
        }

        [Test]
        public void VideoRepository_Duplicate() {
            var original = new Video {
                Id = ObjectId.GenerateNewId(),
                Position = new Position { X = 1, Y = 2 },
                VideoId = "VideoId",
                VideoType = VideoType.Vimeo
            };
            collection.Save(original);
            var targetPageId = ObjectId.GenerateNewId();
            var targetSite = ObjectId.GenerateNewId();
            repo.Duplicate(original, targetSite, targetPageId, 5);
            var duplicated = collection.AsQueryable().Last();
            Assert.AreEqual(targetSite, duplicated.SiteId);
            Assert.AreEqual(targetPageId, duplicated.PageId);
            Assert.AreEqual(duplicated.VideoType, original.VideoType);
            Assert.AreEqual(duplicated.VideoId, original.VideoId);
            Assert.AreEqual(duplicated.Size, original.Size);
            Assert.AreEqual(5, duplicated.Position.ZIndex);
        }
    }
}