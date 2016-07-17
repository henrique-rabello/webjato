using MongoDB.Bson;
using NUnit.Framework;
using System;
using Webjato.Entities;

namespace Webjato.Tests.Entities {
    [TestFixture]
    public class PageTest {
        [Test]
        public void PageTest_Created() {
            var page = new Page { Id = ObjectId.GenerateNewId() };
            var timespan = DateTime.UtcNow.Subtract(page.Created);
            Assert.LessOrEqual(timespan.TotalSeconds, 2);
        }
    }
}
