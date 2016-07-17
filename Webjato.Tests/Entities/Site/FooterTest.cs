using MongoDB.Bson;
using NUnit.Framework;
using System;
using Webjato.Entities.Site;

namespace Webjato.Tests.Entities.Site {
    [TestFixture]
    public class FooterTest {
        [Test]
        public void FooterTest_Created() {
            var footer = new Footer { Id = ObjectId.GenerateNewId() };
            var timespan = DateTime.UtcNow.Subtract(footer.Created);
            Assert.LessOrEqual(timespan.TotalSeconds, 2);
        }
    }
}