using FakeItEasy;
using MongoDB.Bson;
using NUnit.Framework;
using SystemInterface.IO;
using Webjato.Entities;
using Webjato.Entities.Site;
using Webjato.Repositories;
using Webjato.Repositories.AwsRepos;
using Webjato.Repositories.ContentRepos;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;

namespace Webjato.Tests.Utilities {
    [TestFixture]
    public class PublisherTest {
        private PublishRepository publishRepo;
        private SiteRepository siteRepo;
        private ContentManager contMngr;
        private FrameRepository frmRepo;
        private PageRepository pageRepo;
        private BackgroundRepository<Background> bgRepo;
        private BackgroundRepository<Header> headerRepo;
        private FooterRepository footerRepo;
        private LogoRepository logoRepo;
        private S3Repository s3Repo;
        private BucketRepository bucketRepo;
        private Route53Repository route53Repo;
        private AuxiliaryConstants consts;
        private IPath path;
        private IFile file;
        private IDirectory directory;
        private General utils;
        private AwsUtilities awsUtils;
        private Publisher publisher;
        private IISRepository iisRepo;

        [SetUp]
        public void BeforeEach() {
            publishRepo = A.Fake<PublishRepository>(x => x.WithArgumentsForConstructor(new object[] { null }));
            siteRepo = A.Fake<SiteRepository>(x => x.WithArgumentsForConstructor(new object[] { null }));
            contMngr = A.Fake<ContentManager>(x => x.WithArgumentsForConstructor(new object[] { null, null, null, null, null, null, null, null, null, null }));
            frmRepo = A.Fake<FrameRepository>(x => x.WithArgumentsForConstructor(new object[] { null }));
            pageRepo = A.Fake<PageRepository>(x => x.WithArgumentsForConstructor(new object[] { null, null, null, null }));
            bgRepo = A.Fake<BackgroundRepository<Background>>(x => x.WithArgumentsForConstructor(new object[] { null, null, null, null, null, null }));
            headerRepo = A.Fake<BackgroundRepository<Header>>(x => x.WithArgumentsForConstructor(new object[] { null, null, null, null, null, null }));
            footerRepo = A.Fake<FooterRepository>(x => x.WithArgumentsForConstructor(new object[] { null }));
            logoRepo = A.Fake<LogoRepository>(x => x.WithArgumentsForConstructor(new object[] { null, null, null, null, null, null, new AuxiliaryConstants(), null }));
            s3Repo = A.Fake<S3Repository>();
            bucketRepo = A.Fake<BucketRepository>();
            route53Repo = A.Fake<Route53Repository>();
            consts = new AuxiliaryConstants {
                PathSourceFilesForPublishing = @"c:\Tpl\",
                TemporaryFolder = @"c:\Tmp\"
            };
            path = A.Fake<IPath>();
            file = A.Fake<IFile>();
            directory = A.Fake<IDirectory>();
            utils = A.Fake<General>();
            awsUtils = A.Fake<AwsUtilities>();
            iisRepo = A.Fake<IISRepository>();
            publisher = new Publisher(publishRepo, siteRepo, contMngr, frmRepo, pageRepo, bgRepo, headerRepo, footerRepo, logoRepo, s3Repo, bucketRepo, route53Repo, consts, path, file, directory, utils, awsUtils, iisRepo);
        }

        [Test]
        public void Publisher_SiteToJson() {
            var id = ObjectId.GenerateNewId();
            A.CallTo(() => siteRepo.Get(id)).Returns(null);
            A.CallTo(() => contMngr.GetBySite(id)).Returns(null);
            A.CallTo(() => frmRepo.Get(id)).Returns(null);
            A.CallTo(() => pageRepo.GetBySite(id)).Returns(null);
            A.CallTo(() => bgRepo.Get(id)).Returns(null);
            A.CallTo(() => headerRepo.Get(id)).Returns(null);
            A.CallTo(() => footerRepo.Get(id)).Returns(null);
            A.CallTo(() => logoRepo.Get(id)).Returns(null);
            var json = publisher.SiteToJson(id);
            Assert.IsNotEmpty(json);
            A.CallTo(() => siteRepo.Get(id)).MustHaveHappened();
            A.CallTo(() => contMngr.GetBySite(id)).MustHaveHappened();
            A.CallTo(() => frmRepo.Get(id)).MustHaveHappened();
            A.CallTo(() => pageRepo.GetBySite(id)).MustHaveHappened();
            A.CallTo(() => bgRepo.Get(id)).MustHaveHappened();
            A.CallTo(() => headerRepo.Get(id)).MustHaveHappened();
            A.CallTo(() => footerRepo.Get(id)).MustHaveHappened();
            A.CallTo(() => logoRepo.Get(id)).MustHaveHappened();
        }
    }
}
