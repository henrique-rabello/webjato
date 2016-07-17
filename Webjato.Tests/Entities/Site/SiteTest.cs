using MongoDB.Bson;
using NUnit.Framework;
using System;

namespace Webjato.Tests.Entities.Site {
    [TestFixture]
    public class SiteTest {
        [Test]
        public void SiteTest_Created() {
            var site = new Webjato.Entities.Site.Site { Id = ObjectId.GenerateNewId() };
            var timespan = DateTime.UtcNow.Subtract(site.Created);
            Assert.LessOrEqual(timespan.TotalSeconds, 2);
        }
    }
}