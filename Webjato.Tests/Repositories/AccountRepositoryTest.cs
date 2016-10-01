using FakeItEasy;
using MongoDB.Bson;
using NUnit.Framework;
using Webjato.Entities;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;
using Webjato.Repositories;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;

namespace Webjato.Tests.Repositories {
    [TestFixture]
    public class AccountRepositoryTest {
        private UserRepository userRepo;
        private SiteRepository siteRepo;
        private PageRepository pageRepo;
        private OptionalFeatureRepository optionalFeatureRepo;
        private BackgroundRepository<Background> bgRepo;
        private BackgroundRepository<Header> headerRepo;
        private FooterRepository footerRepo;
        private LogoRepository logoRepo;
        private FrameRepository frameRepo;
        private MailManager mailManager;
        private AccountRepository repo;
        private EmailTemplateRepository emailTplRepo;
        
        [SetUp]
        public void BeforeEach() {
            userRepo = A.Fake<UserRepository>(x => x.WithArgumentsForConstructor(new object[] { null }));
            siteRepo = A.Fake<SiteRepository>(x => x.WithArgumentsForConstructor(new object[] { null }));
            pageRepo = A.Fake<PageRepository>(x => x.WithArgumentsForConstructor(new object[] { null, null, null, null }));
            optionalFeatureRepo = A.Fake<OptionalFeatureRepository>(x => x.WithArgumentsForConstructor(new object[] { null }));
            bgRepo = A.Fake<BackgroundRepository<Background>>(x => x.WithArgumentsForConstructor(new object[] { null, null, null, null, null, null }));
            headerRepo = A.Fake<BackgroundRepository<Header>>(x => x.WithArgumentsForConstructor(new object[] { null, null, null, null, null, null }));
            footerRepo = A.Fake<FooterRepository>(x => x.WithArgumentsForConstructor(new object[] { null }));
            logoRepo = A.Fake<LogoRepository>(x => x.WithArgumentsForConstructor(new object[] { null, null, null, null, null, null, new AuxiliaryConstants(), null }));
            frameRepo = A.Fake<FrameRepository>(x => x.WithArgumentsForConstructor(new object[] { null }));
            mailManager = A.Fake<MailManager>(x => x.WithArgumentsForConstructor(new object[] { null, null }));
            emailTplRepo = A.Fake<EmailTemplateRepository>(x => x.WithArgumentsForConstructor(new object[] { null, null, null, null }));
            repo = new AccountRepository(userRepo, siteRepo, pageRepo, optionalFeatureRepo, bgRepo, headerRepo, footerRepo, logoRepo, frameRepo, mailManager, emailTplRepo);
        }

        [Test]
        public void AccountRepositoryTest_NewRegularAccount() {
            //Email já existe
            A.CallTo(() => userRepo.Exists("email1@email.com")).Returns(true);
            var userCreated = repo.NewRegularAccount("email1@email.com", "password", "fullname", Roles.Regular);
            Assert.IsFalse(userCreated);
            A.CallTo(() => userRepo.Exists("email1@email.com")).MustHaveHappened(Repeated.Exactly.Once);
            //Email não existe
            A.CallTo(() => userRepo.Exists("email2@email.com")).Returns(false);
            A.CallTo(() => userRepo.CreateUser("email2@email.com", "password", "fullname", Roles.Regular)).Returns(new User { Email = "email2@email.com", Password = "password", FullName = "fullname" });
            userCreated = repo.NewRegularAccount("email2@email.com", "password", "fullname", Roles.Regular);
            Assert.IsTrue(userCreated);
            A.CallTo(() => userRepo.Exists("email2@email.com")).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => userRepo.CreateUser("email2@email.com", "password", "fullname", Roles.Regular)).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => mailManager.SendMail(MAIL_SENDER.DEFAULT.GetDescription(), "email2@email.com", "Webjato - Benvindo", A<string>.Ignored, true)).MustHaveHappened(Repeated.Exactly.Once);
        }

        [Test]
        public void AccountRepositoryTest_NewFacebookAccount() {
            //Email não existe
            A.CallTo(() => userRepo.Exists("email1@email.com")).Returns(false);
            A.CallTo(() => userRepo.CreateUser("email1@email.com", "fullname", USER_ORIGIN.FACEBOOK, "remoteid", "town")).Returns(new User { Origin = USER_ORIGIN.FACEBOOK });
            var userCreated = repo.NewFacebookAccount("email1@email.com", "fullname", "remoteid", "town");
            Assert.IsTrue(userCreated);
            A.CallTo(() => userRepo.CreateUser("email1@email.com", "fullname", USER_ORIGIN.FACEBOOK, "remoteid", "town")).MustHaveHappened();
            A.CallTo(() => mailManager.SendMail(MAIL_SENDER.DEFAULT.GetDescription(), "email1@email.com", "Webjato - Benvindo", A<string>.Ignored, true)).MustHaveHappened();
            //Email já existe
            A.CallTo(() => userRepo.Exists("email2@email.com")).Returns(true);
            A.CallTo(() => userRepo.Get("email2@email.com")).Returns(new User { Origin = USER_ORIGIN.OTHER });
            userCreated = repo.NewFacebookAccount("email2@email.com", "fullname", "remoteid", "town");
            Assert.IsFalse(userCreated);
            A.CallTo(() => userRepo.Exists("email2@email.com")).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => userRepo.Get("email2@email.com")).MustHaveHappened(Repeated.Exactly.Once);
        }

        [Test]
        public void AccountRepositoryTest_NewWebsite() {
            var userId = ObjectId.GenerateNewId();
            var siteId = ObjectId.GenerateNewId();
            var pageId = ObjectId.GenerateNewId();
            A.CallTo(() => siteRepo.CreateSite(userId)).Returns(new Site { Id = siteId });
            A.CallTo(() => pageRepo.CreatePage(siteId)).Returns(new Page { Id = pageId });
            repo.NewWebSite(userId);
            A.CallTo(() => siteRepo.CreateSite(userId)).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => pageRepo.CreatePage(siteId)).MustHaveHappened(Repeated.Exactly.Times(6));
            A.CallTo(() => pageRepo.UpdateTitle(pageId, "Home", "")).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => optionalFeatureRepo.AssociateFeature(FEATURE.HELP, userId)).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => bgRepo.CreateBackground(siteId)).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => headerRepo.CreateBackground(siteId)).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => footerRepo.CreateFooter(siteId)).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => logoRepo.CreateLogo(siteId)).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => frameRepo.CreateFrame(siteId)).MustHaveHappened(Repeated.Exactly.Once);
        }

        [Test]
        public void AccountRepositoryTest_RetrievePassword() {
            //Email não existe
            A.CallTo(() => userRepo.Exists("email1@email.com")).Returns(false);
            var status = repo.RetrievePassword(Language.ptBR, "email1@email.com");
            Assert.AreEqual(status, PASSWORD_RETRIEVAL_STATUS.EMAIL_NOT_FOUND);
            A.CallTo(() => userRepo.Exists("email1@email.com")).MustHaveHappened(Repeated.Exactly.Once);
            //Email existe, mas está associado à uma conta remota
            A.CallTo(() => userRepo.Exists("email2@email.com")).Returns(true);
            A.CallTo(() => userRepo.Get("email2@email.com")).Returns(new User { Origin = USER_ORIGIN.FACEBOOK });
            status = repo.RetrievePassword(Language.ptBR, "email2@email.com");
            Assert.AreEqual(status, PASSWORD_RETRIEVAL_STATUS.EMAIL_LINKED_TO_REMOTE_ACCOUNT);
            A.CallTo(() => userRepo.Exists("email2@email.com")).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => userRepo.Get("email2@email.com")).MustHaveHappened(Repeated.Exactly.Once);
            //Email existe e está cadastrado numa conta local
            A.CallTo(() => userRepo.Exists("email3@email.com")).Returns(true);
            A.CallTo(() => userRepo.Get("email3@email.com")).Returns(new User { FullName = "fullname", Email = "email3@email.com", Password = "password", Origin = USER_ORIGIN.WEBSITE });
            status = repo.RetrievePassword(Language.ptBR, "email3@email.com");
            Assert.AreEqual(status, PASSWORD_RETRIEVAL_STATUS.PASSWORD_SENT);
            A.CallTo(() => userRepo.Exists("email3@email.com")).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => userRepo.Get("email3@email.com")).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => mailManager.SendMail(MAIL_SENDER.DEFAULT.GetDescription(), "email3@email.com", "Webjato - Lembrete de senha", A<string>.Ignored, true));
        }
    }
}