using System;
using System.Collections.Generic;
using Webjato.Entities.Enums;

namespace Webjato.Entities.Site {
    public class Menu {
        public string Id { get; set; }

        public VALIGNMENT VAlign { get; set; }

        public List<MenuPart> Parts { get; set; }
    }
}