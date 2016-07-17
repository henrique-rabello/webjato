using MongoDB.Bson;
using Ninject;
using System.Collections.Generic;
using System.Globalization;
using System.Net;
using System.Web.Http;
using Webjato.Entities;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;
using Webjato.Repositories.SiteRepos;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class SiteController : ApiController {
        [Authorize]
        [HttpGet]
        public Site Get() {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<SiteRepository>().GetByUserId(new ObjectId(User.Identity.Name));
            }
        }

        [Authorize]
        [HttpGet]
        public Site Get(string siteId) {
            if (!new Utilities().GetUserData(User.Identity.Name).IsAdmin) {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<SiteRepository>().Get(new ObjectId(siteId));
            }
        }

        [Authorize]
        [HttpGet]
        public List<Site> GetAll() {
            if (!new Utilities().GetUserData(User.Identity.Name).IsAdmin) {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<SiteRepository>().GetAll();
            }
        }

        [Authorize]
        [HttpGet]
        public Site ByUserId(string userId) {
            if (!new Utilities().GetUserData(User.Identity.Name).IsAdmin) {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<SiteRepository>().GetByUserId(new ObjectId(userId));
            }
        }

        [Authorize]
        [HttpGet]
        public void Alignment(HALIGNMENT id) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                kernel.Get<SiteRepository>().UpdateAligment(new ObjectId(User.Identity.Name), id);
            }
        }

        [Authorize]
        [HttpPost]
        public void Title(string title) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                kernel.Get<SiteRepository>().UpdateTitle(new ObjectId(User.Identity.Name), title);
            }
        }

        [Authorize]
        [HttpGet]
        public Config Config() {
            return new Config {
                AssetsPath = Constants.GetAssetRepositoryURL(new Utilities().GetUserData(User.Identity.Name).SiteId)
            };
        }

        [Authorize]
        [HttpGet]
        public Config Config(string siteId) {
            if (!new Utilities().GetUserData(User.Identity.Name).IsAdmin) {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            return new Config {
                AssetsPath = Constants.GetAssetRepositoryURL(new ObjectId(siteId))
            };
        }

        [Authorize]
        [HttpPost]
        public Site Menu(Menu menu) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<SiteRepository>().UpdateMenu(new ObjectId(User.Identity.Name), menu);
            }
        }
    }
}