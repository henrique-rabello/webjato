using MongoDB.Bson;
using System;

namespace Webjato.Entities {
    public interface ISimpleImage {
        ObjectId Id { get; set; }

        string ImageName { get; set; }

        string ImageKey { get; set; }

        Size ImageSize { get; set; }

        DateTime? Updated { get; set; }

        Size RecommendedSize { get; set; }
    }
}