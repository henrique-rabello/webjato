using Amazon.S3;
using Amazon.S3.Transfer;
using Amazon.S3.Util;
using System.IO;

namespace Webjato.Utilities {
    public class AwsUtilities {
        private IAmazonS3 s3Client;

        public AwsUtilities(IAmazonS3 awsS3Client) {
            s3Client = awsS3Client;
        }

        public virtual bool BucketExists(string bucketName) {
            return AmazonS3Util.DoesS3BucketExist(s3Client, bucketName);
        }

        public virtual void DeleteBucket(string bucketName) {
            if (!BucketExists(bucketName)) {
                return;
            }
            AmazonS3Util.DeleteS3BucketWithObjects(s3Client, bucketName);
        }

        public virtual void UploadFolder(string folder, string bucketName) {
            var transfer = new TransferUtility(s3Client);
            transfer.UploadDirectory(folder, bucketName);
            var subDirs = new DirectoryInfo(folder).GetDirectories();
            foreach (var subDir in subDirs) {
                UploadFolder(subDir.FullName, bucketName + "/" + subDir.Name);
            }
        }
    }
}