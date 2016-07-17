angular.module("WebjatoFactories")
.factory("WebjatoCssHandler",
    function () {
        return {
            GetStyleSheet: function (styleSheetTitle) {
                var styleSheetExists = _.some(document.styleSheets, function (styleSheet) { return styleSheet.title == styleSheetTitle; });
                if (!styleSheetExists) {
                    $("head").append("<style type=\"text/css\" media=\"screen\" title=\"" + styleSheetTitle + "\"></style>");
                }
                return _.findWhere(document.styleSheets, { title: styleSheetTitle });
            },
            ApplyCSS: function (styleSheetTitle, rules) {
                var sheet = this.GetStyleSheet(styleSheetTitle);
                //Deletes old rules
                var sheetRules = sheet.cssRules ? sheet.cssRules : sheet.rules;
                while (sheetRules.length > 0) {
                    if (sheet.deleteRule) {
                        sheet.deleteRule(0);
                    }
                    else if (sheet.removeRule) {
                        sheet.removeRule(0);
                    }
                }
                //Apply new rules
                _.each(rules, function (rule) {
                    if (sheet.insertRule) {
                        sheet.insertRule(rule.Class + " { " + rule.Value + " }", sheetRules.length);
                    }
                    else if (sheet.addRule) {
                        sheet.addRule(rule.Class, rule.Value, sheetRules.length);
                    }
                });
            }
        };
    });