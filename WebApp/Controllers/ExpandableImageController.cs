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
    public class ExpandableImageController : ApiController {
        [Authorize]
        [HttpPost]
        public ExpandableImage New(ObjectId pageId, int zindex) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var siteId = new Utilities().GetUserData(User.Identity.Name).SiteId;
                return kernel.Get<ExpandableImageRepository>().Create(siteId, pageId, zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public ExpandableImage Duplicate(ExpandableImage img, int zindex, string targetPageId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<ExpandableImageRepository>().Duplicate(img, img.SiteId, new ObjectId(targetPageId), zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public ExpandableImage Update(ExpandableImage img) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var updateRecommendedSize = new Utilities().GetUserData(User.Identity.Name).Role == Roles.TemplateCreator;
                return kernel.Get<ExpandableImageRepository>().Update(img, updateRecommendedSize);
            }
        }

        [Authorize]
        [HttpPost]
        public ExpandableImage FromTmpImage(TemporaryImage tmpImg, string imgId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var user = new Utilities().GetUserData(User.Identity.Name);
                var setRecommendedSize = user.Role == Roles.TemplateCreator;
                return kernel.Get<ExpandableImageRepository>().UpdateFromTemporaryImage(new ObjectId(imgId), tmpImg, setRecommendedSize);
            }
        }

        [Authorize]
        [HttpPost]
        public ExpandableImage Restore(RegularImage img, string tmpImgId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                kernel.Get<ExpandableImageRepository>().SimpleUpdate(img);
                var tmpimg = kernel.Get<TemporaryImageRepository>().Get(new ObjectId(tmpImgId));
                return FromTmpImage(tmpimg, img.Id.ToString());
            }
        }
    }
}