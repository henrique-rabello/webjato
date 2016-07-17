/// <reference path="../typings/angular-1.2.d.ts" />

interface IScopeWjMoveTogetherEditor extends ng.IScope {
    SelectEverything: boolean;
}

angular.module("WebjatoDirectives").directive("wjMoveTogetherEditor", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/move-together-editor.html",
        controller: function ($scope: IScopeWjMoveTogetherEditor) {
            $scope.SelectEverything = false;
            $scope.$watch("SelectEverything", function (newValue: boolean) {
                $scope.$emit(newValue ? "SelectAll" : "DeselectAll");
            });
        }
    };
});