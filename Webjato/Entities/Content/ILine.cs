using Webjato.Entities.Enums;

namespace Webjato.Entities.Content {
    public interface ILine : IContentBase {
        string Color { get; set; }

        int Width { get; set; }

        int Size { get; set; }

        LineStyle LineStyle { get; set; }
    }
}