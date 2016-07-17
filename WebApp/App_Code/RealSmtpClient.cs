using System.Net.Mail;
using Webjato.Utilities;

namespace WebV2.App_Code {
    public class RealSmtpClient : ISmtpClient {
        private SmtpClient client;

        public string Host {
            get {
                return client.Host;
            }
            set {
                client.Host = value;
            }
        }

        public bool EnableSsl {
            get {
                return client.EnableSsl;
            }
            set {
                client.EnableSsl = value;
            }
        }

        public System.Net.ICredentialsByHost Credentials {
            get {
                return client.Credentials;
            }
            set {
                client.Credentials = value;
            }
        }

        public void Send(System.Net.Mail.MailMessage msg) {
            //client.Send(msg);
        }

        public RealSmtpClient() {
            client = new SmtpClient();
        }
    }
}