using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Linq;
using Webjato.Entities;
using Webjato.Entities.Enums;

namespace Webjato.Repositories {
    public class UserRepository {
        private MongoCollection<User> db;
        public UserRepository(MongoCollection<User> collection) {
            db = collection;
        }

        public virtual User CreateUser(string email, string password, string fullName, Roles role) {
            return CreateUser(email, password, fullName, USER_ORIGIN.WEBSITE, null, null, role);
        }

        public virtual User CreateUser(string email, string fullName, USER_ORIGIN origin, string remoteId, string town) {
            return CreateUser(email, null, fullName, origin, remoteId, town, Roles.Regular);
        }

        public virtual User CreateUser(string email, string password, string fullName, USER_ORIGIN origin, string remoteId, string town, Roles role) {
            if (Exists(email)) throw new Exception("WJ => E-mail '" + email + "' is already in use.");
            var user = new User {
                Email = email.ToLower(),
                Password = password,
                FullName = fullName,
                Origin = origin,
                RemoteId = remoteId,
                Town = town,
                Role = role
            };
            db.Insert(user);
            return user;
        }

        public virtual bool Exists(string email) {
            return db.AsQueryable().Any(x => x.Email == email.ToLower());
        }

        public virtual bool Exists(string email, string password) {
            return db.AsQueryable().Any(x => x.Email == email.ToLower() && x.Password == password);
        }

        public virtual bool Exists(string email, string remoteId, USER_ORIGIN origin) {
            return db.AsQueryable().Any(x => x.Email == email.ToLower() && x.RemoteId == remoteId && x.Origin == origin);
        }

        public virtual User Get(string email) {
            if (!Exists(email)) {
                throw new Exception("WJ => Could not find User for the email '" + email + "'.");
            }
            return db.AsQueryable().Where(x => x.Email == email.ToLower()).Single();
        }

        public virtual User Get(ObjectId userId) {
            return db.AsQueryable().Single(x => x.Id == userId);
        }

        public System.Collections.Generic.List<User> GetAll() {
            return db.AsQueryable().ToList();
        }
    }
}