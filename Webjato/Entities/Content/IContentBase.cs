using MongoDB.Bson;
using System;
using Webjato.Entities.Enums;

namespace Webjato.Entities.Content {
    public interface IContentBase {
        ObjectId Id { get; set; }

        ContentType Type { get; set; }

        ObjectId SiteId { get; set; }

        ObjectId PageId { get; set; }

        Position Position { get; set; }

        DateTime? Updated { get; set; }

        DateTime Created { get; }
    }
}