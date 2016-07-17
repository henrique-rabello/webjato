using Microsoft.Web.Administration;
using System.Linq;
using Webjato.Entities;

namespace Webjato.Repositories {
    public class IISRepository {
        private AuxiliaryConstants consts;
        private ServerManager iis;

        public IISRepository(AuxiliaryConstants auxiliaryConstants) {
            consts = auxiliaryConstants;
            iis = new ServerManager();
        }

        public void AddSite(string name, string host, string folder) {
            var site = iis.Sites[name];
            if (site == null) {
                site = iis.Sites.Add(name, folder, 80);
            }
            ApplyBinding(site, "*", 80, host);
            site.ApplicationDefaults.ApplicationPoolName = consts.DefaultApplicationPool;
            iis.CommitChanges();
        }

        public void ApplyBinding(Site site, string ip, int port, string host) {
            var protocol = "http";
            var bindingInfo = string.Format("{0}:{1}:{2}", ip, port.ToString(), host);
            if (site.Bindings.Any(x => x.Protocol == protocol && x.BindingInformation == bindingInfo)) {
                return;
            }
            while (site.Bindings.Count > 0) {
                site.Bindings.Remove(site.Bindings[0]);
            }
            var binding = site.Bindings.CreateElement();
            binding.Protocol = protocol;
            binding.BindingInformation = bindingInfo;
            site.Bindings.Add(binding);
        }

        public virtual void RemoveSite(string name) {
            var site = iis.Sites[name];
            if (site == null) {
                return;
            }
            iis.Sites.Remove(site);
            iis.CommitChanges();
        }
    }
}