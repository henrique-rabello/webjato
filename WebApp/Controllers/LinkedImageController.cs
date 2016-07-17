using MongoDB.Bson;
using Ninject;
using System.Web.Http;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;
using Webjato.Repositories;
using Webjato.Repositories.ContentRepos;
using WebV2.App_Code;

namespace WebV2.Controllers
{
    public class LinkedImageController : ApiController {
        [Authorize]
        [HttpPost]
        public LinkedImage New(ObjectId pageId, int zindex) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var siteId = new Utilities().GetUserData(User.Identity.Name).SiteId;
                return kernel.Get<LinkedImageRepository>().Create(siteId, pageId, zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public LinkedImage Duplicate(LinkedImage img, int zindex, string targetPageId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<LinkedImageRepository>().Duplicate(img, img.SiteId, new ObjectId(targetPageId), zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public LinkedImage Update(LinkedImage img) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var updateRecommendedSize = new Utilities().GetUserData(User.Identity.Name).Role == Roles.TemplateCreator;
                return kernel.Get<LinkedImageRepository>().Update(img, updateRecommendedSize);
            }
        }

        [Authorize]
        [HttpPost]
        public LinkedImage FromTmpImage(TemporaryImage tmpImg, string imgId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var user = new Utilities().GetUserData(User.Identity.Name);
                var setRecommendedSize = user.Role == Roles.TemplateCreator;
                return kernel.Get<ScalableImageRepository<LinkedImage>>().UpdateFromTemporaryImage(tmpImg, new ObjectId(imgId), user.SiteId, setRecommendedSize);
            }
        }

        [Authorize]
        [HttpPost]
        public LinkedImage Restore(LinkedImage img, string tmpImgId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                kernel.Get<LinkedImageRepository>().SimpleUpdate(img);
                var tmpimg = kernel.Get<TemporaryImageRepository>().Get(new ObjectId(tmpImgId));
                return FromTmpImage(tmpimg, img.Id.ToString());
            }
        }
    }
}