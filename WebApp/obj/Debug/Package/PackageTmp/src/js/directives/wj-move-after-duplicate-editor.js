angular.module("WebjatoDirectives").directive("wjMoveAfterDuplicateEditor", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/move-after-duplicate-editor.html"
    };
});
