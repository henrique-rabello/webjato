angular.module("WebjatoDirectives").directive("wjMoveTogetherEditor", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/move-together-editor.html",
        controller: function ($scope) {
            $scope.SelectEverything = false;
            $scope.$watch("SelectEverything", function (newValue) {
                $scope.$emit(newValue ? "SelectAll" : "DeselectAll");
            });
        }
    };
});
