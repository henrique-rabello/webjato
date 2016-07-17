angular.module("WebjatoDirectives").directive("wjLineEditor", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=",
            zindex: "="
        },
        templateUrl: "line-editor-tpl.html",
        controller: function ($scope, ColorPickerConfig) {
            $scope.ColorPickerConfig = ColorPickerConfig;
        }
    };
});