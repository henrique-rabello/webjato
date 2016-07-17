using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using Webjato.Entities.Enums;

namespace Webjato.Entities.Site {
    public abstract class BackgroundBase : SimpleImage {
        [BsonIgnore]
        public override ObjectId SiteId { get; set; }

        [BsonIgnore]
        public override ObjectId PageId { get; set; }

        [BsonIgnore]
        public override ContentType Type { get; set; }

        [BsonIgnore]
        public override Position Position { get; set; }

        public BACKGROUND_TYPE BgType { get; set; }

        public string Color { get; set; }

        public bool IsFixed { get; set; }

        public HALIGNMENT HAlign { get; set; }

        public VALIGNMENT VAlign { get; set; }

        public bool HRepeat { get; set; }

        public bool VRepeat { get; set; }

        public bool IsTransparent { get; set; }

        public int Height { get; set; }
    }
}