using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;

namespace Webjato.Entities.Site {
    public class Site {
        public ObjectId Id { get; set; }

        public ObjectId UserId { get; set; }

        public HALIGNMENT Alignment { get; set; }

        public string Title { get; set; }

        public Menu Menu { get; set; }

        [BsonIgnore]
        public DateTime Created {
            get {
                return this.Id.CreationTime;
            }
        }

        public DateTime? Updated { get; set; }
    }
}