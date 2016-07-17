using MongoDB.Bson;
using NUnit.Framework;
using System;
using Webjato.Entities;

namespace Webjato.Tests.Entities {
    [TestFixture]
    public class TemporaryImageTest {
        [Test]
        public void TemporaryImage_Created() {
            var tmpImage = new TemporaryImage { Id = ObjectId.GenerateNewId() };
            var timespan = DateTime.UtcNow.Subtract(tmpImage.Created);
            Assert.LessOrEqual(timespan.TotalSeconds, 2);
        }
    }
}