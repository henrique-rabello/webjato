using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webjato.Entities.Content {
    public class Text : ContentBase {
        public string Value { get; set; }

        public Size Size { get; set; }
    }
}