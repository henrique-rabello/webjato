using Amazon.S3;
using Amazon.S3.Model;
using FakeItEasy;
using NUnit.Framework;
using Webjato.Entities;
using Webjato.Repositories.AwsRepos;

namespace Webjato.Tests.Repositories.AwsRepos {
	[TestFixture]
	public class S3RepositoryTest {
        IAmazonS3 client;
        S3Repository s3repo;

		[SetUp]
		public void Init() {
            client = A.Fake<IAmazonS3>();
            s3repo = new S3Repository(client, new AuxiliaryConstants { S3Bucket = TestConstants.S3Bucket });
		}

		[Test]
        public void S3RepositoryTest_S3Repository_PutObject() {
            s3repo.PutObject("my-test-file.txt", "file-on-s3.txt");
            A.CallTo(() => client.PutObject(A<PutObjectRequest>.Ignored)).MustHaveHappened();
		}

        [Test]
        public void S3RepositoryTest_DeleteObject() {
            s3repo.DeleteObject("file-to-be-deleted.txt");
            A.CallTo(() => client.DeleteObject(A<DeleteObjectRequest>.Ignored)).MustHaveHappened();
        }

        [Test]
        public void S3RepositoryTest_CopyObject() {
            s3repo.CopyObject("source-file.txt", "destination-file.txt");
            A.CallTo(() => client.CopyObject(A<CopyObjectRequest>.Ignored)).MustHaveHappened();
        }

        //[Test]
        //public void S3RepositoryTest_GetObject() {
        //    var response = A.Fake<GetObjectResponse>();
        //    A.CallTo(() => response.WriteResponseStreamToFile("local-file.txt")).DoesNothing();
        //    A.CallTo(() => client.GetObject(A<GetObjectRequest>.Ignored)).Returns(response);
        //    s3repo.GetObject("file-on-s3.txt", "local-file.txt");
        //    A.CallTo(() => client.GetObject(A<GetObjectRequest>.Ignored)).MustHaveHappened();
        //}
	}
}