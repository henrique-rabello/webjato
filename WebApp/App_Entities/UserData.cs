using MongoDB.Bson;
using Webjato.Entities.Enums;

namespace WebV2.App_Entities {
    public class UserData {
        public ObjectId UserId { get; set; }
        public ObjectId SiteId { get; set; }
        public Roles Role { get; set; }
        public bool IsAdmin {
            get {
                return Role == Roles.Admin;
            }
        }
    }
}