using Webjato.Entities.Enums;

namespace Webjato.Entities.Content {
    public class Video : ContentBase {
        public VideoType VideoType { get; set; }

        public string VideoId { get; set; }

        public Size Size { get; set; }
    }
}