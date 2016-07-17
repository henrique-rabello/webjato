using MongoDB.Bson;
using NUnit.Framework;
using System;
using Webjato.Entities;

namespace Webjato.Tests.Entities {
    [TestFixture]
    public class UserTest {
        [Test]
        public void UserTest_Created() {
            var user = new User { Id = ObjectId.GenerateNewId() };
            var timespan = DateTime.UtcNow.Subtract(user.Created);
            Assert.LessOrEqual(timespan.TotalSeconds, 2);
        }
    }
}
