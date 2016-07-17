using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using Webjato.Entities.Enums;

namespace Webjato.Entities.Site {
    public class Logo : ScalableImage {
        [BsonIgnore]
        public LogoType LogoType {
            get {
                if (!String.IsNullOrEmpty(ImageKey)) {
                    return LogoType.IMAGE;
                }
                else if (!String.IsNullOrEmpty(Text)) {
                    return LogoType.TEXT;
                }
                else return LogoType.NOT_SET;
            }
        }
        
        public string Text { get; set; }
    }
}