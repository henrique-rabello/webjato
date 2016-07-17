using MongoDB.Bson;
using Ninject;
using System.Web.Http;
using Webjato.Entities.Content;
using Webjato.Repositories.ContentRepos;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class LineController : ApiController {
        [Authorize]
        [HttpPost]
        public Line New([FromBody]ObjectId pageId, [FromUri]bool horizontal, int zindex) {
            var udata = new Utilities().GetUserData(User.Identity.Name);
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<LineRepository>().Create(udata.SiteId, pageId, horizontal, zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public Line Duplicate(Line line, int zindex, string targetPageId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<LineRepository>().Duplicate(line, line.SiteId, new ObjectId(targetPageId), zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public Line Update(Line line) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<LineRepository>().Update(line);
            }
        }
    }
}