using MongoDB.Bson;
using NUnit.Framework;
using System;
using Webjato.Entities.Site;

namespace Webjato.Tests.Entities.Site {
    [TestFixture]
    public class FrameTest {
        [Test]
        public void FrameTest_Created() {
            var frame = new Frame { Id = ObjectId.GenerateNewId() };
            var timespan = DateTime.UtcNow.Subtract(frame.Created);
            Assert.LessOrEqual(timespan.TotalSeconds, 2);
        }
    }
}