using MongoDB.Bson;
using Newtonsoft.Json;
using Ninject;
using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Http;
using Webjato.Entities;
using Webjato.Entities.Enums;
using Webjato.Repositories;
using Webjato.Repositories.AwsRepos;
using Webjato.Repositories.ContentRepos;
using Webjato.Utilities;
using WebV2.App_Code;
using WebV2.App_Entities;

namespace WebV2.Controllers {
    public class TmpImgController : ApiController {
        [Authorize]
        [HttpPost]
        public HttpResponseMessage NewWithCanvas(int width, int height) {
            var generalUtilities = new General();
            var file = HttpContext.Current.Request.Files[0];
            var filename = generalUtilities.GenerateRandomFileName(Path.GetExtension(file.FileName));
            var filepath = Path.Combine(Constants.TmpWebFolder, filename);
            file.SaveAs(filepath);
            TemporaryImage tmpimg;
            string newFilePath;
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var imgUtils = kernel.Get<ImageUtils>();
                newFilePath = imgUtils.ImportImageIntoTheSystem(filepath, Constants.TmpWebFolder);
                tmpimg = kernel.Get<TemporaryImageRepository>().CreateTemporaryImage(new Utilities().GetUserData(User.Identity.Name).SiteId, newFilePath, file.FileName, width, height);
            }
            tmpimg.LocalKey = Path.GetFileName(newFilePath);
            //Support for older browsers
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(tmpimg), Encoding.UTF8, "text/plain");
            return response;
        }

        [Authorize]
        [HttpPost]
        public HttpResponseMessage New() {
            var file = HttpContext.Current.Request.Files[0];
            var filename = new General().GenerateRandomFileName(Path.GetExtension(file.FileName));
            var filepath = Path.Combine(Constants.TmpWebFolder, filename);
            file.SaveAs(filepath);
            TemporaryImage tmpimg;
            string newFilePath;
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var imgUtils = kernel.Get<ImageUtils>();
                newFilePath = imgUtils.ImportImageIntoTheSystem(filepath, Constants.TmpWebFolder);
                tmpimg = kernel.Get<TemporaryImageRepository>().CreateTemporaryImage(new Utilities().GetUserData(User.Identity.Name).SiteId, newFilePath, file.FileName);
            }
            tmpimg.LocalKey = Path.GetFileName(newFilePath);
            //Support for older browsers
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(tmpimg), Encoding.UTF8, "text/plain");
            return response;
        }

        [Authorize]
        [HttpPost]
        public HttpResponseMessage NewFromContentImage(string contentId, ContentType contentType) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                ScalableImage image;
                switch (contentType) {
                    case ContentType.IMAGE:
                        image = kernel.Get<RegularImageRepository>().Get(new ObjectId(contentId));
                        break;
                    case ContentType.LINKED_IMAGE:
                        image = kernel.Get<LinkedImageRepository>().Get(new ObjectId(contentId));
                        break;
                    case ContentType.EXPANDABLE_IMAGE:
                        image = kernel.Get<ExpandableImageRepository>().Get(new ObjectId(contentId));
                        break;
                    default:
                        throw new ArgumentException("[WJ] Cannot create a temporary image from content-type '" + contentType.ToString() + "'.");
                }
                var general = new General();
                var filepath = Path.Combine(Constants.TmpFolder, general.GenerateRandomFileName(Path.GetExtension(image.ImageName)));
                var siteId = new Utilities().GetUserData(User.Identity.Name).SiteId;
                kernel.Get<S3Repository>().GetObject(general.GetS3FolderForSite(siteId) + image.ImageKey, filepath);
                var tmpImg = kernel.Get<TemporaryImageRepository>().CreateTemporaryImage(siteId, filepath, image.ImageName);
                var response = Request.CreateResponse(HttpStatusCode.OK);
                response.Content = new StringContent(JsonConvert.SerializeObject(tmpImg), Encoding.UTF8, "text/plain");
                return response;
            }
        }

        [Authorize]
        [HttpPost]
        public HttpResponseMessage NewFromBase64(FileBase64 file) {
            var filepath = new Utilities().Base64FileToDisk(file.Contents);
            TemporaryImage tmpimg;
            string newFilePath;
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var imgUtils = kernel.Get<ImageUtils>();
                newFilePath = imgUtils.ImportImageIntoTheSystem(filepath, Constants.TmpWebFolder);
                tmpimg = kernel.Get<TemporaryImageRepository>().CreateTemporaryImage(new Utilities().GetUserData(User.Identity.Name).SiteId, newFilePath, file.Name);
            }
            tmpimg.LocalKey = Path.GetFileName(newFilePath);
            //Support for older browsers
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(tmpimg), Encoding.UTF8, "text/plain");
            return response;
        }

        [Authorize]
        [HttpPost]
        public TemporaryImage Crop(CroppedImage crpimg) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<TemporaryImageRepository>().Crop(crpimg.id, crpimg.x, crpimg.y, crpimg.w, crpimg.h, crpimg.keepOriginalImage);
            }
        }

        [Authorize]
        [HttpPost]
        public void Delete(TemporaryImage tmpimg) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                kernel.Get<TemporaryImageRepository>().Delete(tmpimg.Id, false);
            }
        }
    }
}