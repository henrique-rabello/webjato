using MongoDB.Bson;
using Ninject;
using System.Web.Http;
using Webjato.Entities.Content;
using Webjato.Repositories.ContentRepos;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class ContactFormController : ApiController {
        [Authorize]
        [HttpPost]
        public ContactForm New(ObjectId pageId, int zindex) {
            var udata = new Utilities().GetUserData(User.Identity.Name);
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<ContactFormRepository>().Create(udata.SiteId, pageId, zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public ContactForm Duplicate(ContactForm contactForm, int zindex, string targetPageId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<ContactFormRepository>().Duplicate(contactForm, contactForm.SiteId, new ObjectId(targetPageId), zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public ContactForm Update(ContactForm contactForm) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<ContactFormRepository>().Update(contactForm);
            }
        }
    }
}