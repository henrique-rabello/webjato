using FakeItEasy;
using MongoDB.Bson;
using MongoDB.Driver;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Webjato.Entities.Content;
using Webjato.Repositories;
using Webjato.Repositories.ContentRepos;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;
using MongoDB.Driver.Linq;
using Webjato.Entities.Enums;
using Webjato.Entities;

namespace Webjato.Tests.Repositories.ContentReposTest {
    [TestFixture]
    public class LineRepositoryTest {
        private MongoCollection<Line> collection;
        private ContentUtilities contentUtils;
        private LineRepository repo;

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<Line>();
            collection.RemoveAll();
            contentUtils = A.Fake<ContentUtilities>();
            A.CallTo(() => contentUtils.GetContentType<Line>()).Returns(ContentType.LINE);
            repo = new LineRepository(collection, contentUtils);
        }

        [Test]
        public void LineRepository_Create() {
            repo.Create(ObjectId.GenerateNewId(), ObjectId.GenerateNewId(), false, 5);
            var line = collection.AsQueryable().Single();
            Assert.AreEqual("#0000FF", line.Color);
            Assert.IsFalse(line.IsHorizontal);
            Assert.AreEqual(1, line.Width);
            Assert.AreEqual(LineStyle.SOLID, line.LineStyle);
            Assert.AreEqual(350, line.Size);
            Assert.AreEqual(20, line.Position.X);
            Assert.AreEqual(270, line.Position.Y);
            Assert.AreEqual(5, line.Position.ZIndex);
            Assert.IsNull(line.Updated);
        }

        [Test]
        public void LineRepository_Update() {
            //Creates the line
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            var line1 = new Line {
                Id = ObjectId.GenerateNewId(),
                SiteId = siteId,
                PageId = pageId,
                Color = "#0000FF",
                IsHorizontal = true,
                Width = 1,
                LineStyle = LineStyle.SOLID,
                Size = 350,
                Type = ContentType.LINE
            };
            //Store it in the collection
            collection.Save(line1);
            //Modifies it
            line1.SiteId = ObjectId.GenerateNewId();
            line1.Color = "#FFFFFF";
            line1.IsHorizontal = false;
            line1.Width = 10;
            line1.LineStyle = LineStyle.DOTTED;
            line1.Size = 500;
            line1.Type = ContentType.CONTACT_FORM;
            //Requests update
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).DoesNothing();
            A.CallTo(() => contentUtils.NormalizePosition(A<Position>.Ignored)).Returns(null);
            repo.Update(line1);
            var line2 = collection.AsQueryable().Single();
            Assert.AreEqual(siteId, line2.SiteId);
            Assert.AreEqual(pageId, line2.PageId);
            Assert.AreEqual("#FFFFFF", line2.Color);
            Assert.IsFalse(line2.IsHorizontal);
            Assert.AreEqual(10, line2.Width);
            Assert.AreEqual(LineStyle.DOTTED, line2.LineStyle);
            Assert.AreEqual(500, line2.Size);
            Assert.AreEqual(ContentType.LINE, line2.Type);
            Assert.IsNotNull(line2.Updated);
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).MustHaveHappened();
            A.CallTo(() => contentUtils.NormalizePosition(null)).MustHaveHappened();
        }

        [Test]
        public void LineRepository_Duplicate() {
            var original = new Line {
                Id = ObjectId.GenerateNewId(),
                Position = new Position {
                    X = 1,
                    Y = 2
                },
                Color = "Color",
                IsHorizontal = true,
                Width = 5,
                LineStyle = LineStyle.SOLID,
                Size = 8
            };
            collection.Save(original);
            var targetPageId = ObjectId.GenerateNewId();
            var targetSite = ObjectId.GenerateNewId();
            repo.Duplicate(original, targetSite, targetPageId, 5);
            var duplicated = collection.AsQueryable().Last();
            Assert.AreEqual(targetSite, duplicated.SiteId);
            Assert.AreEqual(targetPageId, duplicated.PageId);
            Assert.AreEqual(duplicated.Color, original.Color);
            Assert.IsTrue(duplicated.IsHorizontal);
            Assert.AreEqual(duplicated.Width, original.Width);
            Assert.AreEqual(duplicated.LineStyle, original.LineStyle);
            Assert.AreEqual(duplicated.Size, original.Size);
            Assert.AreEqual(5, duplicated.Position.ZIndex);
        }
    }
}