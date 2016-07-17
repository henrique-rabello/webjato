using System.ComponentModel;

namespace Webjato.Entities.Enums {
    public enum ContentType {
        [Description("box")]
        BOX = 1,
        [Description("contact-form")]
        CONTACT_FORM = 2,
        [Description("maps")]
        GOOGLE_MAPS = 3,
        [Description("image")]
        IMAGE = 4,
        [Description("linked-image")]
        LINKED_IMAGE = 5,
        [Description("line")]
        LINE = 6,
        [Description("social")]
        SOCIAL_PLUGINS = 7,
        [Description("text")]
        TEXT = 8,
        [Description("video")]
        VIDEO = 9,
        [Description("expandable-image")]
        EXPANDABLE_IMAGE = 10
    }
}