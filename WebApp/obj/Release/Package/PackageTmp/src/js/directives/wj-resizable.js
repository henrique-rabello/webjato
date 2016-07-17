angular.module("WebjatoDirectives").directive("wjResizable", function ($parse) {
    return {
        restrict: "A",
        link: function (scope, elem, attrs) {
            attrs.$observe("wjResizableOptions", function (opts) {
                if ($(elem).resizable("instance")) {
                    $(elem).resizable("destroy");
                }
                $(elem).resizable(angular.extend({
                    containment: ".cont-page",
                    create: function (event, ui) {
                        if (angular.isDefined(attrs.wjEnabled)) {
                            $(elem).resizable(JSON.parse(attrs.wjEnabled) ? "enable" : "disable");
                        }
                        $(elem).find(".ui-icon").removeClass("ui-icon ui-icon-gripsmall-diagonal-se");
                    },
                    resize: function (event, ui) {
                        if (angular.isDefined(attrs.wjSizeChange)) {
                            var invoker = $parse(attrs.wjSizeChange);
                            invoker(scope, { w: Math.ceil(ui.size.width), h: Math.ceil(ui.size.height) });
                        }
                    }
                }, JSON.parse(opts)));
            });
            if (angular.isDefined(attrs.wjEnabled)) {
                attrs.$observe("wjEnabled", function (newValue) {
                    if ($(elem).resizable("instance")) {
                        $(elem).resizable(scope.$eval(newValue) ? "enable" : "disable");
                    }
                });
            }
            elem.on("$destroy", function () {
                $(elem).resizable("destroy");
            });
        }
    };
});