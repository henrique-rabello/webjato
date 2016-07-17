using MongoDB.Bson;
using NUnit.Framework;
using System;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;

namespace Webjato.Tests.Entities.Site {
    
    [TestFixture]
    public class LogoTest {
        [Test]
        public void LogoTest_Created() {
            var logo = new Logo { Id = ObjectId.GenerateNewId() };
            var timespan = DateTime.UtcNow.Subtract(logo.Created);
            Assert.LessOrEqual(timespan.TotalSeconds, 2);
        }

        [Test]
        public void LogoTest_Type() {
            var logo1 = new Logo { ImageKey = "key" };
            Assert.AreEqual(LogoType.IMAGE, logo1.LogoType);
            var logo2 = new Logo { Text = "text" };
            Assert.AreEqual(LogoType.TEXT, logo2.LogoType);
            var logo3 = new Logo { Id = ObjectId.GenerateNewId() };
            Assert.AreEqual(LogoType.NOT_SET, logo3.LogoType);
        }
    }
}