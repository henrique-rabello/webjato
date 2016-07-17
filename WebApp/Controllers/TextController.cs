using MongoDB.Bson;
using Ninject;
using System.Web.Http;
using Webjato.Entities.Content;
using Webjato.Repositories.ContentRepos;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class TextController : ApiController {
        [Authorize]
        [HttpPost]
        public Text New(ObjectId pageId, int zindex) {
            var udata = new Utilities().GetUserData(User.Identity.Name);
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<TextRepository>().Create(udata.SiteId, pageId, zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public Text Duplicate(Text text, int zindex, string targetPageId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<TextRepository>().Duplicate(text, text.SiteId, new ObjectId(targetPageId), zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public Text Update(Text text) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<TextRepository>().Update(text);
            }
        }
    }
}