using MongoDB.Bson;
using System;
using Webjato.Entities.Content;

namespace Webjato.Entities {
    public class SimpleImage : ContentBase, ISimpleImage {
        public string ImageName { get; set; }

        public string ImageKey { get; set; }

        public Size ImageSize { get; set; }

        public Size RecommendedSize { get; set; }
    }
}