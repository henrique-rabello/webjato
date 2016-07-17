using Webjato.Entities.Enums;

namespace Webjato.Entities.Content {
    public class SocialPlugins : ContentBase {
        public SocialPlugin Facebook { get; set; }
        
        public SocialPlugin Twitter { get; set; }
        
        public SocialPlugin YouTube { get; set; }
        
        public SocialPlugin LinkedIn { get; set; }
        
        public SocialPlugin GooglePlus { get; set; }
        
        public SocialPlugin Pinterest { get; set; }

        public SocialPlugin Instagram { get; set; }

        public SocialPluginSize Size { get; set; }
    }
}