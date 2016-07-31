angular.module("WebjatoDirectives").directive("wjSelectBoxIt", function () {
    var ignoreChange = false;
    var selectBoxIt = null;
    return {
        restrict: "E",
        replace: true,
        template: "<select></select>",
        scope: {
            options: "=",
            enabled: "=",
            onOptionSelect: "&",
            currentOption: "=",
            title: "@"
        },
        link: function (scope, elem, attrs) {
            selectBoxIt = $(elem).selectBoxIt().data("selectBox-selectBoxIt");
            $(elem).change(function () {
                if (ignoreChange) {
                    ignoreChange = false;
                    return;
                }
                scope.onOptionSelect({ value: $(elem).val() });
                scope.$apply();
            });
            scope.$watch("options", function (value) {
                if (!(scope.options && scope.options.length > 0)) {
                    return;
                }
                selectBoxIt.remove();
                _.each(scope.options, function (item) {
                    selectBoxIt.add({ value: item.value, text: item.text });
                });
            });
            scope.$watch("enabled", function (value) {
                if (value) {
                    selectBoxIt.enable();
                }
                else {
                    selectBoxIt.disable();
                }
            });
            scope.$watch("currentOption", function () {
                if (!scope.currentOption) {
                    return;
                }
                ignoreChange = true;
                selectBoxIt.selectOption(scope.currentOption.value);
            });
            if (!scope.title) {
                return;
            }
            $(elem).bind({
                "create": _.debounce(function () {
                    var e = $($(".selectboxit-container")[0]);
                    e.addClass("mouse-seta");
                    e.attr("title", scope.title);
                    e.tipsy({ gravity: "e" });
                }, 1000)
            });
        }
    };
});
