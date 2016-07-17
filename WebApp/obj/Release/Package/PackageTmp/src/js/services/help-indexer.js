/// <reference path="../typings/angular-1.2.d.ts" />
/// <reference path="../entities/help/HelpBit.ts" />
/// <reference path="../typings/underscore.d.ts" />
angular.module("WebjatoServices").service("HelpIndexer", function (ContentType) {
    var folder = "/help/";
    var items = [
        new HelpBit("main", "main.html", false),
        new HelpBit("config/size", "config-size.html", false),
        new HelpBit("config/align", "config-align.html", false),
        new HelpBit("config/title", "config-title.html", false),
        new HelpBit("config/pages", "config-pages.html", false),
        new HelpBit("config/position", "config-position.html", false),
        new HelpBit("config/finish", "config-finish.html", false),
        new HelpBit("visual/bg", "visual-bg.html", false),
        new HelpBit("visual/header", "visual-header.html", false),
        new HelpBit("visual/footer", "visual-footer.html", false),
        new HelpBit("visual/logo", "visual-logo.html", false),
        new HelpBit("visual/menu", "visual-menu.html", false),
        new HelpBit("visual/page", "visual-page.html", false),
        new HelpBit("visual/finish", "visual-finish.html", false),
        new HelpBit("content/start", "content-start.html", false),
        new HelpBit("content/text", "content-text.html", false),
        new HelpBit("content/box", "content-box.html", false),
        new HelpBit("content/line", "content-line.html", false),
        new HelpBit("content/image-simple", "content-image-simple.html", false),
        new HelpBit("content/image-expandable", "content-image-expandable.html", false),
        new HelpBit("content/image-linked", "content-image-linked.html", false),
        new HelpBit("content/video", "content-video.html", false),
        new HelpBit("content/map", "content-map.html", false),
        new HelpBit("content/social", "content-social.html", false),
        new HelpBit("content/contact-form", "content-contact-form.html", false),
        new HelpBit("content/move", "content-move.html", false),
        new HelpBit("content/duplicate", "content-duplicate.html", false),
        new HelpBit("publish/address", "publish-address.html", false),
        new HelpBit("publish/display", "publish-display.html", false),
        new HelpBit("publish/share", "publish-share.html", false),
        new HelpBit("publish/hide", "publish-hide.html", false)
    ];
    return {
        GetUrl: function (id) {
            return folder + _.find(items, function (item) { return item.Id === id; }).Url;
        },
        GetIdByContentType: function (type) {
            switch (type) {
                case ContentType.BOX: return "content/box";
                case ContentType.CONTACT_FORM: return "content/contact-form";
                case ContentType.MAPS: return "content/map";
                case ContentType.IMAGE: return "content/image-simple";
                case ContentType.LINKED_IMAGE: return "content/image-linked";
                case ContentType.LINE: return "content/line";
                case ContentType.SOCIAL: return "content/social";
                case ContentType.TEXT: return "content/text";
                case ContentType.VIDEO: return "content/video";
                case ContentType.EXPANDABLE_IMAGE: return "content/image-expandable";
            }
        }
    };
});
//# sourceMappingURL=help-indexer.js.map