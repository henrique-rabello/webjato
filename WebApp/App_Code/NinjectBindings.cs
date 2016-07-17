using Amazon;
using Amazon.Route53;
using Amazon.S3;
using MongoDB.Driver;
using Ninject.Modules;
using SystemInterface.IO;
using SystemWrapper.IO;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;
using Webjato.Entities.Site;
using Webjato.Repositories.ContentRepos;
using Webjato.Utilities;

namespace WebV2.App_Code {
    public class NinjectBindings : NinjectModule {
        private string backgroundType;
        private ContentType contentType;

        public NinjectBindings() { }

        public NinjectBindings(string bgType) {
            backgroundType = bgType;
        }

        public NinjectBindings(ContentType type) {
            contentType = type;
        }

        public override void Load() {
            var util = new Utilities();
            Bind<MongoCollection<User>>().ToMethod<MongoCollection<User>>(x => util.GetCollection<User>()).InSingletonScope();
            Bind<MongoCollection<Site>>().ToMethod<MongoCollection<Site>>(x => util.GetCollection<Site>()).InSingletonScope();
            Bind<MongoCollection<Page>>().ToMethod<MongoCollection<Page>>(x => util.GetCollection<Page>()).InSingletonScope();
            Bind<MongoCollection<OptionalFeature>>().ToMethod<MongoCollection<OptionalFeature>>(x => util.GetCollection<OptionalFeature>()).InSingletonScope();
            Bind<MongoCollection<Background>>().ToMethod<MongoCollection<Background>>(x => util.GetCollection<Background>()).InSingletonScope();
            Bind<MongoCollection<Header>>().ToMethod<MongoCollection<Header>>(x => util.GetCollection<Header>()).InSingletonScope();
            Bind<MongoCollection<Footer>>().ToMethod<MongoCollection<Footer>>(x => util.GetCollection<Footer>()).InSingletonScope();
            Bind<MongoCollection<Logo>>().ToMethod<MongoCollection<Logo>>(x => util.GetCollection<Logo>()).InSingletonScope();
            Bind<MongoCollection<Frame>>().ToMethod<MongoCollection<Frame>>(x => util.GetCollection<Frame>()).InSingletonScope();
            Bind<MongoCollection<TemporaryImage>>().ToMethod<MongoCollection<TemporaryImage>>(x => util.GetCollection<TemporaryImage>()).InSingletonScope();
            Bind<MongoCollection<Box>>().ToMethod<MongoCollection<Box>>(x => util.GetCollection<Box>()).InSingletonScope();
            Bind<MongoCollection<ContactForm>>().ToMethod<MongoCollection<ContactForm>>(x => util.GetCollection<ContactForm>()).InSingletonScope();
            Bind<MongoCollection<GoogleMaps>>().ToMethod<MongoCollection<GoogleMaps>>(x => util.GetCollection<GoogleMaps>()).InSingletonScope();
            Bind<MongoCollection<RegularImage>>().ToMethod<MongoCollection<RegularImage>>(x => util.GetCollection<RegularImage>()).InSingletonScope();
            Bind<MongoCollection<Line>>().ToMethod<MongoCollection<Line>>(x => util.GetCollection<Line>()).InSingletonScope();
            Bind<MongoCollection<LinkedImage>>().ToMethod<MongoCollection<LinkedImage>>(x => util.GetCollection<LinkedImage>()).InSingletonScope();
            Bind<MongoCollection<SocialPlugins>>().ToMethod<MongoCollection<SocialPlugins>>(x => util.GetCollection<SocialPlugins>()).InSingletonScope();
            Bind<MongoCollection<Text>>().ToMethod<MongoCollection<Text>>(x => util.GetCollection<Text>()).InSingletonScope();
            Bind<MongoCollection<Video>>().ToMethod<MongoCollection<Video>>(x => util.GetCollection<Video>()).InSingletonScope();
            Bind<MongoCollection<ExpandableImage>>().ToMethod<MongoCollection<ExpandableImage>>(x => util.GetCollection<ExpandableImage>()).InSingletonScope();
            Bind<MongoCollection<Publish>>().ToMethod<MongoCollection<Publish>>(x => util.GetCollection<Publish>()).InSingletonScope();
            Bind<AuxiliaryConstants>().ToMethod<AuxiliaryConstants>(x => new AuxiliaryConstants {
                TemporaryFolder = Constants.TmpFolder,
                S3Bucket = Constants.S3Bucket,
                Route53HostedZoneId = Constants.Route53HostedZoneId,
                Route53RecordSetHostedZoneId = Constants.Route53RecordSetHostedZoneId,
                S3BucketSuffix = Constants.S3BucketSuffix,
                PathSourceFilesForPublishing = Constants.PathSourceFilesForPublishing,
                SubdomainPublishingAddress = Constants.SubdomainPublishingAddress,
                PathClientSites = Constants.PathClientSites,
                DefaultApplicationPool = Constants.DefaultApplicationPool
            }).InSingletonScope();
            Bind<IAmazonS3>().ToMethod<AmazonS3Client>(x => new AmazonS3Client(Constants.AwsAccessKey, Constants.AwsSecretKey, RegionEndpoint.USEast1)).InSingletonScope();
            Bind<IAmazonRoute53>().ToMethod<AmazonRoute53Client>(x => new AmazonRoute53Client(Constants.AwsAccessKey, Constants.AwsSecretKey, RegionEndpoint.USEast1)).InSingletonScope();
            Bind<ISmtpClient>().To<RealSmtpClient>();
            Bind<IPath>().To<PathWrap>();
            Bind<IFile>().To<FileWrap>();
            Bind<IDirectory>().To<DirectoryWrap>();
            Bind<MailServerConfig>().ToMethod<MailServerConfig>(x => new MailServerConfig { HostURL = Constants.MailHost, HostLogin = Constants.MailLogin, HostPwd = Constants.MailPassword });
            if (backgroundType == "Header") {
                Bind<BackgroundBase>().To<Header>();
            }
            if (backgroundType == "Background") {
                Bind<BackgroundBase>().To<Background>();
            }
            switch (contentType) {
                case ContentType.BOX: Bind<IContentBaseRepository>().To<BoxRepository>(); break;
                case ContentType.CONTACT_FORM: Bind<IContentBaseRepository>().To<ContactFormRepository>(); break;
                case ContentType.GOOGLE_MAPS: Bind<IContentBaseRepository>().To<GoogleMapsRepository>(); break;
                case ContentType.IMAGE: Bind<IContentBaseRepository>().To<RegularImageRepository>(); break;
                case ContentType.LINE: Bind<IContentBaseRepository>().To<LineRepository>(); break;
                case ContentType.LINKED_IMAGE: Bind<IContentBaseRepository>().To<LinkedImageRepository>(); break;
                case ContentType.EXPANDABLE_IMAGE: Bind<IContentBaseRepository>().To<ExpandableImageRepository>(); break;
                case ContentType.SOCIAL_PLUGINS: Bind<IContentBaseRepository>().To<SocialPluginRepository>(); break;
                case ContentType.TEXT: Bind<IContentBaseRepository>().To<TextRepository>(); break;
                case ContentType.VIDEO: Bind<IContentBaseRepository>().To<VideoRepository>(); break;
            }
        }
    }
}