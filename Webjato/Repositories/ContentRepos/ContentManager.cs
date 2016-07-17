using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;

namespace Webjato.Repositories.ContentRepos {
    public class ContentManager {
        private BoxRepository boxRepo;
        private ContactFormRepository contactFormRepo;
        private GoogleMapsRepository googleMapsRepo;
        private LineRepository lineRepo;
        private LinkedImageRepository linkedImageRepo;
        private RegularImageRepository regularImageRepo;
        private ExpandableImageRepository expandableImageRepo;
        private SocialPluginRepository socialPluginRepo;
        private TextRepository textRepo;
        private VideoRepository videoRepo;

        public ContentManager(  BoxRepository boxRepository,
                                ContactFormRepository contactFormRepository,
                                GoogleMapsRepository googleMapsRepository,
                                LineRepository lineRepository,
                                LinkedImageRepository linkedImageRepository,
                                RegularImageRepository regularImageRepository,
                                ExpandableImageRepository expandableImageRepository,
                                SocialPluginRepository socialPluginRepository,
                                TextRepository textRepository,
                                VideoRepository videoRepository) {
            boxRepo = boxRepository;
            contactFormRepo = contactFormRepository;
            googleMapsRepo = googleMapsRepository;
            lineRepo = lineRepository;
            linkedImageRepo = linkedImageRepository;
            regularImageRepo = regularImageRepository;
            expandableImageRepo = expandableImageRepository;
            socialPluginRepo = socialPluginRepository;
            textRepo = textRepository;
            videoRepo = videoRepository;
        }

        public virtual List<ContentBase> GetBySite(ObjectId siteId) {
            var contentList = new List<ContentBase>();
            contentList.AddRange(boxRepo.GetBySite(siteId).Cast<ContentBase>());
            contentList.AddRange(contactFormRepo.GetBySite(siteId).Cast<ContentBase>());
            contentList.AddRange(googleMapsRepo.GetBySite(siteId).Cast<ContentBase>());
            contentList.AddRange(lineRepo.GetBySite(siteId).Cast<ContentBase>());
            contentList.AddRange(linkedImageRepo.GetBySite(siteId).Cast<ContentBase>());
            contentList.AddRange(regularImageRepo.GetBySite(siteId).Cast<ContentBase>());
            contentList.AddRange(expandableImageRepo.GetBySite(siteId).Cast<ContentBase>());
            contentList.AddRange(socialPluginRepo.GetBySite(siteId).Cast<ContentBase>());
            contentList.AddRange(textRepo.GetBySite(siteId).Cast<ContentBase>());
            contentList.AddRange(videoRepo.GetBySite(siteId).Cast<ContentBase>());
            return contentList;
        }

        public virtual List<ContentBase> GetByPage(ObjectId pageId) {
            var contentList = new List<ContentBase>();
            contentList.AddRange(boxRepo.GetByPage(pageId).Cast<ContentBase>());
            contentList.AddRange(contactFormRepo.GetByPage(pageId).Cast<ContentBase>());
            contentList.AddRange(googleMapsRepo.GetByPage(pageId).Cast<ContentBase>());
            contentList.AddRange(lineRepo.GetByPage(pageId).Cast<ContentBase>());
            contentList.AddRange(linkedImageRepo.GetByPage(pageId).Cast<ContentBase>());
            contentList.AddRange(regularImageRepo.GetByPage(pageId).Cast<ContentBase>());
            contentList.AddRange(expandableImageRepo.GetByPage(pageId).Cast<ContentBase>());
            contentList.AddRange(socialPluginRepo.GetByPage(pageId).Cast<ContentBase>());
            contentList.AddRange(textRepo.GetByPage(pageId).Cast<ContentBase>());
            contentList.AddRange(videoRepo.GetByPage(pageId).Cast<ContentBase>());
            return contentList;
        }

        public virtual List<ContentBase> GetImagesBySite(ObjectId siteId) {
            var contentList = new List<ContentBase>();
            contentList.AddRange(linkedImageRepo.GetBySite(siteId).Cast<ContentBase>());
            contentList.AddRange(regularImageRepo.GetBySite(siteId).Cast<ContentBase>());
            contentList.AddRange(expandableImageRepo.GetBySite(siteId).Cast<ContentBase>());
            return contentList;
        }

        public virtual void DeleteContent(ContentBase content) {
            var repo = GetRepository(content.Type);
            repo.Delete(content);
        }

        public virtual void UpdateContentsZIndex(List<ContentIndex> contents) {
            foreach (var content in contents) {
                GetRepository(content.Type).UpdateZIndex(content.Id, content.ZIndex);
            }
        }

        public virtual IContentBaseRepository GetRepository(ContentType type) {
            switch (type) {
                case ContentType.BOX: return boxRepo;
                case ContentType.CONTACT_FORM: return contactFormRepo;
                case ContentType.GOOGLE_MAPS: return googleMapsRepo;
                case ContentType.LINE: return lineRepo;
                case ContentType.LINKED_IMAGE: return linkedImageRepo;
                case ContentType.IMAGE: return regularImageRepo;
                case ContentType.EXPANDABLE_IMAGE: return expandableImageRepo;
                case ContentType.SOCIAL_PLUGINS: return socialPluginRepo;
                case ContentType.TEXT: return textRepo;
                case ContentType.VIDEO: return videoRepo;
            }
            throw new ArgumentException("[WJ] Unknown content type '" + type.ToString() + "'.");
        }

        public virtual void UpdatePositionY(ObjectId siteId, int deltaY) {
            var siteContents = GetBySite(siteId);
            foreach (var content in siteContents) {
                content.Position.Y += deltaY;
                GetRepository(content.Type).UpdatePosition(content);
            }
        }

        public virtual List<ContentBase> CopyContents(ObjectId sourcePage, ObjectId targetSite, ObjectId targetPage, int zindex) {
            var result = new List<ContentBase>();
            var items = GetByPage(sourcePage);
            for (var i = 0; i < items.Count; i++) {
                var item = items[i];
                switch (item.Type) {
                    case ContentType.BOX:
                        result.Add(boxRepo.Duplicate((Box)item, targetSite, targetPage, zindex + i));
                        break;
                    case ContentType.CONTACT_FORM:
                        result.Add(contactFormRepo.Duplicate((ContactForm)item, targetSite, targetPage, zindex + i));
                        break;
                    case ContentType.EXPANDABLE_IMAGE:
                        result.Add(expandableImageRepo.Duplicate((ExpandableImage)item, targetSite, targetPage, zindex + i));
                        break;
                    case ContentType.GOOGLE_MAPS:
                        result.Add(googleMapsRepo.Duplicate((GoogleMaps)item, targetSite, targetPage, zindex + i));
                        break;
                    case ContentType.IMAGE:
                        result.Add(regularImageRepo.Duplicate((RegularImage)item, targetSite, targetPage, zindex + i));
                        break;
                    case ContentType.LINE:
                        result.Add(lineRepo.Duplicate((Line)item, targetSite, targetPage, zindex + i));
                        break;
                    case ContentType.LINKED_IMAGE:
                        result.Add(linkedImageRepo.Duplicate((LinkedImage)item, targetSite, targetPage, zindex + i));
                        break;
                    case ContentType.SOCIAL_PLUGINS:
                        result.Add(socialPluginRepo.Duplicate((SocialPlugins)item, targetSite, targetPage, zindex + i));
                        break;
                    case ContentType.TEXT:
                        result.Add(textRepo.Duplicate((Text)item, targetSite, targetPage, zindex + i));
                        break;
                    case ContentType.VIDEO:
                        result.Add(videoRepo.Duplicate((Video)item, targetSite, targetPage, zindex + i));
                        break;
                    default: throw new Exception("[WJ] Cannot find a repository for content type '" + item.Type.ToString() + "'.");
                }
            }
            return result;
        }
    }
}