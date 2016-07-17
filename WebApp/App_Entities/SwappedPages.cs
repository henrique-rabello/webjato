using MongoDB.Bson;

namespace WebV2.App_Entities {
    public class SwappedPages {
        public ObjectId sourcePageId { get; set; }
        public ObjectId targetPageId { get; set; }
    }
}