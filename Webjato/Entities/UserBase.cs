using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using Webjato.Entities.Enums;

namespace Webjato.Entities {
    public class UserBase {
        public ObjectId Id { get; set; }

        public string Email { get; set; }

        public string FullName { get; set; }

        public Roles Role { get; set; }

        [BsonIgnore]
        public DateTime Created {
            get {
                return this.Id.CreationTime;
            }
            set { }
        }
    }
}