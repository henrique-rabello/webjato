using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Webjato.Entities.Enums;

namespace Webjato.Entities.Content {
    public class Line : ContentBase {
        public string Color { get; set; }

        public bool IsHorizontal { get; set; }

        public int Width { get; set; }

        public int Size { get; set; }

        public LineStyle LineStyle { get; set; }
    }
}