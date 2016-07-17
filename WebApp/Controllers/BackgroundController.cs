using MongoDB.Bson;
using Ninject;
using System.Drawing;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class BackgroundController : ApiController {
        [Authorize]
        [HttpGet]
        public Background Get() {
            using (var kernel = new StandardKernel(new NinjectBindings("Background"))) {
                return kernel.Get<BackgroundRepository<Background>>().Get(new Utilities().GetUserData(User.Identity.Name).SiteId);
            }
        }

        [Authorize]
        [HttpGet]
        public Background Get(string siteId) {
            if (!new Utilities().GetUserData(User.Identity.Name).IsAdmin) {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            using (var kernel = new StandardKernel(new NinjectBindings("Background"))) {
                return kernel.Get<BackgroundRepository<Background>>().Get(new ObjectId(siteId));
            }
        }

        [Authorize]
        [HttpPost]
        public Background Color(string color) {
            using (var kernel = new StandardKernel(new NinjectBindings("Background"))) {
                return kernel.Get<BackgroundRepository<Background>>().Update(new Utilities().GetUserData(User.Identity.Name).SiteId, ColorTranslator.FromHtml(color));
            }
        }

        [Authorize]
        [HttpPost]
        public Background Effect(string imageKey, string imageName, string color, bool isFixed, string halign, string valign, bool hrepeat, bool vrepeat) {
            var filepath = HostingEnvironment.MapPath("~/images/background/" + imageKey);
            var util = new Utilities();
            var udata = util.GetUserData(User.Identity.Name);
            using (var kernel = new StandardKernel(new NinjectBindings("Background"))) {
                var repo = kernel.Get<BackgroundRepository<Background>>();
                repo.Update(udata.SiteId, BACKGROUND_TYPE.EFFECT, filepath, imageName);
                return repo.Update(udata.SiteId, ColorTranslator.FromHtml(color), isFixed, hrepeat, vrepeat, util.GetEnum<HALIGNMENT>(halign), util.GetEnum<VALIGNMENT>(valign));
            }
        }

        [Authorize]
        [HttpPost]
        public HttpResponseMessage PostImage() {
            var generalUtilities = new General();
            var file = HttpContext.Current.Request.Files[0];
            var tmpFilePath = Path.Combine(Constants.TmpFolder, generalUtilities.GenerateRandomFileName(Path.GetExtension(file.FileName)));
            file.SaveAs(tmpFilePath);
            using (var kernel = new StandardKernel(new NinjectBindings("Background"))) {
                kernel.Get<BackgroundRepository<Background>>().Update(new Utilities().GetUserData(User.Identity.Name).SiteId, BACKGROUND_TYPE.IMAGE, tmpFilePath, file.FileName);
            }
            File.Delete(tmpFilePath);
            var response = Request.CreateResponse(HttpStatusCode.OK);   //Older browser compatibility
            return response;
        }

        [Authorize]
        [HttpPost]
        public Background Update(string color, bool isFixed, bool hRepeat, bool vRepeat, string align, string valign) {
            var util = new Utilities();
            using (var kernel = new StandardKernel(new NinjectBindings("Background"))) {
                return kernel.Get<BackgroundRepository<Background>>().Update(util.GetUserData(User.Identity.Name).SiteId, ColorTranslator.FromHtml(color), isFixed, hRepeat, vRepeat, util.GetEnum<HALIGNMENT>(align), util.GetEnum<VALIGNMENT>(valign));
            }
        }

        [Authorize]
        [HttpPost]
        public Background DeleteImage() {
            using (var kernel = new StandardKernel(new NinjectBindings("Background"))) {
                return kernel.Get<BackgroundRepository<Background>>().ClearImage(new Utilities().GetUserData(User.Identity.Name).SiteId);
            }
        }
    }
}