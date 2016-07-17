using MongoDB.Bson;
using NUnit.Framework;
using System;
using Webjato.Entities.Content;

namespace Webjato.Tests.Entities.ContentTest {
    [TestFixture]
    public class BoxTest {
        [Test]
        public void BackgroundTest_Created() {
            var box = new Box { Id = ObjectId.GenerateNewId() };
            var timespan = DateTime.UtcNow.Subtract(box.Created);
            Assert.LessOrEqual(timespan.TotalSeconds, 2);
        }
    }
}