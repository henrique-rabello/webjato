using MongoDB.Bson;
using Ninject;
using System.Drawing;
using System.Net;
using System.Web.Http;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;
using Webjato.Repositories.SiteRepos;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class FrameController : ApiController {
        [Authorize]
        [HttpGet]
        public Frame Get() {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<FrameRepository>().Get(new Utilities().GetUserData(User.Identity.Name).SiteId);
            }
        }

        [Authorize]
        [HttpGet]
        public Frame Get(string siteId) {
            if (!new Utilities().GetUserData(User.Identity.Name).IsAdmin) {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<FrameRepository>().Get(new ObjectId(siteId));
            }
        }

        [Authorize]
        [HttpPost]
        public Frame Margin(uint margin) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<FrameRepository>().Update(new Utilities().GetUserData(User.Identity.Name).SiteId, (int)margin);
            }
        }

        [Authorize]
        [HttpPost]
        public Frame Color(string color) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<FrameRepository>().Update(new Utilities().GetUserData(User.Identity.Name).SiteId, ColorTranslator.FromHtml(color));
            }
        }

        [Authorize]
        [HttpPost]
        public Frame Transparency(bool isTransparent) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<FrameRepository>().Update(new Utilities().GetUserData(User.Identity.Name).SiteId, isTransparent);
            }
        }

        [Authorize]
        [HttpPost]
        public Frame Border(string type, string color, uint width) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var util = new Utilities();
                return kernel.Get<FrameRepository>().Update(util.GetUserData(User.Identity.Name).SiteId, util.GetEnum<FrameBorderType>(type), ColorTranslator.FromHtml(color), (int)width);
            }
        }
    }
}