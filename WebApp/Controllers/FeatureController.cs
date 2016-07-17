using MongoDB.Bson;
using System.Globalization;
using System.Web.Http;
using Webjato.Entities;
using Webjato.Entities.Enums;
using Webjato.Repositories;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class FeatureController : ApiController {
        [Authorize]
        [HttpGet]
        public bool Get(int id) {
            var util = new Utilities();
            var feature = util.GetEnum<FEATURE>(id);
            return new OptionalFeatureRepository(util.GetCollection<OptionalFeature>()).IsAssociated(feature, new ObjectId(User.Identity.Name));
        }

        [Authorize]
        [HttpGet]
        public void Put(int id) {
            var util = new Utilities();
            var feature = util.GetEnum<FEATURE>(id);
            new OptionalFeatureRepository(util.GetCollection<OptionalFeature>()).AssociateFeature(feature, new ObjectId(User.Identity.Name));
        }

        [Authorize]
        [HttpGet]
        public void Delete(int id) {
            var util = new Utilities();
            var feature = util.GetEnum<FEATURE>(id);
            new OptionalFeatureRepository(util.GetCollection<OptionalFeature>()).DissociateFeature(feature, new ObjectId(User.Identity.Name));
        }
    }
}