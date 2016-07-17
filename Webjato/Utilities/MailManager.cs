using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using Webjato.Entities;

namespace Webjato.Utilities {
    public interface ISmtpClient {
        string Host { get; set; }
        bool EnableSsl { get; set; }
        ICredentialsByHost Credentials { get; set; }
        void Send(MailMessage msg);
    }
    
    public class MailManager {
        private MailServerConfig server;
        private ISmtpClient client;
        public MailManager(MailServerConfig serverCfg, ISmtpClient smtpClient) {
            server = serverCfg;
            client = smtpClient;
        }

        public virtual void SendMail(string addressFrom, string addressTo, string subject, string body, bool useHtml) {
            var msg = new MailMessage {
                From = new MailAddress(addressFrom),
                Subject = subject,
                Body = body,
                IsBodyHtml = useHtml
            };
            msg.To.Add(new MailAddress(addressTo));
            client.Host = server.HostURL;
            client.EnableSsl = true;
            client.Credentials = new NetworkCredential(server.HostLogin, server.HostPwd);
            client.Send(msg);
        }
    }
}