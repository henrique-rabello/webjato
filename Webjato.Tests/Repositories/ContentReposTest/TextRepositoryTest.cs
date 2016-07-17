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
using CText = Webjato.Entities.Content.Text;

namespace Webjato.Tests.Repositories.ContentReposTest {
    [TestFixture]
    public class TextRepositoryTest {
        private MongoCollection<CText> collection;
        private ContentUtilities contentUtils;
        private TextRepository repo;

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<CText>();
            collection.RemoveAll();
            contentUtils = A.Fake<ContentUtilities>();
            A.CallTo(() => contentUtils.GetContentType<Webjato.Entities.Content.Text>()).Returns(ContentType.TEXT);
            repo = new TextRepository(collection, contentUtils);
        }

        [Test]
        public void TextRepository_Create() {
            repo.Create(ObjectId.GenerateNewId(), ObjectId.GenerateNewId(), 5);
            var text = collection.AsQueryable().Single();
            Assert.AreEqual(20, text.Position.X);
            Assert.AreEqual(270, text.Position.Y);
            Assert.AreEqual(5, text.Position.ZIndex);
            Assert.IsEmpty(text.Value);
            Assert.AreEqual(400, text.Size.Width);
            Assert.AreEqual(100, text.Size.Height);
            Assert.IsNull(text.Updated);
        }

        [Test]
        public void TextRepository_Update() {
            //Creates the text
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            var txt1 = new CText {
                Id = ObjectId.GenerateNewId(),
                SiteId = siteId,
                PageId = pageId,
                Value = "OldValue",
                Size = new Size {
                    Width = 400,
                    Height = 50
                },
                Type = ContentType.TEXT
            };
            //Store it in the collection
            collection.Save(txt1);
            //Modifies it
            txt1.SiteId = ObjectId.GenerateNewId();
            txt1.Size.Width = 500;
            txt1.Size.Height = 100;
            txt1.Value = "NewValue";
            txt1.Type = ContentType.CONTACT_FORM;
            //Requests update
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).DoesNothing();
            A.CallTo(() => contentUtils.NormalizePosition(A<Position>.Ignored)).Returns(null);
            repo.Update(txt1);
            var txt2 = collection.AsQueryable().Single();
            Assert.AreEqual(siteId, txt2.SiteId);
            Assert.AreEqual(pageId, txt2.PageId);
            Assert.AreEqual("NewValue", txt2.Value);
            Assert.AreEqual(500, txt2.Size.Width);
            Assert.AreEqual(100, txt2.Size.Height);
            Assert.AreEqual(ContentType.TEXT, txt2.Type);
            Assert.IsNotNull(txt2.Updated);
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).MustHaveHappened();
            A.CallTo(() => contentUtils.NormalizePosition(null)).MustHaveHappened();
        }

        [Test]
        public void TextRepository_Duplicate() {
            var original = new CText {
                Id = ObjectId.GenerateNewId(),
                Position = new Position {
                    X = 1,
                    Y = 2
                },
                Value = "Value",
                Size = new Size {
                    Width = 320,
                    Height = 240
                }
            };
            collection.Save(original);
            var targetPageId = ObjectId.GenerateNewId();
            var targetSite = ObjectId.GenerateNewId();
            repo.Duplicate(original, targetSite, targetPageId, 5);
            var duplicated = collection.AsQueryable().Last();
            Assert.AreEqual(targetSite, duplicated.SiteId);
            Assert.AreEqual(targetPageId, duplicated.PageId);
            Assert.AreEqual(duplicated.Value, original.Value);
            Assert.AreEqual(5, duplicated.Position.ZIndex);
            NUnitExtension.CompareObjects(duplicated.Size, original.Size);
        }
    }
}