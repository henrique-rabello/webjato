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
        private EmailTemplateRepository emailTemplateRepo;
        
        public AccountRepository(   UserRepository userRepository,
                                    SiteRepository siteRepository,
                                    PageRepository pageRepository,
                                    OptionalFeatureRepository optionalFeatureRepository,
                                    BackgroundRepository<Background> backgroundRepository,
                                    BackgroundRepository<Header> headerRepository,
                                    FooterRepository footerRepository,
                                    LogoRepository logoRepository,
                                    FrameRepository frameRepository,
                                    MailManager mailManager,
                                    EmailTemplateRepository emailTemplateRepository) {
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
            emailTemplateRepo = emailTemplateRepository;
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

        public virtual PASSWORD_RETRIEVAL_STATUS RetrievePassword(Language language, string email) {
            if (!userRepo.Exists(email)) {
                return PASSWORD_RETRIEVAL_STATUS.EMAIL_NOT_FOUND;
            }
            var user = userRepo.Get(email);
            if (user.Origin != USER_ORIGIN.WEBSITE) {
                return PASSWORD_RETRIEVAL_STATUS.EMAIL_LINKED_TO_REMOTE_ACCOUNT;
            }
            var mailTemplate = emailTemplateRepo.GetForgotMyPassword(language, user.FullName, user.Email, user.Password);
            mail.SendMail(MAIL_SENDER.DEFAULT.GetDescription(), email, mailTemplate.Subject, mailTemplate.Body, true);
            return PASSWORD_RETRIEVAL_STATUS.PASSWORD_SENT;
        }
    }
}