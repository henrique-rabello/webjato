angular.module("WebjatoDirectives").directive("wjZindex", function (zIndexChange) {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "z-index-tpl.html",
        scope: {
            ZIndexState: "=state"
        },
        controller: function ($scope) {
            $scope.ZIndexChange = zIndexChange;
        },
        link: function (scope, elem) {
            $(".tp-west", elem).tipsy({ gravity: "w" });
            $(".tp-north", elem).tipsy({ gravity: "n" });
            scope.ChangeZIndex = function (zIndexChange, changeAllowed) {
                if (!changeAllowed) return;
                scope.$emit("ZIndexChangeRequest", zIndexChange);
            };
        }
    };
});