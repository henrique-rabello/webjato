namespace Webjato.Entities {
    public class AuxiliaryConstants {
        public string TemporaryFolder { get; set; }

        public string S3Bucket { get; set; }

        public string Route53HostedZoneId { get; set; }

        public string Route53RecordSetHostedZoneId { get; set; }

        public string S3BucketSuffix { get; set; }

        public string PathSourceFilesForPublishing { get; set; }

        public string SubdomainPublishingAddress { get; set; }

        public string PathClientSites { get; set; }

        public string DefaultApplicationPool { get; set; }
    }
}