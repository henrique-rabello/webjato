/// <reference path="../typings/jquery.cookie.d.ts" />
/// <reference path="HelpItem.ts" />

class Help {
    private items: Array<HelpItem> = [];
    private enabled: boolean = false;
    private cookieHelpItems: string = "HelpItems";
    private cookieHelpState: string = "HelpState";

    constructor() {
        this.enabled = this.RetrieveHelpState();
        var identifiers: Array<string> = [
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
            "content/contact-form",
			"content/move",
			"content/duplicate",
            "publish/address",
            "publish/display",
			"publish/share",
			"publish/hide"
        ];
        var itemsState: string = this.RetrieveHelpItems();
        for (var i: number = 0; i < identifiers.length; i++) {
            var helpItem = new HelpItem(identifiers[i],(itemsState != "") ? (itemsState.charAt(i) == "1") : false);
            this.items.push(helpItem);
        }
    }

    public ExportHelpItems(): void {
        var helpState: string = "";
        var helpItem: HelpItem;
        for (var i: number = 0; i < this.items.length; i++) {
            helpItem = this.items[i];
            helpState += (helpItem.displayed ? "1" : "0");
        }
        $.cookie(this.cookieHelpItems, helpState, { path: "/" });
    }

    public RetrieveHelpItems(): string {
        var state: string = $.cookie(this.cookieHelpItems);
        return ((state == undefined) ? "" : state);
    }

    public ExportHelpState(): void {
        $.cookie(this.cookieHelpState, this.enabled ? "1" : "0", { path: "/" });
    }

    public RetrieveHelpState(): boolean {
        var state: string = $.cookie(this.cookieHelpState);
        return ((state == undefined) ? false : (state == "1"));
    }

    public Show(id: string): boolean {
        if (!this.enabled) {
            return false;
        }
        var item: HelpItem = this.GetHelpItem(id);
        if (!item.displayed) {
            item.displayed = true;
            this.ExportHelpItems();
            return true;
        }
        return false;
    }

    public GetHelpItem(id: string): HelpItem {
        for (var i: number = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                return this.items[i];
            }
        }
        return null;
    }

    public ResetAllItemsState(): void {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].displayed = false;
        }
        this.ExportHelpItems();
    }

    public SetEnabled(state: boolean, reset: boolean): void {
        this.enabled = state;
        if (reset) {
            this.ResetAllItemsState();
        }
        this.ExportHelpState();
    }
} 