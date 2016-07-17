using MongoDB.Bson;
using Ninject;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Repositories.ContentRepos;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class ContentController : ApiController {
        [Authorize]
        [HttpGet]
        public List<ContentBase> Get() {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var siteId = new Utilities().GetUserData(User.Identity.Name).SiteId;
                return kernel.Get<ContentManager>().GetBySite(siteId);
            }
        }

        [Authorize]
        [HttpGet]
        public List<ContentBase> Get(string siteId) {
            if (!new Utilities().GetUserData(User.Identity.Name).IsAdmin) {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<ContentManager>().GetBySite(new ObjectId(siteId));
            }
        }

        [Authorize]
        [HttpPost]
        public void Delete(ContentBase content) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                kernel.Get<ContentManager>().DeleteContent(content);
            }
        }

        [Authorize]
        [HttpPost]
        public ContentBase Position(ContentBase content) {
            using (var kernel = new StandardKernel(new NinjectBindings(content.Type))) {
                return kernel.Get<IContentBaseRepository>().UpdatePosition(content);
            }
        }

        [Authorize]
        [HttpPost]
        public void UpdateZIndex(List<ContentIndex> contents) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                kernel.Get<ContentManager>().UpdateContentsZIndex(contents);
            }
        }

        [Authorize]
        [HttpPost]
        public void UpdateY(int deltaY) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var siteId = new Utilities().GetUserData(User.Identity.Name).SiteId;
                kernel.Get<ContentManager>().UpdatePositionY(siteId, deltaY);
            }
        }
    }
}