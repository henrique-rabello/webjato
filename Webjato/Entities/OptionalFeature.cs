using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using Webjato.Entities.Enums;

namespace Webjato.Entities {
    public class OptionalFeature {
        public ObjectId Id { get; set; }

        public FEATURE Feature { get; set; }

        public ObjectId UserId { get; set; }

        [BsonIgnore]
        public DateTime Created {
            get {
                return this.Id.CreationTime;
            }
        }
    }
}