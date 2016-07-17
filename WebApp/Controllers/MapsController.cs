using MongoDB.Bson;
using Ninject;
using System.Web.Http;
using Webjato.Entities.Content;
using Webjato.Repositories.ContentRepos;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class MapsController : ApiController {
        [Authorize]
        [HttpPost]
        public GoogleMaps New(ObjectId pageId, int zindex) {
            var udata = new Utilities().GetUserData(User.Identity.Name);
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<GoogleMapsRepository>().Create(udata.SiteId, pageId, zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public GoogleMaps Duplicate(GoogleMaps maps, int zindex, string targetPageId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<GoogleMapsRepository>().Duplicate(maps, maps.SiteId, new ObjectId(targetPageId), zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public GoogleMaps Update(GoogleMaps maps) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<GoogleMapsRepository>().Update(maps);
            }
        }
    }
}