using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webjato.Entities.Content {
    public class GoogleMaps : ContentBase {
        public string Address { get; set; }

        public Size Size { get; set; }
    }
}