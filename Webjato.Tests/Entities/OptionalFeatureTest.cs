using MongoDB.Bson;
using NUnit.Framework;
using System;
using Webjato.Entities;

namespace Webjato.Tests.Entities {
    [TestFixture]
    public class OptionalFeatureTest {
        [Test]
        public void OptionalFeatureTest_Created() {
            var optionalFeature = new OptionalFeature { Id = ObjectId.GenerateNewId() };
            var timespan = DateTime.UtcNow.Subtract(optionalFeature.Created);
            Assert.LessOrEqual(timespan.TotalSeconds, 2);
        }
    }
}