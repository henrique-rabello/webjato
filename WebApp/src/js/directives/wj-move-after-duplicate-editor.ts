/// <reference path="../typings/angular-1.2.d.ts" />

angular.module("WebjatoDirectives").directive("wjMoveAfterDuplicateEditor", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/move-after-duplicate-editor.html"
    };
}); 