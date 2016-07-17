using NUnit.Framework;
using System;
using Webjato.Entities.Enums;

namespace Webjato.Tests.Entities.Enums {
    [TestFixture]
    public class EnumExtensionTest {
        [Test]
        public void EnumExtension_GetByDescription() {
            var myEnum = EnumExtensions.GetByDescription<MAIL_SENDER>("webjato@webjato.com.br");
            Assert.AreEqual(MAIL_SENDER.DEFAULT, myEnum);
        }

        [Test]
        [ExpectedException(typeof(ArgumentException), ExpectedMessage = "Could not fetch an value for enum 'MAIL_SENDER' based on descripiton 'test@webjato.com.br'.")]
        public void EnumExtension_GetByDescription_NoDescription() {
            var myEnum = EnumExtensions.GetByDescription<MAIL_SENDER>("test@webjato.com.br");
        }

        [Test]
        [ExpectedException(typeof(ArgumentException), ExpectedMessage = "Only Enum types are accepted.")]
        public void EnumExtension_GetByDescription_Error() {
            var myEnum = EnumExtensions.GetByDescription<string>("");
        }

        [Test]
        public void EnumExtension_GetDescription() {
            var description = MAIL_SENDER.DEFAULT.GetDescription();
            Assert.AreEqual("webjato@webjato.com.br", description);
        }

        [Test]
        public void EnumExtension_GetDescription_NoDescriptionFound() {
            var enumWithoutDescription = FEATURE.HELP;
            var description = enumWithoutDescription.GetDescription();
            Assert.AreEqual("HELP", description);
        }
    }
}