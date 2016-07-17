using MongoDB.Bson;
using Newtonsoft.Json;
using System;

namespace WebV2.App_Code {
    public class ObjectIdFormatter : JsonConverter {
        public override bool CanConvert(Type objectType) {
            return objectType == typeof(ObjectId);
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer) {
            if (reader.Value != null) {
                return new ObjectId((string)reader.Value);
            }
            else {
                return null;
            }
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer) {
            writer.WriteValue(((ObjectId)value).ToString());
        }
    }
}