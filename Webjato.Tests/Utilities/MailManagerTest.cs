using FakeItEasy;
using NUnit.Framework;
using System.Net.Mail;
using Webjato.Entities;
using Webjato.Utilities;

namespace Webjato.Tests.Utilities {
    [TestFixture]
    public class MailManagerTest {
        [Test]
        public void MailManager_SendMail() {
            var hostInfo = new MailServerConfig {
                HostURL = "url",
                HostLogin = "login",
                HostPwd = "pwd"
            };
            var fakeClient = A.Fake<ISmtpClient>();
            var mailManager = new MailManager(hostInfo, fakeClient);
            mailManager.SendMail("from@host.com", "to@host.com", "subject", "body", true);
            A.CallTo(() => fakeClient.Send(A<MailMessage>.Ignored)).MustHaveHappened(Repeated.Exactly.Once);
        }
    }
}