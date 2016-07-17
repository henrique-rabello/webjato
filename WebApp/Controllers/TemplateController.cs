using MongoDB.Bson;
using Ninject;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Repositories;
using Webjato.Repositories.ContentRepos;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class TemplateController : ApiController {
        [HttpGet]
        [Authorize]
        public List<Page> All() {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var templates = kernel.Get<PageRepository>().GetTemplates();
                return templates.Select<Page, Page>(x => {
                    x.Thumb = Constants.GetAssetRepositoryURL(x.SiteId) + x.Thumb;
                    return x;
                }).ToList();
            }
        }

        [HttpPost]
        [Authorize]
        public List<ContentBase> Apply(string templateId, string targetPageId, int zindex) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var udata = new Utilities().GetUserData(User.Identity.Name);
                kernel.Get<PageRepository>().EnsureTargetPageMinimumHeight(new ObjectId(templateId), new ObjectId(targetPageId));
                return kernel.Get<ContentManager>().CopyContents(new ObjectId(templateId), udata.SiteId, new ObjectId(targetPageId), zindex);
            }
        }
    }
}