using Amazon.S3;
using Amazon.S3.Model;
using FakeItEasy;
using NUnit.Framework;
using Webjato.Repositories.AwsRepos;
using Webjato.Utilities;

namespace Webjato.Tests.Repositories.AwsRepos {
    [TestFixture]
    public class BucketRepositoryTest {
        private BucketRepository repo;
        private IAmazonS3 client;
        private AwsUtilities utils;

        [SetUp]
        public void BeforeEach() {
            client = A.Fake<IAmazonS3>();
            utils = A.Fake<AwsUtilities>();
            repo = new BucketRepository(client, utils);
        }

        [Test]
        public void BucketRepositoryCreate() {
            var name = "teste.com.br";
            A.CallTo(() => utils.BucketExists(name)).Returns(false);
            repo.Create(name);
            A.CallTo(() => client.PutBucket(A<PutBucketRequest>.That.Matches(x => x.BucketName == name))).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => client.PutBucketWebsite(A<PutBucketWebsiteRequest>.That.Matches(x => x.BucketName == name))).MustHaveHappened(Repeated.Exactly.Once);
            A.CallTo(() => client.PutBucketPolicy(A<PutBucketPolicyRequest>.That.Matches(x => x.BucketName == name))).MustHaveHappened(Repeated.Exactly.Once);
        }

        [Test]
        public void BucketRepositoryDoNotCreate() {
            var name = "teste.com.br";
            A.CallTo(() => utils.BucketExists(name)).Returns(true);
            repo.Create(name);
            A.CallTo(() => client.PutBucket(A<PutBucketRequest>.That.Matches(x => x.BucketName == name))).MustNotHaveHappened();
            A.CallTo(() => client.PutBucketWebsite(A<PutBucketWebsiteRequest>.That.Matches(x => x.BucketName == name))).MustNotHaveHappened();
            A.CallTo(() => client.PutBucketPolicy(A<PutBucketPolicyRequest>.That.Matches(x => x.BucketName == name))).MustNotHaveHappened();
        }

        [Test]
        public void BucketRepositoryDelete() {
            var name = "teste.com.br";
            repo.DeleteBucket(name);
            A.CallTo(() => utils.DeleteBucket(name)).MustHaveHappened(Repeated.Exactly.Once);
        }
    }
}
