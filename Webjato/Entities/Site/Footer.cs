using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Webjato.Entities.Site {
    public class Footer {
        public ObjectId Id { get; set; }

        public string Color { get; set; }

        public bool IsTransparent { get; set; }

        public string Text { get; set; }

        [BsonIgnore]
        public DateTime Created {
            get {
                return this.Id.CreationTime;
            }
        }

        public DateTime? Updated { get; set; }
    }
}