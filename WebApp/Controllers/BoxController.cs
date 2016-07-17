using MongoDB.Bson;
using Ninject;
using System.Web.Http;
using Webjato.Entities.Content;
using Webjato.Repositories.ContentRepos;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class BoxController : ApiController {
        [Authorize]
        [HttpPost]
        public Box New(ObjectId pageId, int zindex) {
            var udata = new Utilities().GetUserData(User.Identity.Name);
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<BoxRepository>().Create(udata.SiteId, pageId, zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public Box Duplicate(Box box, int zindex, string targetPageId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<BoxRepository>().Duplicate(box, box.SiteId, new ObjectId(targetPageId), zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public Box Update(Box box) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<BoxRepository>().Update(box);
            }
        }
    }
}