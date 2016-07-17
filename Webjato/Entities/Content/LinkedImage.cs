using MongoDB.Bson;
using Webjato.Entities.Enums;

namespace Webjato.Entities.Content {
    public class LinkedImage : ScalableImage {
        public LinkType LinkType { get; set; }

        public string LinkURL { get; set; }

        public ObjectId? TargetPageId { get; set; }
    }
}