using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Webjato.Entities;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;

namespace Webjato.Repositories {
    public class AccountRepository {
        private UserRepository userRepo;
        private SiteRepository siteRepo;
        private PageRepository pageRepo;
        private OptionalFeatureRepository featureRepo;
        private BackgroundRepository<Background> bgRepo;
        private BackgroundRepository<Header> headerRepo;
        private FooterRepository footerRepo;
        private LogoRepository logoRepo;
        private FrameRepository frameRepo;
        private MailManager mail;
        
        public AccountRepository(   UserRepository userRepository,
                                    SiteRepository siteRepository,
                                    PageRepository pageRepository,
                                    OptionalFeatureRepository optionalFeatureRepository,
                                    BackgroundRepository<Background> backgroundRepository,
                                    BackgroundRepository<Header> headerRepository,
                                    FooterRepository footerRepository,
                                    LogoRepository logoRepository,
                                    FrameRepository frameRepository,
                                    MailManager mailManager) {
            userRepo = userRepository;
            siteRepo = siteRepository;
            pageRepo = pageRepository;
            featureRepo = optionalFeatureRepository;
            bgRepo = backgroundRepository;
            headerRepo = headerRepository;
            footerRepo = footerRepository;
            logoRepo = logoRepository;
            frameRepo = frameRepository;
            mail = mailManager;
        }

        public virtual bool NewRegularAccount(string email, string password, string fullname, Roles role) {
            if (userRepo.Exists(email)) return false;
            var user = userRepo.CreateUser(email, password, fullname, role);
            NewWebSite(user.Id);
            string mailBody = "Olá <b>" + user.FullName + "</b>, seja benvindo à Webjato!<br />" +
                                "Seu login: <b>" + user.Email + "</b><br />" +
                                "Sua senha: <b>" + user.Password + "</b>";
            mail.SendMail(MAIL_SENDER.DEFAULT.GetDescription(), user.Email, "Webjato - Benvindo", mailBody, true);
            return true;
        }

        public virtual bool NewFacebookAccount(string email, string fullname, string remoteid, string town) {
            User user;
            if (!userRepo.Exists(email)) {
                user = userRepo.CreateUser(email, fullname, USER_ORIGIN.FACEBOOK, remoteid, town);
                NewWebSite(user.Id);
                string mailBody = "Olá <b>" + fullname + "</b>, seja benvindo à Webjato!<br />";
                mail.SendMail(MAIL_SENDER.DEFAULT.GetDescription(), email, "Webjato - Benvindo", mailBody, true);
            }
            else {
                user = userRepo.Get(email);
            }
            return user.Origin == USER_ORIGIN.FACEBOOK;
        }

        public virtual void NewWebSite(ObjectId userId) {
            var site = siteRepo.CreateSite(userId);
            var firstPage = pageRepo.CreatePage(site.Id);
            pageRepo.UpdateTitle(firstPage.Id, "Home");
            pageRepo.CreatePage(site.Id);
            pageRepo.CreatePage(site.Id);
            pageRepo.CreatePage(site.Id);
            pageRepo.CreatePage(site.Id);
            pageRepo.CreatePage(site.Id);
            featureRepo.AssociateFeature(FEATURE.HELP, userId);
            bgRepo.CreateBackground(site.Id);
            headerRepo.CreateBackground(site.Id);
            footerRepo.CreateFooter(site.Id);
            logoRepo.CreateLogo(site.Id);
            frameRepo.CreateFrame(site.Id);
        }

        public virtual PASSWORD_RETRIEVAL_STATUS RetrievePassword(string email) {
            if (!userRepo.Exists(email)) {
                return PASSWORD_RETRIEVAL_STATUS.EMAIL_NOT_FOUND;
            }
            var user = userRepo.Get(email);
            if (user.Origin != USER_ORIGIN.WEBSITE) {
                return PASSWORD_RETRIEVAL_STATUS.EMAIL_LINKED_TO_REMOTE_ACCOUNT;
            }
            var mailBody =  "Prezado(a) Sr(a) <b>" + user.FullName + "</b>,<br /><br />" +
                            "Conforme solicitado, segue abaixo sua senha de acesso.<br /><br />" +
                            "<b>Identificação:</b> " + user.Email + "<br />" +
                            "<b>Senha:</b> " + user.Password + "<br /><br />" +
                            "Para alterar essa senha para outra à sua escolha, acesse nosso site, localize a opção \"Mudar Senha\" e troque-a.<br /><br />" +
                            "Sua senha é pessoal e intrasferível, portanto não a divulgue a terceiros.<br /><br /><br />" +
                            "Para qualquer apoio no que diz respeito ao seu relacionamento conosco, você pode sempre nos contactar diretamente usando os seguintes endereços:<br /><br />" +
                            "<b>Atendimento:</b><br />" +
                            "<a target=\"_blank\" href=\"http://www.webjato.com.br/contato.aspx\">http://www.webjato.com.br/contato.aspx</a><br /><br />" +
                            "<b>Suporte Técnico:</b><br />" +
                            "<a target=\"_blank\" href=\"http://www.webjato.com.br/central-de-suporte.aspx\">http://www.webjato.com.br/central-de-suporte.aspx</a><br /><br /><br />" +
                            "<b>Atenciosamente,</b><br />" +
                            "<b>WebJato.com.br</b>";
            mail.SendMail(MAIL_SENDER.DEFAULT.GetDescription(), email, "Webjato - Lembrete de senha", mailBody, true);
            return PASSWORD_RETRIEVAL_STATUS.PASSWORD_SENT;
        }
    }
}