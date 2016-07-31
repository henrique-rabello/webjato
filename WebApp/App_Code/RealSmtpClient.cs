using System.Net;
using System.Net.Mail;
using Webjato.Utilities;

namespace WebV2.App_Code {
    public class RealSmtpClient : ISmtpClient {
        private SmtpClient client;

        public RealSmtpClient() {
            client = new SmtpClient();
        }

        public void Send(string host, int port, string login, string password, MailMessage msg) {
            client.EnableSsl = true;
            client.Host = host;
            client.Port = port;
            client.UseDefaultCredentials = false;   //Atenção! Esta linha precisa vir *antes* das credenciais (linha abaixo)
            client.Credentials = new NetworkCredential(login, password);
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.Send(msg);
        }
    }
}