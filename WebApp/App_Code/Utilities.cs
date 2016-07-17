using MongoDB.Bson;
using MongoDB.Driver;
using Ninject;
using System;
using System.Globalization;
using System.IO;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Caching;
using Webjato.Entities;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;
using Webjato.Repositories;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;
using WebV2.App_Entities;

namespace WebV2.App_Code {
    public class Utilities {
        public MongoCollection<T> GetCollection<T>() {
            return new MongoClient(Constants.ConnectionString).GetServer().GetDatabase(Constants.DatabaseName).GetCollection<T>(typeof(T).Name);
        }

        public void OnItemRemovedFromCache(string s, object obj, CacheItemRemovedReason reason) {
            var data = (UserData)obj;
            using (var kernel = new StandardKernel(new NinjectBindings())) {
                var temporaryImagesRepository = kernel.Get<TemporaryImageRepository>();
                temporaryImagesRepository.DeleteBySite(data.SiteId);
            }
        }

        public UserData GetUserData(string identity) {
            var key = "USR_" + identity;
            if (HttpContext.Current.Cache.Get(key) == null) {
                var user = new UserRepository(GetCollection<User>()).Get(new ObjectId(identity));
                var site = new SiteRepository(GetCollection<Site>()).GetByUserId(user.Id);
                HttpContext.Current.Cache.Insert(
                    key,
                    new UserData {
                        UserId = user.Id,
                        SiteId = site.Id,
                        Role = user.Role
                    },
                    null,
                    Cache.NoAbsoluteExpiration,
                    new TimeSpan(0, Constants.AuthorizationTimeout + 1, 0),
                    CacheItemPriority.Default,
                    new CacheItemRemovedCallback(OnItemRemovedFromCache)
                );
            }
            return (UserData)HttpContext.Current.Cache.Get(key);
        }

        public T GetEnum<T>(string value) {
            return (T)Enum.Parse(typeof(T), value);
        }

        public T GetEnum<T>(int value) {
            return (T)Enum.Parse(typeof(T), value.ToString(CultureInfo.InvariantCulture));
        }

        public string Base64FileToDisk(string base64Data) {
            var rawData = Regex.Match(base64Data, @"data:(?<mime>[\w/\-\.]+);(?<encoding>\w+),(?<data>.*)").Groups["data"].Value;
            var byteArray = Convert.FromBase64String(rawData);
            var extension = "." + base64Data.Substring(0, base64Data.IndexOf(';')).Split('/')[1];
            var filepath = Path.Combine(Constants.TmpFolder, new General().GenerateRandomFileName(extension));
            File.WriteAllBytes(filepath, byteArray);
            return filepath;
        }
    }
}