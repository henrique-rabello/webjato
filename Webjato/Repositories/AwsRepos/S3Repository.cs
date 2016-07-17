using Amazon.S3;
using Amazon.S3.Model;
using Webjato.Entities;

namespace Webjato.Repositories.AwsRepos {
    public class S3Repository {
        private IAmazonS3 client;
        private string bucket;

        public S3Repository(IAmazonS3 amazonClient, AuxiliaryConstants auxConst) {
            client = amazonClient;
            bucket = auxConst.S3Bucket;
        }

        public virtual PutObjectResponse PutObject(string filePath, string key) {
            var request = new PutObjectRequest();
            request.BucketName = bucket;
            request.CannedACL = S3CannedACL.PublicRead;
            request.FilePath = filePath;
            request.Key = key;
            return client.PutObject(request);
        }

        public virtual void GetObject(string key, string targetfile) {
            var request = new GetObjectRequest();
            request.BucketName = bucket;
            request.Key = key;
            using (var response = client.GetObject(request)) {
                response.WriteResponseStreamToFile(targetfile);
            }
        }

        public virtual DeleteObjectResponse DeleteObject(string key) {
            var request = new DeleteObjectRequest();
            request.BucketName = bucket;
            request.Key = key;
            return client.DeleteObject(request);
        }

        public virtual CopyObjectResponse CopyObject(string sourceKey, string destinationKey) {
            var request = new CopyObjectRequest {
                SourceBucket = bucket,
                DestinationBucket = bucket,
                SourceKey = sourceKey,
                DestinationKey = destinationKey,
                CannedACL = S3CannedACL.PublicRead
            };
            return client.CopyObject(request);
        }
    }
}