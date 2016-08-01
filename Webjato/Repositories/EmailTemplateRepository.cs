using System.Collections.Generic;
using System.Xml;
using SystemInterface.IO;
using Webjato.Entities;
using Webjato.Entities.Enums;

namespace Webjato.Repositories {
    public class EmailTemplateRepository {
        private enum EmailTemplateType { ForgotMyPassword }
        private string tplPath;
        private IFile File;
        private IPath Path;

        public EmailTemplateRepository(IFile file, IPath path, string templatesPath) {
            File = file;
            Path = path;
            tplPath = templatesPath;
        }

        public EmailTemplate GetForgotMyPassword(Language language, string name, string email, string password) {
            string tpl = GetTemplate(EmailTemplateType.ForgotMyPassword, language);
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(tpl);
            string subject = doc.GetElementsByTagName("subject")[0].InnerText.Replace("\r\n", "").Trim();
            string body = doc.GetElementsByTagName("body")[0].InnerXml.Replace("\r\n", "").Trim();
            return new EmailTemplate {
                Body = body.Replace("{Name}", name).Replace("{Email}", email).Replace("{Password}", password),
                Subject = subject
            };
        }

        private string GetTemplate(EmailTemplateType tpl, Language language) {
            Dictionary<EmailTemplateType, string> hash = new Dictionary<EmailTemplateType, string> {
                { EmailTemplateType.ForgotMyPassword, "esqueci-minha-senha.html"}
            };
            string filepath = Path.Combine(tplPath, language.GetDescription(), hash[tpl]);
            return File.ReadAllText(filepath);
        }
    }
}