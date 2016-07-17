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
    public class ContactFormRepositoryTest {
        private MongoCollection<ContactForm> collection;
        private ContentUtilities contentUtils;
        private ContactFormRepository repo;

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<ContactForm>();
            collection.RemoveAll();
            contentUtils = A.Fake<ContentUtilities>();
            A.CallTo(() => contentUtils.GetContentType<ContactForm>()).Returns(ContentType.CONTACT_FORM);
            repo = new ContactFormRepository(collection, contentUtils);
        }

        [Test]
        public void ContactFormRepository_Create() {
            repo.Create(ObjectId.GenerateNewId(), ObjectId.GenerateNewId(), 5);
            var cf = collection.AsQueryable().Single();
            Assert.IsEmpty(cf.MailTo);
            Assert.AreEqual("#000000", cf.TextColor);
            Assert.AreEqual("#FFFFFF", cf.BackgroundColor);
            Assert.AreEqual("#859AB5", cf.BorderColor);
            Assert.AreEqual("#000000", cf.TextToWriteColor);
            Assert.AreEqual(200, cf.Position.X);
            Assert.AreEqual(200, cf.Position.Y);
            Assert.AreEqual(5, cf.Position.ZIndex);
            Assert.IsNull(cf.Updated);
        }

        [Test]
        public void ContactFormRepository_Update() {
            //Creates the contact form
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            var cf1 = new ContactForm {
                Id = ObjectId.GenerateNewId(),
                SiteId = siteId,
                PageId = pageId,
                MailTo = "email@email.com",
                TextColor = "#000000",
                BackgroundColor = "#FFFFFF",
                BorderColor = "#FFFF00",
                TextToWriteColor = "#000000",
                Type = ContentType.CONTACT_FORM
            };
            //Store it in the collection
            collection.Save(cf1);
            //Modifies it
            cf1.SiteId = ObjectId.GenerateNewId();
            cf1.MailTo = "newmail@mail.com";
            cf1.TextColor = "#000001";
            cf1.BackgroundColor = "#000002";
            cf1.BorderColor = "#000003";
            cf1.TextToWriteColor = "#000004";
            cf1.Type = ContentType.BOX;
            //Requests update
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).DoesNothing();
            A.CallTo(() => contentUtils.NormalizePosition(A<Position>.Ignored)).Returns(null);
            repo.Update(cf1);
            var cf2 = collection.AsQueryable().Single();
            Assert.AreEqual(siteId, cf2.SiteId);
            Assert.AreEqual(pageId, cf2.PageId);
            Assert.AreEqual("newmail@mail.com", cf2.MailTo);
            Assert.AreEqual("#000001", cf2.TextColor);
            Assert.AreEqual("#000002", cf2.BackgroundColor);
            Assert.AreEqual("#000003", cf2.BorderColor);
            Assert.AreEqual("#000004", cf2.TextToWriteColor);
            Assert.AreEqual(ContentType.CONTACT_FORM, cf2.Type);
            Assert.IsNotNull(cf2.Updated);
            A.CallTo(() => contentUtils.AuthenticateContent(A<ContentBase>.Ignored, A<ContentBase>.Ignored)).MustHaveHappened();
            A.CallTo(() => contentUtils.NormalizePosition(null)).MustHaveHappened();
        }

        [Test]
        public void ContactFormRepository_Duplicate() {
            var original = new ContactForm {
                MailTo = "MailTo",
                TextColor = "TextColor",
                BackgroundColor = "BackgroundColor",
                BorderColor = "BorderColor",
                TextToWriteColor = "TextToWriteColor",
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
            Assert.AreEqual(original.MailTo, duplicated.MailTo);
            Assert.AreEqual(original.TextColor, duplicated.TextColor);
            Assert.AreEqual(original.BackgroundColor, duplicated.BackgroundColor);
            Assert.AreEqual(original.BorderColor, duplicated.BorderColor);
            Assert.AreEqual(original.TextToWriteColor, duplicated.TextToWriteColor);
            Assert.AreEqual(5, duplicated.Position.ZIndex);
        }
    }
}