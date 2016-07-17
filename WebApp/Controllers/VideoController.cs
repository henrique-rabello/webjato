using MongoDB.Bson;
using Ninject;
using System.Web.Http;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;
using Webjato.Repositories.ContentRepos;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class VideoController : ApiController {
        [Authorize]
        [HttpPost]
        public Video New(ObjectId pageId, int zindex, VideoType videoType) {
            var udata = new Utilities().GetUserData(User.Identity.Name);
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<VideoRepository>().Create(udata.SiteId, pageId, videoType, zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public Video Duplicate(Video video, int zindex, string targetPageId) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<VideoRepository>().Duplicate(video, video.SiteId, new ObjectId(targetPageId), zindex);
            }
        }

        [Authorize]
        [HttpPost]
        public Video Update(Video video) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<VideoRepository>().Update(video);
            }
        }
    }
}