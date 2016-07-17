using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Webjato.Entities {
    public class Page {
        public ObjectId Id { get; set; }

        public ObjectId SiteId { get; set; }

        public string Title { get; set; }

        public string FileName { get; set; }

        public int Position { get; set; }

        public int Height { get; set; }

        public bool IsTemplate { get; set; }

        public string Thumb { get; set; }

        [BsonIgnore]
        public DateTime Created {
            get {
                return this.Id.CreationTime;
            }
        }

        public DateTime? Updated { get; set; }
    }
}