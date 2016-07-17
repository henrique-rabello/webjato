using System.Configuration;

namespace Webjato.Tests {
    public class TestConstants {
        public static string ConnectionString {
            get {
                return ConfigurationManager.AppSettings["ConnectionString"];
            }
        }
        
        public static string Database {
            get {
                return ConfigurationManager.AppSettings["DatabaseName"];
            }
        }

        public static string AWSAccessKey {
            get {
                return ConfigurationManager.AppSettings["AwsAccessKey"];
            }
        }

        public static string AWSSecretKey {
            get {
                return ConfigurationManager.AppSettings["AwsSecretKey"];
            }
        }

        public static string S3Bucket {
            get {
                return ConfigurationManager.AppSettings["S3Bucket"];
            }
        }
    }
}