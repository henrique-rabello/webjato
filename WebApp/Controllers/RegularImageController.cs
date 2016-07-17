using MongoDB.Bson;
using Ninject;
using System.Web.Http;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;
using Webjato.Repositories;
using Webjato.Repositories.ContentRepos;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class RegularImageController : ApiController {
        [Authorize]
        [HttpPost]
        public RegularImage New(ObjectId pageId, int zindex) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var siteId = new Utilities().GetUserData(User.Identity.Name).SiteId;
                return kernel.Get<RegularImageRepository>().Create(siteId, pageId, zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public RegularImage Duplicate(RegularImage img, int zindex, string targetPageId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<RegularImageRepository>().Duplicate(img, img.SiteId, new ObjectId(targetPageId), zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public RegularImage Update(RegularImage img) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var updateRecommendedSize = new Utilities().GetUserData(User.Identity.Name).Role == Roles.TemplateCreator;
                return kernel.Get<RegularImageRepository>().Update(img, updateRecommendedSize);
            }
        }

        [Authorize]
        [HttpPost]
        public RegularImage FromTmpImage(TemporaryImage tmpImg, string imgId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var user = new Utilities().GetUserData(User.Identity.Name);
                var setRecommendedSize = user.Role == Roles.TemplateCreator;
                return kernel.Get<ScalableImageRepository<RegularImage>>().UpdateFromTemporaryImage(tmpImg, new ObjectId(imgId), user.SiteId, setRecommendedSize);
            }
        }

        [Authorize]
        [HttpPost]
        public RegularImage Restore(RegularImage img, string tmpImgId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                kernel.Get<RegularImageRepository>().SimpleUpdate(img);
                var tmpimg = kernel.Get<TemporaryImageRepository>().Get(new ObjectId(tmpImgId));
                return FromTmpImage(tmpimg, img.Id.ToString());
            }
        }
    }
}