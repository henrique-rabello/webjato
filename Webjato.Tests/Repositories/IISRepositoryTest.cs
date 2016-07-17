using NUnit.Framework;
using Webjato.Entities;
using Webjato.Repositories;
using Microsoft.Web.Administration.Fakes;

namespace Webjato.Tests.Repositories {
    [TestFixture]
	public class IISRepositoryTest
    {
        IISRepository iis;
        AuxiliaryConstants consts;

        [SetUp]
        public void BeforeEach() {
            consts = new AuxiliaryConstants {
                PathClientSites = @"C:\GD\WK\WJ\ClientSites",
                DefaultApplicationPool = "DefaultApplicationPool"
            };
            iis = new IISRepository(consts);
        }

		[Test]
        [Ignore]
		public void IISRepository_AddSite() {
            iis.AddSite("MyBrandNewWebSite", "www.henrique_04.webjato.com.br", @"C:\GD\WK\WJ\ClientSites\Henrique");
        }

        [Test]
        [Ignore]
        public void IISRepository_RemoveSite() {
            iis.RemoveSite("56a2e74de210f6393433f7fd");
        }
    }
}