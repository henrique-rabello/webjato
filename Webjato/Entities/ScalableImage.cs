namespace Webjato.Entities {
    public class ScalableImage : SimpleImage, IScalableImage {        
        public int ImageScale { get; set; }

        public string ImageExportedKey { get; set; }

        public Size ImageExportedSize { get; set; }
    }
}