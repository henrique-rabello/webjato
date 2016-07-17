using Amazon.Route53;
using Amazon.Route53.Model;
using System;
using System.Collections.Generic;
using Webjato.Entities;
using System.Linq;

namespace Webjato.Repositories.AwsRepos {
    public class Route53Repository {
        private IAmazonRoute53 client;
        private AuxiliaryConstants consts;

        public Route53Repository(IAmazonRoute53 route53Client, AuxiliaryConstants auxConst) {
            client = route53Client;
            consts = auxConst;
        }

        internal virtual void SendChangeRequest(string name, ChangeAction action) {
            var request = new ChangeResourceRecordSetsRequest {
                HostedZoneId = consts.Route53HostedZoneId,
                ChangeBatch = new ChangeBatch {
                    Changes = new List<Change> {
                        new Change {
                            Action = action,
                            ResourceRecordSet = new ResourceRecordSet {
                                Name = name,
                                Type = RRType.A,
                                AliasTarget = new AliasTarget {
                                    HostedZoneId = consts.Route53RecordSetHostedZoneId,
                                    DNSName = consts.S3BucketSuffix,
                                    EvaluateTargetHealth = false
                                }
                            }
                        }
                    }
                }
            };
            client.ChangeResourceRecordSets(request);
        }

        public virtual void CreateRecordSet(string name) {
            if (RecordSetExists(name)) {
                return;
            }
            SendChangeRequest(name, ChangeAction.CREATE);
        }

        public virtual void DeleteRecordSet(string name) {
            if (!RecordSetExists(name)) {
                return;
            }
            SendChangeRequest(name, ChangeAction.DELETE);
        }

        public bool RecordSetExists(string name) {
            var request = new ListResourceRecordSetsRequest {
                HostedZoneId = consts.Route53HostedZoneId,
                MaxItems = "1",
                StartRecordName = name,
                StartRecordType = RRType.A
            };
            var response = client.ListResourceRecordSets(request);
            name = name + ".";
            return response.ResourceRecordSets.Any(x => x.Name == name);
        }
    }
}