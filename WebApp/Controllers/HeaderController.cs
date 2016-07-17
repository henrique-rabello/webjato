using MongoDB.Bson;
using Ninject;
using System.Drawing;
using System.IO;
using System.Net;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using Webjato.Entities;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class HeaderController : ApiController {
        [Authorize]
        [HttpGet]
        public Header Get() {
            using (var kernel = new StandardKernel(new NinjectBindings("Header"))) {
                return kernel.Get<BackgroundRepository<Header>>().Get(new Utilities().GetUserData(User.Identity.Name).SiteId);
            }
        }

        [Authorize]
        [HttpGet]
        public Header Get(string siteId) {
            if (!new Utilities().GetUserData(User.Identity.Name).IsAdmin) {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            using (var kernel = new StandardKernel(new NinjectBindings("Header"))) {
                return kernel.Get<BackgroundRepository<Header>>().Get(new ObjectId(siteId));
            }
        }

        [Authorize]
        [HttpPost]
        public Header Color(string color) {
            using (var kernel = new StandardKernel(new NinjectBindings("Header"))) {
                return kernel.Get<BackgroundRepository<Header>>().Update(new Utilities().GetUserData(User.Identity.Name).SiteId, ColorTranslator.FromHtml(color));
            }
        }

        [Authorize]
        [HttpPost]
        public Header Effect(string imageKey, string imageName, string color, string halign, string valign, bool hrepeat, bool vrepeat, int height) {
            using (var kernel = new StandardKernel(new NinjectBindings("Header"))) {
                var util = new Utilities();
                var udata = util.GetUserData(User.Identity.Name);
                var filepath = HostingEnvironment.MapPath("~/images/header/" + imageKey);
                var repo = kernel.Get<BackgroundRepository<Header>>();
                repo.Update(udata.SiteId, BACKGROUND_TYPE.EFFECT, filepath, imageName);
                return repo.Update(udata.SiteId, ColorTranslator.FromHtml(color), hrepeat, vrepeat, util.GetEnum<HALIGNMENT>(halign), util.GetEnum<VALIGNMENT>(valign), height);
            }
        }

        [Authorize]
        [HttpPost]
        public Header FromTmpImage(TemporaryImage tmpImg) {
            using (var kernel = new StandardKernel(new NinjectBindings("Header"))) {
                return kernel.Get<BackgroundRepository<Header>>().UpdateFromTemporaryImage(tmpImg);
            }
        }

        [Authorize]
        [HttpPost]
        public Header Transparency(bool isTransparent) {
            using (var kernel = new StandardKernel(new NinjectBindings("Header"))) {
                return kernel.Get<BackgroundRepository<Header>>().Update(new Utilities().GetUserData(User.Identity.Name).SiteId, isTransparent);
            }
        }

        [Authorize]
        [HttpPost]
        public Header Height(uint height) {
            using (var kernel = new StandardKernel(new NinjectBindings("Header"))) {
                return kernel.Get<BackgroundRepository<Header>>().Update(new Utilities().GetUserData(User.Identity.Name).SiteId, (int)height);
            }
        }

        [Authorize]
        [HttpPost]
        public Header DeleteImage() {
            using (var kernel = new StandardKernel(new NinjectBindings("Header"))) {
                return kernel.Get<BackgroundRepository<Header>>().ClearImage(new Utilities().GetUserData(User.Identity.Name).SiteId);
            }
        }
    }
}