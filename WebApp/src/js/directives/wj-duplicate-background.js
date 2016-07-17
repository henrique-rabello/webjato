/// <reference path="../typings/angular-1.2.d.ts" />
angular.module("WebjatoDirectives").directive("wjDuplicateBackground", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            marginTop: "@",
            show: "=",
            zIndex: "="
        },
        templateUrl: "/content/duplicate-background.html",
        controller: function ($scope) {
        }
    };
});
//# sourceMappingURL=wj-duplicate-background.js.map