using Ninject;
using Webjato.Entities.Enums;
using Webjato.Repositories;
using WebV2.App_Code;

namespace WebV2.App_Start {
    public class WJConfig {
        public static void RegisterTemplateCreator() {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var userRepo = kernel.Get<UserRepository>();
                var accountRepo = kernel.Get<AccountRepository>();
                var defaultUsers = Constants.DefaultUsers;
                foreach(var user in defaultUsers) {
                    if (userRepo.Exists(user.Email)) {
                        continue;
                    }
                    accountRepo.NewRegularAccount(user.Email, user.Password, user.FullName, user.Role);
                }
            }
        }
    }
}