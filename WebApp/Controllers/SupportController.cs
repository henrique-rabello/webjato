using Ninject;
using System;
using System.Web.Http;
using Webjato.Utilities;
using WebV2.App_Code;

namespace WebV2.Controllers {
    public class SupportController : ApiController {
        public class SupportModel {
            public string name { get; set; }
            public string email { get; set; }
            public string subject { get; set; }
            public string message { get; set; }
        }

        [HttpPost]
        public void Post(SupportModel model) {
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var body = String.Format("De: {0}&nbsp;({1})<br />Assunto: {2}<br />Mensagem: {3}", model.name, model.email, model.subject, model.message);
                kernel.Get<MailManager>().SendMail("webjato@webjato.com.br", "webjato@webjato.com.br", "Suporte", body, true);
            }
        }
    }
}
