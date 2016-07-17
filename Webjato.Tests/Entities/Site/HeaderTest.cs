using MongoDB.Bson;
using NUnit.Framework;
using System;
using Webjato.Entities.Site;

namespace Webjato.Tests.Entities.Site {
    [TestFixture]
    public class HeaderTest {
        [Test]
        public void HeaderTest_Created() {
            var header = new Header { Id = ObjectId.GenerateNewId() };
            var timespan = DateTime.UtcNow.Subtract(header.Created);
            Assert.LessOrEqual(timespan.TotalSeconds, 2);
        }
    }
}