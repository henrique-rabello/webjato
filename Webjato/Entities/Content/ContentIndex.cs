using MongoDB.Bson;
using Webjato.Entities.Enums;

namespace Webjato.Entities.Content {
    public class ContentIndex {
        public ObjectId Id { get; set; }

        public ContentType Type { get; set; }

        public int ZIndex { get; set; }
    }
}