/// <reference path="../typings/jquery.cookie.d.ts" />
/// <reference path="HelpItem.ts" />
var Help = (function () {
    function Help() {
        this.items = [];
        this.enabled = false;
        this.cookieHelpItems = "HelpItems";
        this.cookieHelpState = "HelpState";
        this.enabled = this.RetrieveHelpState();
        var identifiers = [
            "main",
            "config/size",
            "config/align",
            "config/title",
            "config/pages",
            "config/position",
            "visual/bg",
            "visual/header",
            "visual/footer",
            "visual/logo",
            "visual/menu",
            "visual/page",
            "content/start",
            "content/text",
            "content/box",
            "content/line",
            "content/image-simple",
            "content/image-expandable",
            "content/image-linked",
            "content/video",
            "content/map",
            "content/social",
            "content/contact-form"
        ];
        var itemsState = this.RetrieveHelpItems();
        for (var i = 0; i < identifiers.length; i++) {
            var helpItem = new HelpItem(identifiers[i], (itemsState != "") ? (itemsState.charAt(i) == "1") : false);
            this.items.push(helpItem);
        }
    }
    Help.prototype.ExportHelpItems = function () {
        var helpState = "";
        var helpItem;
        for (var i = 0; i < this.items.length; i++) {
            helpItem = this.items[i];
            helpState += (helpItem.displayed ? "1" : "0");
        }
        $.cookie(this.cookieHelpItems, helpState, { path: "/" });
    };
    Help.prototype.RetrieveHelpItems = function () {
        var state = $.cookie(this.cookieHelpItems);
        return ((state == undefined) ? "" : state);
    };
    Help.prototype.ExportHelpState = function () {
        $.cookie(this.cookieHelpState, this.enabled ? "1" : "0", { path: "/" });
    };
    Help.prototype.RetrieveHelpState = function () {
        var state = $.cookie(this.cookieHelpState);
        return ((state == undefined) ? false : (state == "1"));
    };
    Help.prototype.Show = function (id) {
        if (!this.enabled) {
            return false;
        }
        var item = this.GetHelpItem(id);
        if (!item.displayed) {
            item.displayed = true;
            this.ExportHelpItems();
            return true;
        }
        return false;
    };
    Help.prototype.GetHelpItem = function (id) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                return this.items[i];
            }
        }
        return null;
    };
    Help.prototype.ResetAllItemsState = function () {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].displayed = false;
        }
        this.ExportHelpItems();
    };
    Help.prototype.SetEnabled = function (state, reset) {
        this.enabled = state;
        if (reset) {
            this.ResetAllItemsState();
        }
        this.ExportHelpState();
    };
    return Help;
})();
//# sourceMappingURL=Help.js.map