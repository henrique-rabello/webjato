using MongoDB.Bson;
using Ninject;
using System.Drawing;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using Webjato.Entities.Site;
using Webjato.Repositories.SiteRepos;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class FooterController : ApiController {
        [Authorize]
        [HttpGet]
        public Footer Get() {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<FooterRepository>().Get(new Utilities().GetUserData(User.Identity.Name).SiteId);
            }
        }

        [Authorize]
        [HttpGet]
        public Footer Get(string siteId) {
            if (!new Utilities().GetUserData(User.Identity.Name).IsAdmin) {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<FooterRepository>().Get(new ObjectId(siteId));
            }
        }

        [Authorize]
        [HttpPost]
        public Footer Color(string color) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<FooterRepository>().Update(new Utilities().GetUserData(User.Identity.Name).SiteId, ColorTranslator.FromHtml(color));
            }
        }

        [Authorize]
        [HttpPost]
        public Footer Transparency(bool isTransparent) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<FooterRepository>().Update(new Utilities().GetUserData(User.Identity.Name).SiteId, isTransparent);
            }
        }


        [Authorize]
        [HttpPost]
        public async Task<Footer> Text() {
            string text = await Request.Content.ReadAsStringAsync();
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<FooterRepository>().Update(new Utilities().GetUserData(User.Identity.Name).SiteId, text);
            }
        }
    }
}