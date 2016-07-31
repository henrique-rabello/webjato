using System.Net.Mail;
using Webjato.Entities;

namespace Webjato.Utilities {
    public interface ISmtpClient {
        void Send(string host, int port, string login, string password, MailMessage msg);
    }
    
    public class MailManager {
        private MailServerConfig server;
        private ISmtpClient client;
        public MailManager(MailServerConfig serverCfg, ISmtpClient smtpClient) {
            server = serverCfg;
            client = smtpClient;
        }

        public virtual void SendMail(string addressFrom, string addressTo, string subject, string body, bool useHtml) {
            using (var msg = new MailMessage()) {
                msg.From = new MailAddress(addressFrom);
                msg.Subject = subject;
                msg.Body = body;
                msg.IsBodyHtml = useHtml;
                msg.To.Add(new MailAddress(addressTo));
                client.Send(server.HostURL, server.HostPort, server.HostLogin, server.HostPwd, msg);
            }
        }
    }
}