using System;
using Webjato.Entities.Enums;

namespace WebV2.App_Entities {
    public class DefaultUser {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Roles Role { get; set; }
        public DefaultUser(string configData) {
            var data = configData.Split(new char[] { ';' });
            FullName = data[0];
            Email = data[1];
            Password = data[2];
            Role = (Roles)Enum.Parse(typeof(Roles), data[3]);
        }
    }
}