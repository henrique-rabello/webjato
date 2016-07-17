using MongoDB.Bson;
using NUnit.Framework;
using Webjato.Repositories;
using Webjato.Utilities;

namespace Webjato.Tests.Utilities {
    [TestFixture]
    public class GeneralTest {
        [Test]
        public void Util_GeneratePassword() {
            var pwd = new General().GeneratePassword();
            Assert.AreEqual(8, pwd.Length);
        }

        [Test]
        public void Util_NormalizeString() {
            var norm = new General().NormalizeString("Introdução à matéria");
            Assert.AreEqual("introducao-a-materia", norm);
        }

        [Test]
        public void Util_GetS3FolderForSite() {
            var id = ObjectId.GenerateNewId();
            var folder = new General().GetS3FolderForSite(id);
            Assert.AreEqual("sites/" + id.ToString() + "/", folder);
        }

        [Test]
        public void Util_GenerateRandomFileName() {
            var filename = new General().GenerateRandomFileName(".TXT");
            StringAssert.EndsWith(".txt", filename);
        }
    }
}