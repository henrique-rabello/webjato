using MongoDB.Bson;
using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Webjato.Entities;
using Webjato.Repositories;
using Webjato.Repositories.AwsRepos;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class PublishController : ApiController {
        [Authorize]
        [HttpGet]
        public Publish GetActive() {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var udata = new Utilities().GetUserData(User.Identity.Name);
                return kernel.Get<PublishRepository>().GetActivePublish(udata.SiteId);
            }
        }

        [Authorize]
        [HttpGet]
        public bool SubdomainInUse(string subdomain) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var udata = new Utilities().GetUserData(User.Identity.Name);
                return kernel.Get<PublishRepository>().IsSubdomainInUse(udata.SiteId, subdomain);
            }
        }

        [Authorize]
        [HttpPost]
        public Publish Publish(string subdomain) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var udata = new Utilities().GetUserData(User.Identity.Name);
                kernel.Get<SiteRepository>().UpdateTitle(udata.SiteId, subdomain);
                return kernel.Get<Publisher>().PublishSiteOnIIS(udata.SiteId, subdomain);
            }
        }

        [Authorize]
        [HttpPost]
        public void Remove() {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var udata = new Utilities().GetUserData(User.Identity.Name);
                kernel.Get<Publisher>().TakeOfflineOnIIS(udata.SiteId);
            }
        }
    }
}