using Amazon.S3;
using Amazon.S3.Model;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using Webjato.Utilities;

namespace Webjato.Repositories.AwsRepos {
    public class BucketRepository {
        private class PolicyStatement {
            public string Sid { get; set; }
            public string Effect { get; set; }
            public string Principal { get; set; }
            public string Action { get; set; }
            public string Resource { get; set; }
        }
        
        private class Policy {
            public List<PolicyStatement> Statement { get; set; }
            public Policy(string bucketName) {
                Statement = new List<PolicyStatement> {
                    new PolicyStatement {
                        Sid = "AddPerm",
                        Effect = "Allow",
                        Principal = "*",
                        Action = "s3:GetObject",
                        Resource = "arn:aws:s3:::" + bucketName + "/*"
                    }
                };
            }
        }

        private IAmazonS3 client;
        private AwsUtilities awsUtils;

        public BucketRepository(IAmazonS3 amazonClient, AwsUtilities awsUtilities) {
            client = amazonClient;
            awsUtils = awsUtilities;
        }

        public virtual void Create(string name) {
            if (awsUtils.BucketExists(name)) {
                return;
            }
            var newBucketRequest = new PutBucketRequest {
                BucketName = name
            };
            var setupWebsiteRquest = new PutBucketWebsiteRequest {
                BucketName = name,
                WebsiteConfiguration = new WebsiteConfiguration {
                    IndexDocumentSuffix = "index.html"
                }
            };
            var policyRequest = new PutBucketPolicyRequest {
                BucketName = name,
                Policy = JsonConvert.SerializeObject(new Policy(name))
            };
            client.PutBucket(newBucketRequest);
            client.PutBucketWebsite(setupWebsiteRquest);
            client.PutBucketPolicy(policyRequest);
        }

        public virtual void DeleteBucket(string name) {
            awsUtils.DeleteBucket(name);
        }

        public virtual List<string> GetFiles(string bucket) {
            var request = new ListObjectsRequest {
                BucketName = bucket
            };
            var response = client.ListObjects(request);
            return response.S3Objects.Select(x => x.Key).ToList();
        }

        public virtual void EmptyBucket(string bucket) {
            if (!awsUtils.BucketExists(bucket)) {
                return;
            }
            var files = GetFiles(bucket);
            var request = new DeleteObjectsRequest {
                BucketName = bucket,
                Objects = files.Select(x => new KeyVersion { Key = x, VersionId = null }).ToList()
            };
            client.DeleteObjects(request);
        }
    }
}