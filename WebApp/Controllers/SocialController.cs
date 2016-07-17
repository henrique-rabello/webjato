using MongoDB.Bson;
using Ninject;
using System.Web.Http;
using Webjato.Entities.Content;
using Webjato.Repositories.ContentRepos;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class SocialController : ApiController {
        [Authorize]
        [HttpPost]
        public SocialPlugins New(ObjectId pageId, int zindex) {
            var udata = new Utilities().GetUserData(User.Identity.Name);
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<SocialPluginRepository>().Create(udata.SiteId, pageId, zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public SocialPlugins Duplicate(SocialPlugins socialPlugin, int zindex, string targetPageId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<SocialPluginRepository>().Duplicate(socialPlugin, socialPlugin.SiteId, new ObjectId(targetPageId), zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public SocialPlugins Update(SocialPlugins socialPlugin) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<SocialPluginRepository>().Update(socialPlugin);
            }
        }
    }
}