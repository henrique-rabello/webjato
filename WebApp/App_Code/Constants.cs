using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using WebV2.App_Entities;

namespace WebV2.App_Code {
    public static class Constants {
        public static int AuthorizationTimeout {
            get {
                return Int32.Parse(ConfigurationManager.AppSettings["authorizationTimeout"], CultureInfo.InvariantCulture);
            }
        }
        
        public static string ConnectionString {
            get {
                return ConfigurationManager.AppSettings["ConnectionString"];
            }
        }

        public static string DatabaseName {
            get {
                return ConfigurationManager.AppSettings["DatabaseName"];
            }
        }

        public static string MailHost {
            get {
                return ConfigurationManager.AppSettings["mailHost"];
            }
        }

        public static int MailPort {
            get {
                return Int32.Parse(ConfigurationManager.AppSettings["MailPort"]);
            }
        }

        public static string MailLogin {
            get {
                return ConfigurationManager.AppSettings["mailLogin"];
            }
        }

        public static string MailPassword {
            get {
                return ConfigurationManager.AppSettings["mailPassword"];
            }
        }

        public static string AwsAccessKey {
            get {
                return ConfigurationManager.AppSettings["AwsAccessKey"];
            }
        }

        public static string AwsSecretKey {
            get {
                return ConfigurationManager.AppSettings["AwsSecretKey"];
            }
        }

        public static string S3Bucket {
            get {
                return ConfigurationManager.AppSettings["S3Bucket"];
            }
        }

        public static string TmpFolder {
            get {
                return ConfigurationManager.AppSettings["TmpFolder"];
            }
        }

        public static string TmpWebFolder {
            get {
                return ConfigurationManager.AppSettings["TmpWebFolder"];
            }
        }

        public static string GetAssetRepositoryURL(ObjectId siteId) {
            return String.Format(ConfigurationManager.AppSettings["AssetRepositoryUrl"], siteId.ToString());
        }

        public static string Route53HostedZoneId {
            get {
                return ConfigurationManager.AppSettings["Route53HostedZoneId"];
            }
        }

        public static string Route53RecordSetHostedZoneId {
            get {
                return ConfigurationManager.AppSettings["Route53RecordSetHostedZoneId"];
            }
        }

        public static string S3BucketSuffix {
            get {
                return ConfigurationManager.AppSettings["S3BucketSuffix"];
            }
        }

        public static string PathSourceFilesForPublishing {
            get {
                return ConfigurationManager.AppSettings["PathSourceFilesForPublishing"];
            }
        }

        public static string SubdomainPublishingAddress {
            get {
                return ConfigurationManager.AppSettings["SubdomainPublishingAddress"];
            }
        }

        public static string PathClientSites {
            get {
                return ConfigurationManager.AppSettings["PathClientSites"];
            }
        }

        public static string DefaultApplicationPool {
            get {
                return ConfigurationManager.AppSettings["DefaultApplicationPool"];
            }
        }

        public static List<DefaultUser> DefaultUsers {
            get {
                var u1 = new DefaultUser(ConfigurationManager.AppSettings["TemplateCreator"]);
                var u2 = new DefaultUser(ConfigurationManager.AppSettings["DefaultUser1"]);
                var u3 = new DefaultUser(ConfigurationManager.AppSettings["DefaultUser2"]);
                return new List<DefaultUser> { u1, u2, u3 };
            }
        }
    }
}