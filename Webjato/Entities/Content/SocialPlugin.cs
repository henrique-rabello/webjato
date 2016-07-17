namespace Webjato.Entities.Content {
    public class SocialPlugin {
        public bool Enabled { get; set; }
        
        public string URL { get; set; }

        public SocialPlugin() {
            Enabled = false;
            URL = "";
        }
    }
}
