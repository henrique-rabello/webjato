using System;
using Webjato.Entities;
using Webjato.Entities.Content;
using Webjato.Entities.Enums;

namespace Webjato.Utilities {
    public class ContentUtilities {
        public virtual void AuthenticateContent(ContentBase source, ContentBase target) {
            if (source.Id != target.Id ||
                source.SiteId != target.SiteId ||
                source.PageId != target.PageId) {
                    throw new Exception("WJ => The content objects provided do not seem to be the same. Source id '" + source.Id.ToString() + "', target id '" + target.Id.ToString() + "'.");
            }
        }

        public virtual Position NormalizePosition(Position position) {
            if (position.X < 0) {
                position.X = 0;
            }
            if (position.Y < 0) {
                position.Y = 0;
            }
            return position;
        }

        public virtual ContentType GetContentType<T>() where T : ContentBase {
            if (typeof(T).Equals(typeof(Box))) {
                return ContentType.BOX;
            }
            if (typeof(T).Equals(typeof(Text))) {
                return ContentType.TEXT;
            }
            if (typeof(T).Equals(typeof(Line))) {
                return ContentType.LINE;
            }
            if (typeof(T).Equals(typeof(ContactForm))) {
                return ContentType.CONTACT_FORM;
            }
            if (typeof(T).Equals(typeof(GoogleMaps))) {
                return ContentType.GOOGLE_MAPS;
            }
            if (typeof(T).Equals(typeof(RegularImage))) {
                return ContentType.IMAGE;
            }
            if (typeof(T).Equals(typeof(LinkedImage))) {
                return ContentType.LINKED_IMAGE;
            }
            if (typeof(T).Equals(typeof(SocialPlugins))) {
                return ContentType.SOCIAL_PLUGINS;
            }
            if (typeof(T).Equals(typeof(Video))) {
                return ContentType.VIDEO;
            }
            if (typeof(T).Equals(typeof(ExpandableImage))) {
                return ContentType.EXPANDABLE_IMAGE;
            }
            throw new Exception("WJ => Unknown content type '" + typeof(T).Name + "'.");
        }
    }
}