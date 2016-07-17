using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using Webjato.Entities.Enums;

namespace Webjato.Entities.Content {
    public class ContentBase {
        public ObjectId Id { get; set; }

        public virtual ContentType Type { get; set; }

        public virtual ObjectId SiteId { get; set; }

        public virtual ObjectId PageId { get; set; }

        public virtual Position Position { get; set; }

        public DateTime? Updated { get; set; }

        [BsonIgnore]
        public DateTime Created {
            get {
                return Id.CreationTime;
            }
        }
    }
}