using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using NUnit.Framework;
using System;
using System.Linq;
using Webjato.Entities;
using Webjato.Entities.Enums;
using Webjato.Repositories;

namespace Webjato.Tests.Repositories {
    [TestFixture]
    public class UserRepositoryTest {
        private MongoCollection<User> collection;
        private UserRepository repo;

        [SetUp]
        public void BeforeEach() {
            collection = TestUtilities.GetCollection<User>();
            repo = new UserRepository(collection);
        }

        [TearDown]
        public void AfterEach() {
            collection.RemoveAll();
        }

        [Test]
        [ExpectedException(typeof(Exception), ExpectedMessage = "WJ => E-mail 'email' is already in use.")]
        public void UserRepository_CreateUser1_Ex() {
            collection.Insert(new User { Email = "email" });
            repo.CreateUser("email", null, null, USER_ORIGIN.WEBSITE, null, null, Roles.Regular);
        }

        [Test]
        public void UserRepository_CreateUser1() {
            repo.CreateUser("email", "pwd", "fullname", USER_ORIGIN.WEBSITE, "remoteId", "town", Roles.Regular);
            var user = collection.AsQueryable().Single(x => x.Email == "email");
            Assert.IsTrue(user.Email.Equals("email", StringComparison.InvariantCulture));
            Assert.AreEqual("pwd", user.Password);
            Assert.IsFalse(user.Password.Equals("Pwd", StringComparison.InvariantCulture));
            Assert.AreEqual("fullname", user.FullName);
            Assert.AreEqual(USER_ORIGIN.WEBSITE, user.Origin);
            Assert.AreEqual("remoteId", user.RemoteId);
            Assert.AreEqual("town", user.Town);
            Assert.AreEqual(Roles.Regular, user.Role);
            Assert.IsNull(user.Updated);
        }

        [Test]
        public void UserRepository_CreateUser3() {
            repo.CreateUser("email", "pwd", "fullname", Roles.TemplateCreator);
            var user = collection.AsQueryable().Single(x => x.Email == "email");
            Assert.AreEqual("email", user.Email);
            Assert.AreEqual("pwd", user.Password);
            Assert.AreEqual("fullname", user.FullName);
            Assert.AreEqual(USER_ORIGIN.WEBSITE, user.Origin);
            Assert.IsNull(user.RemoteId);
            Assert.IsNull(user.Town);
            Assert.AreEqual(Roles.TemplateCreator, user.Role);
        }

        [Test]
        public void UserRepository_CreateUser4() {
            repo.CreateUser("email", "fullname", USER_ORIGIN.FACEBOOK, "fbId", "town");
            var user = collection.AsQueryable().Single(x => x.Email == "email");
            Assert.AreEqual("email", user.Email);
            Assert.IsNull(user.Password);
            Assert.AreEqual("fullname", user.FullName);
            Assert.AreEqual(USER_ORIGIN.FACEBOOK , user.Origin);
            Assert.AreEqual("fbId", user.RemoteId);
            Assert.AreEqual("town", user.Town);
            Assert.AreEqual(Roles.Regular, user.Role);
        }

        [Test]
        public void UserRepository_Exists1() {
            Assert.IsFalse(repo.Exists("email"));
            collection.Insert(new User { Email = "email" });
            Assert.IsTrue(repo.Exists("email"));
            Assert.IsTrue(repo.Exists("EMAIL"));
        }

        [Test]
        public void UserRepository_Exists2() {
            Assert.IsFalse(repo.Exists("email", "pwd"));
            collection.Insert(new User { Email = "email", Password = "pwd" });
            Assert.IsFalse(repo.Exists("email", "PWD"));
            Assert.IsTrue(repo.Exists("EMAIL", "pwd"));
            Assert.IsTrue(repo.Exists("email", "pwd"));
        }

        [Test]
        public void UserRepository_Exists3() {
            Assert.IsFalse(repo.Exists("email", "remoteId", USER_ORIGIN.FACEBOOK));
            collection.Insert(new User { Email = "email", RemoteId = "remoteId", Origin = USER_ORIGIN.FACEBOOK });
            Assert.IsTrue(repo.Exists("email", "remoteId", USER_ORIGIN.FACEBOOK));
        }

        [Test]
        [ExpectedException(typeof(Exception), ExpectedMessage = "WJ => Could not find User for the email 'Email'.")]
        public void UserRepository_GetByEmail_Ex() {
            repo.Get("Email");
        }

        [Test]
        public void UserRepository_GetByEmail() {
            collection.Insert(new User { Email = "email", Password = "Pwd" });
            var user = repo.Get("email");
            Assert.AreEqual("email", user.Email);
            Assert.AreEqual("Pwd", user.Password);
        }

        [Test]
        public void UserRepository_GetById() {
            var id = ObjectId.GenerateNewId();
            collection.Save(new User { Id = id });
            var user = repo.Get(id);
            Assert.AreEqual(id, user.Id);
        }
    }
}