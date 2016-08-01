using MongoDB.Bson;
using Ninject;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Security;
using Webjato.Entities;
using Webjato.Entities.Enums;
using Webjato.Repositories;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class UserController : ApiController {
        [HttpPost]
        public bool Post(string email, string password, string fullname) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<AccountRepository>().NewRegularAccount(email, password, fullname, Webjato.Entities.Enums.Roles.Regular);
            }
        }

        [HttpPost]
        public bool Facebook(string email, string fullname, string remoteid, string town) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<AccountRepository>().NewFacebookAccount(email, fullname, remoteid, town);
            }
        }

        [HttpPost]
        public void Login(string email, string password) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var repo = kernel.Get<UserRepository>();
                if (!repo.Exists(email, password)) {
                    throw new HttpResponseException(HttpStatusCode.Unauthorized);
                }
                var user = repo.Get(email);
                FormsAuthentication.SetAuthCookie(user.Id.ToString(), false);
            }
        }

        [HttpPost]
        public void LoginFacebook(string fbid, string email) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var repo = kernel.Get<UserRepository>();
                if (!repo.Exists(email, fbid, USER_ORIGIN.FACEBOOK)) {
                    throw new HttpResponseException(HttpStatusCode.Unauthorized);
                }
                var user = repo.Get(email);
                FormsAuthentication.SetAuthCookie(user.Id.ToString(), false);
            }
        }

        [HttpPost]
        public PASSWORD_RETRIEVAL_STATUS RetrievePassword(Language language, string email) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<AccountRepository>().RetrievePassword(language, email);
            }
        }

        [Authorize]
        [HttpPost]
        public void Logout() {
            FormsAuthentication.SignOut();
        }

        [Authorize]
        [HttpGet]
        public UserBase Get() {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel.Get<UserRepository>().Get(new ObjectId(User.Identity.Name)).ToUserBase();
            }
        }

        [Authorize]
        [HttpGet]
        public List<UserBase> GetAll() {
            if (!new Utilities().GetUserData(User.Identity.Name).IsAdmin) {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);
            }
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                return kernel
                            .Get<UserRepository>()
                            .GetAll()
                            .OrderByDescending(x => x.Created)
                            .Select<User, UserBase>(x => x.ToUserBase())
                            .ToList();
            }
        }
    }
}