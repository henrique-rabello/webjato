using System.Collections.Generic;
using Webjato.Entities.Content;
using Webjato.Entities.Site;

namespace Webjato.Entities {
    public class PublishInfo {
        public Site.Site Site { get; set; }
        public List<ContentBase> Contents { get; set; }
        public Frame Frame { get; set; }
        public List<Page> Pages { get; set; }
        public Background Bg { get; set; }
        public Header Header { get; set; }
        public Footer Footer { get; set; }
        public Logo Logo { get; set; }
    }
}