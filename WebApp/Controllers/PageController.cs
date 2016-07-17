using MongoDB.Bson;
using Ninject;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Web;
using System.Web.Http;
using Webjato.Entities;
using Webjato.Entities.Enums;
using Webjato.Repositories;
using Webjato.Utilities;
using WebV2.App_Code;
using WebV2.App_Entities;

namespace WebV2.Controllers {
    public class PageController : ApiController {
        [HttpGet]
        [Authorize]
        public List<Page> Get() {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<PageRepository>().GetBySite(new Utilities().GetUserData(User.Identity.Name).SiteId);
            }
        }

        [HttpGet]
        [Authorize]
        public List<Page> Get(string siteId) {
            if (!new Utilities().GetUserData(User.Identity.Name).IsAdmin) {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<PageRepository>().GetBySite(new ObjectId(siteId));
            }
        }

        [HttpGet]
        [Authorize]
        public Page Single(string pageId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<PageRepository>().Get(new ObjectId(pageId));
            }
        }

        [HttpPost]
        [Authorize]
        public void Title(Page page) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                kernel.Get<PageRepository>().UpdateTitle(page.Id, page.Title);
            }
        }

        [HttpPost]
        [Authorize]
        public void Title(string id, string title) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                kernel.Get<PageRepository>().UpdateTitle(new ObjectId(id), title);
            }
        }

        [HttpPost]
        [Authorize]
        public void Height(Page page) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                kernel.Get<PageRepository>().UpdateHeight(page.Id, page.Height);
            }
        }

        [HttpPost]
        [Authorize]
        public void Swap(SwappedPages pgs) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                kernel.Get<PageRepository>().SwapPosition(pgs.sourcePageId, pgs.targetPageId);
            }
        }

        [HttpPost]
        [Authorize]
        public Page PostThumb(string pageId) {
            var udata = new Utilities().GetUserData(User.Identity.Name);
            if (udata.Role != Roles.TemplateCreator) {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            var utils = new General();
            var file = HttpContext.Current.Request.Files[0];
            var tmpFilePath = Path.Combine(Constants.TmpFolder, utils.GenerateRandomFileName(Path.GetExtension(file.FileName)));
            file.SaveAs(tmpFilePath);
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var page = kernel.Get<PageRepository>().UpdateThumb(new ObjectId(pageId), tmpFilePath);
                File.Delete(tmpFilePath);
                return page;
            }
        }

        [HttpPost]
        [Authorize]
        public Page Add() {
            var udata = new Utilities().GetUserData(User.Identity.Name);
            if (udata.Role != Roles.TemplateCreator) {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<PageRepository>().CreatePage(udata.SiteId);
            }
        }
    }
}