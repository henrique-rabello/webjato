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
            $scope.ChangeZIndex = function (zIndexChange) {
                $scope.$emit("ZIndexChangeRequest", zIndexChange);
            };
        }
    };
});