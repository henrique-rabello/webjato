using Amazon;
using Amazon.S3;
using MongoDB.Bson;
using Ninject;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using Webjato.Entities;
using Webjato.Entities.Site;
using Webjato.Repositories.SiteRepos;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class LogoController : ApiController {
        [Authorize]
        [HttpGet]
        public Logo Get() {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<LogoRepository>().Get(new Utilities().GetUserData(User.Identity.Name).SiteId);
            }
        }

        [Authorize]
        [HttpGet]
        public Logo Get(string siteId) {
            if (!new Utilities().GetUserData(User.Identity.Name).IsAdmin) {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<LogoRepository>().Get(new ObjectId(siteId));
            }
        }

        [Authorize]
        [HttpPost]
        public Logo Position(int x, int y) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<LogoRepository>().UpdatePosition(new Utilities().GetUserData(User.Identity.Name).SiteId, x, y);
            }
        }

        [Authorize]
        [HttpPost]
        public Logo DeleteImage() {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var siteId = new Utilities().GetUserData(User.Identity.Name).SiteId;
                return kernel.Get<LogoRepository>().ClearImage(siteId, siteId);
            }
        }

        [Authorize]
        [HttpPost]
        public async Task<Logo> Text() {
            string text = await Request.Content.ReadAsStringAsync();
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<LogoRepository>().UpdateText(new Utilities().GetUserData(User.Identity.Name).SiteId, text);
            }
        }

        [Authorize]
        [HttpPost]
        public Logo Scale(uint scale) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var siteId = new Utilities().GetUserData(User.Identity.Name).SiteId;
                return kernel.Get<LogoRepository>().UpdateScale(siteId, siteId, (int)scale);
            }
        }

        [Authorize]
        [HttpPost]
        public Logo FromTmpImage(TemporaryImage tmpImg) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var siteId = new Utilities().GetUserData(User.Identity.Name).SiteId;
                return kernel.Get<LogoRepository>().UpdateFromTemporaryImage(tmpImg, siteId, siteId, false);
            }
        }
    }
}