using Webjato.Entities.Enums;

namespace Webjato.Entities.Content {
    public class LineBase : ContentBase, ILine {
        public string Color { get; set; }

        public int Width { get; set; }

        public int Size { get; set; }

        public LineStyle LineStyle { get; set; }
    }
}