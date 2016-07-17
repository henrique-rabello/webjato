angular.module("WebjatoDirectives").directive("wjContactForm", function (ServerSync) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "contact-form-tpl.html",
        controller: function ($scope, CssService) {
            $scope.$watch("data", function () {
                CssService.ApplyCSS([{ selector: ".wj-cf-pholder::-webkit-input-placeholder", selectorText: "color: " + $scope.data.TextColor + ";" }]);
                CssService.ApplyCSS([{ selector: ".wj-cf-pholder:-moz-placeholder", selectorText: "color: " + $scope.data.TextColor + ";" }]);
                CssService.ApplyCSS([{ selector: ".wj-cf-pholder::-moz-placeholder", selectorText: "color: " + $scope.data.TextColor + ";" }]);
                CssService.ApplyCSS([{ selector: ".wj-cf-pholder:-ms-input-placeholder", selectorText: "color: " + $scope.data.TextColor + ";" }]);
            });
        }
    };
});