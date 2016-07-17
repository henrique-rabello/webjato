namespace Webjato.Entities.Content {
    public class Box : ContentBase {
        public BoxBorder Border { get; set; }
        
        public string Color { get; set; }
        
        public Size Size { get; set; }
    }
}