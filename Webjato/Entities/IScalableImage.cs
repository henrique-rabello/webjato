using MongoDB.Bson;
using System;

namespace Webjato.Entities {
    public interface IScalableImage : ISimpleImage {
        int ImageScale { get; set; }

        string ImageExportedKey { get; set; }

        Size ImageExportedSize { get; set; }
    }
}