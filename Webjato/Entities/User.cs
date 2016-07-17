using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Globalization;
using Webjato.Entities.Enums;

namespace Webjato.Entities {

    public class User : UserBase {
        public string Password { get; set; }

        public USER_ORIGIN Origin { get; set; }

        public string RemoteId { get; set; }

        public string Town { get; set; }

        public DateTime? Updated { get; set; }

        public UserBase ToUserBase() {
            return new UserBase {
                Id = this.Id,
                Email = this.Email,
                FullName = this.FullName,
                Role = this.Role,
                Created = this.Created
            };
        }
    }
}