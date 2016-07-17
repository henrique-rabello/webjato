using MongoDB.Bson;

namespace WebV2.App_Entities {
    public class CroppedImage {
        public ObjectId id { get; set; }
        public int x { get; set; }
        public int y { get; set; }
        public int w { get; set; }
        public int h { get; set; }
        public bool keepOriginalImage { get; set; }
    }
}