angular.module("WebjatoFactories")
.factory("WebjatoFormatter",
    function ($sce, MenuConfig) {
        var hashRepeat = {
            "11": "repeat",
            "10": "repeat-x",
            "01": "repeat-y",
            "00": "no-repeat"
        };
        var hashVAlign = {
            "1": "top",
            "2": "center",
            "3": "bottom"
        };
        var hashHAlign = {
            "1": "left",
            "2": "center",
            "3": "right"
        };
        return {
            Background: {
                Data: null,
                Style: {},
                Refresh: function (bg, site, assetsPath) {
                    this.Data = bg;
                    this.Style["background-color"] = bg.Color;
                    this.Style["background-image"] = (bg.ImageKey != null && bg.ImageKey != "") ? "url('" + assetsPath + bg.ImageKey + "')" : "none";
                    this.Style["background-repeat"] = hashRepeat[(bg.HRepeat ? "1" : "0") + (bg.VRepeat ? "1" : "0")];
                    this.Style["background-position"] = hashVAlign[bg.VAlign] + " " + hashHAlign[bg.HAlign];
                    this.Style["background-attachment"] = bg.IsFixed ? "fixed" : "scroll";
                    this.Style["text-align"] = hashHAlign[site.Alignment];
                }
            },
            Frame: {
                Data: null,
                StyleBase: {},
                StyleContPage: {},
                StyleEstrutura: {},
                Refresh: function(data, site) {
                    this.Data = data;
                    this.StyleContPage["padding-top"] = data.MarginTop + "px";
                    this.StyleContPage["margin-left"] = parseInt(site.Alignment) == 1 ? "0" : "auto";
                    this.StyleContPage["margin-right"] = parseInt(site.Alignment) == 1 ? "0" : "auto";
                    this.StyleEstrutura["margin"] = parseInt(site.Alignment) == 1 ? "0" : "0 auto";
                    this.StyleEstrutura["border-top-color"] = data.BorderTop.Color;
                    this.StyleEstrutura["border-top-width"] = data.BorderTop.Width + "px";
                    this.StyleEstrutura["border-bottom-color"] = data.BorderBottom.Color;
                    this.StyleEstrutura["border-bottom-width"] = data.BorderBottom.Width + "px";
                    this.StyleEstrutura["border-left-color"] = data.BorderSides.Color;
                    this.StyleEstrutura["border-left-width"] = data.BorderSides.Width + "px";
                    this.StyleEstrutura["border-right-color"] = data.BorderSides.Color;
                    this.StyleEstrutura["border-right-width"] = data.BorderSides.Width + "px";
                    this.StyleBase["background-color"] = data.IsTransparent ? "transparent" : data.Color;
                }
            },
            Footer: {
                Data: null,
                Style: {},
                Refresh: function (footer, site, frame) {
                    this.Data = footer;
                    this.Style["background-color"] = footer.IsTransparent ? "transparent" : footer.Color;
                    this.Style["width"] = 1000;
                    this.Style["margin"] = parseInt(site.Alignment) == 1 ? "0" : "0 auto";
                    this.Style["border-left-width"] = frame.BorderSides.Width + "px";
                    this.Style["border-right-width"] = frame.BorderSides.Width + "px";
                    this.Data.TrustedText = function () { return $sce.trustAsHtml(footer.Text); };
                }
            },
            Header: {
                Data: null,
                Style: {},
                Refresh: function (header, assetsPath) {
                    this.Data = header;
                    this.Style["background-color"] = header.IsTransparent ? "transparent" : header.Color;
                    this.Style["background-image"] = (header.ImageKey != null && header.ImageKey != "") ? "url('" + assetsPath + header.ImageKey + "')" : "none";
                    this.Style["background-repeat"] = hashRepeat[(header.HRepeat ? "1" : "0") + (header.VRepeat ? "1" : "0")];
                    this.Style["background-position"] = hashVAlign[header.VAlign] + " " + hashHAlign[header.HAlign]
                    this.Style["height"] = header.Height + "px";
                }
            },
            Logo: {
                Data: null,
                StyleText: {},
                StyleImageContainer: {},
                StyleImage: {},
                ImagePath: "",
                Refresh: function (logo, assetsPath) {
                    this.Data = logo;
                    this.StyleText["top"] = logo.Position.Y + "px";
                    this.StyleText["left"] = logo.Position.X + "px";
                    this.StyleText["display"] = "block";
                    this.StyleImageContainer["display"] = (parseInt(logo.LogoType) == 2) ? "block" : "none";
                    this.StyleImageContainer["top"] = logo.Position.Y + "px";
                    this.StyleImageContainer["left"] = logo.Position.X + "px";
                    this.StyleImage["width"] = logo.ImageExportedSize.Width + "px";
                    this.ImagePath = (logo.ImageExportedKey != null && logo.ImageExportedKey != "") ? assetsPath + logo.ImageExportedKey : "#";
                    this.Data.TrustedText = function () { return $sce.trustAsHtml(logo.Text); };
                }
            },
            Site: {
                Data: null,
                Style: {},
                Refresh: function (data) {
                    this.Data = angular.copy(data);
                    this.Style["margin"] = parseInt(data.Alignment) == 1 ? "0" : "0 auto";
                    MenuConfig.ApplyCSS(data.Menu);
                }
            }
        };
    });