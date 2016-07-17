using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Webjato.Entities.Site {
    public class Frame {
        public ObjectId Id { get; set; }

        public int MarginTop { get; set; }

        public bool IsTransparent { get; set; }

        public string Color { get; set; }

        public FrameBorder BorderTop { get; set; }

        public FrameBorder BorderBottom { get; set; }

        public FrameBorder BorderSides { get; set; }

        [BsonIgnore]
        public DateTime Created {
            get {
                return Id.CreationTime;
            }
        }

        public DateTime? Updated { get; set; }
    }
}