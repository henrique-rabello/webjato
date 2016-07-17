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
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;
using Webjato.Tests;

namespace Webjato.Tests.Repositories.ContentReposTest {
    [TestFixture]
    public class BoxRepositoryTest {
        private MongoCollection<Box> collection;
        private ContentUtilities contentUtils;
        private BoxRepository repo;

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<Box>();
            collection.RemoveAll();
            contentUtils = A.Fake<ContentUtilities>();
            A.CallTo(() => contentUtils.GetContentType<Box>()).Returns(ContentType.BOX);
            repo = new BoxRepository(collection, contentUtils);
        }

        [Test]
        public void BoxRepository_Create() {
            repo.Create(ObjectId.GenerateNewId(), ObjectId.GenerateNewId(), 5);
            var box = collection.AsQueryable().Single();
            Assert.AreEqual(25, box.Position.X);
            Assert.AreEqual(270, box.Position.Y);
            Assert.AreEqual(5, box.Position.ZIndex);
            Assert.AreEqual(300, box.Size.Width);
            Assert.AreEqual(200, box.Size.Height);
            Assert.IsTrue(box.Border.Exists);
            Assert.AreEqual(1, box.Border.Width);
            Assert.AreEqual("#DDDDDD", box.Border.Color);
            Assert.IsNull(box.Updated);
        }

        [Test]
        public void BoxRepository_Update() {
            //Creates the box
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            var box1 = new Box {
                Id = ObjectId.GenerateNewId(),
                SiteId = siteId,
                PageId = pageId,
                Border = new BoxBorder {
                    Exists = true,
                    Width = 10,
                    Color = "#FFFF00"
                },
                Size = new Size {
                    Width = 40,
                    Height = 50
                },
                Color = "#000000",
                Type = ContentType.BOX
            };
            //Store it in the collection
            collection.Save(box1);
            //Modifies it
            box1.SiteId = ObjectId.GenerateNewId();
            box1.Border.Exists = false;
            box1.Border.Width = 11;
            box1.Border.Color = "#FF00FF";
            box1.Size.Width = 44;
            box1.Size.Height = 55;
            box1.Color = "#FFFFFF";
            box1.Type = ContentType.CONTACT_FORM;
            //Requests update
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).DoesNothing();
            A.CallTo(() => contentUtils.NormalizePosition(A<Position>.Ignored)).Returns(null);
            repo.Update(box1);
            var box2 = collection.AsQueryable().Single();
            Assert.AreEqual(siteId, box2.SiteId);
            Assert.AreEqual(pageId, box2.PageId);
            Assert.IsFalse(box2.Border.Exists);
            Assert.AreEqual(11, box2.Border.Width);
            Assert.AreEqual("#FF00FF", box2.Border.Color);
            Assert.AreEqual(44, box2.Size.Width);
            Assert.AreEqual(55, box2.Size.Height);
            Assert.AreEqual("#FFFFFF", box2.Color);
            Assert.AreEqual(ContentType.BOX, box2.Type);
            Assert.IsNotNull(box2.Updated);
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).MustHaveHappened();
            A.CallTo(() => contentUtils.NormalizePosition(null)).MustHaveHappened();
        }

        [Test]
        public void BoxRepository_Duplicate() {
            var original = new Box {
                Border = new BoxBorder {
                    Color = "#FFFFFF",
                    Exists = true,
                    Width = 1
                },
                Color = "#000000",
                Size = new Size {
                    Width = 100,
                    Height = 150
                },
                Position = new Position {
                    X = 0,
                    Y = 0
                }
            };
            collection.Insert(original);
            var targetPageId = ObjectId.GenerateNewId();
            var targetSite = ObjectId.GenerateNewId();
            repo.Duplicate(original, targetSite, targetPageId, 5);
            var duplicated = collection.AsQueryable().Last();
            Assert.AreEqual(targetSite, duplicated.SiteId);
            Assert.AreEqual(targetPageId, duplicated.PageId);
            NUnitExtension.CompareObjects(original.Border, duplicated.Border);
            Assert.AreEqual(original.Color, duplicated.Color);
            Assert.AreEqual(5, duplicated.Position.ZIndex);
            NUnitExtension.CompareObjects(original.Size, duplicated.Size);
        }
    }
}