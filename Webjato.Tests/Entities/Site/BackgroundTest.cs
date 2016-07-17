using MongoDB.Bson;
using NUnit.Framework;
using System;
using Webjato.Entities.Site;

namespace Webjato.Tests.Entities.Site {
    [TestFixture]
    public class BackgroundTest {
        [Test]
        public void BackgroundTest_Created() {
            var bg = new Background { Id = ObjectId.GenerateNewId() };
            var timespan = DateTime.UtcNow.Subtract(bg.Created);
            Assert.LessOrEqual(timespan.TotalSeconds, 2);
        }
    }
}