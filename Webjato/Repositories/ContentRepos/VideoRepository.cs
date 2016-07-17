using MongoDB.Bson;
using MongoDB.Driver;
using System;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;
using Webjato.Repositories.SiteRepos;
using Webjato.Utilities;

namespace Webjato.Repositories.ContentRepos {
    public class VideoRepository : ContentBaseRepository<Video> {
        private MongoCollection<Video> db;
        private ContentUtilities utils;

        public VideoRepository(MongoCollection<Video> collection, ContentUtilities contentUtilities)
            : base(collection, contentUtilities) {
            db = collection;
            utils = contentUtilities;
        }

        public virtual Video Create(ObjectId siteId, ObjectId pageId, VideoType videoType, int zindex) {
            var video = Create(siteId, pageId, 200, 200, zindex);
            video.VideoType = videoType;
            video.VideoId = "";
            video.Size = NormalizeVideoSize(480);
            db.Save(video);
            return video;
        }

        public virtual Video Update(Video video) {
            var myVideo = Get(video.Id);
            utils.AuthenticateContent(myVideo, video);
            myVideo.VideoId = video.VideoId;
            myVideo.Size = NormalizeVideoSize(video.Size.Width);
            myVideo.Position = utils.NormalizePosition(video.Position);
            myVideo.VideoType = video.VideoType;
            myVideo.Updated = DateTime.UtcNow;
            db.Save(myVideo);
            return myVideo;
        }

        public virtual Size NormalizeVideoSize(int width) {
            switch (width) {
                case 414:
                    return new Size { Width = 414, Height = 233 };
                case 480:
                    return new Size { Width = 480, Height = 270 };
                case 870:
                    return new Size { Width = 870, Height = 489 };
                case 1000:
                    return new Size { Width = 1000, Height = 563 };
                default:
                    throw new ArgumentException("[WJ] Unknown video width " + width.ToString());
            }
        }

        public Video Duplicate(Video original, ObjectId targetSite, ObjectId targetPage, int zindex) {
            var delta = (original.PageId == targetPage) ? 50 : 0;
            var duplicated = base.Create(targetSite, targetPage, original.Position.X + delta, original.Position.Y + delta, zindex);
            duplicated.VideoType = original.VideoType;
            duplicated.VideoId = original.VideoId;
            duplicated.Size = original.Size;
            db.Save(duplicated);
            return duplicated;
        }
    }
}