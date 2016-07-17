using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Webjato.Entities {
    public class TemporaryImage {
        public ObjectId Id { get; set; }

        public ObjectId SiteId { get; set; }

        public string Key { get; set; }         //Nome do arquivo no bucket da amazon

        public string Name { get; set; }

        public int Width { get; set; }

        public int Height { get; set; }

        public ObjectId? CroppedFrom { get; set; }

        public string LocalKey { get; set; }    //Nome do arquivo na pasta temporária local no servidor webjato
        
        [BsonIgnore]
        public DateTime Created {
            get {
                return this.Id.CreationTime;
            }
        }
    }
}