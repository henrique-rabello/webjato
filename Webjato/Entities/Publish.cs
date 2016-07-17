using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Webjato.Entities {
    public class Publish {
        public ObjectId Id { get; set; }

        public ObjectId SiteId { get; set; }

        public string Subdomain { get; set; }

        public string DNS { get; set; }

        public int Version { get; set; }

        public bool Active { get; set; }

        [BsonIgnore]
        public DateTime Created {
            get {
                return this.Id.CreationTime;
            }
        }
    }
}