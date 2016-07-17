angular.module("WebjatoDirectives").directive("wjBoxEditor", function () {
    return {
        replace: true,
        restrict: "E",
        scope: {
            data: "=",
            zindex: "="
        },
        templateUrl: "box-editor-tpl.html",
        controller: function ($scope, ColorPickerConfig) {
            $scope.ColorPickerConfig = angular.extend({ change: $scope.OnDataChange }, ColorPickerConfig);
        }
    };
});