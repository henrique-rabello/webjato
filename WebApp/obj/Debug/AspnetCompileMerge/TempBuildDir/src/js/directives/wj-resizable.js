angular.module("WebjatoDirectives").directive("wjResizable", function ($parse) {
    return {
        restrict: "A",
        link: function (scope, elem, attrs) {
            attrs.$observe("wjResizableOptions", function (opts) {
                if ($(elem).resizable("instance")) {
                    $(elem).resizable("destroy");
                }
                var isNewContent = !!opts ? JSON.parse(opts).isNew : false;
                $(elem).resizable(angular.extend({
                    containment: isNewContent ? ".js-new-content-boundary" : ".js-content-boundary",
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
                    },
                    stop: function (event, ui) {
                        if (angular.isDefined(attrs.wjResizeStop)) {
                            var invoker = $parse(attrs.wjResizeStop);
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