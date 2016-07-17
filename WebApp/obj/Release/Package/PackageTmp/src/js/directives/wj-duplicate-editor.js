/// <reference path="../typings/angular-1.2.d.ts" />
/// <reference path="../entities/Page.ts" />
angular.module("WebjatoDirectives").directive("wjDuplicateEditor", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/duplicate-editor.html",
        scope: {
            PageList: "=pageList",
            PageCurrent: "=pageCurrent"
        },
        controller: function ($scope) {
            _.each($scope.PageList, function (page) {
                page.SelectedAsTarget = false;
            });
            $scope.SelectedPages = [];
            $scope.OnPageSelectChange = function () {
                $scope.SelectedPages = _.chain($scope.PageList).where({ SelectedAsTarget: true }).pluck("Id").value();
            };
            $scope.SelectEverything = false;
            $scope.$watch("SelectEverything", function (newValue) {
                $scope.$emit(newValue ? "SelectAll" : "DeselectAll");
            });
        }
    };
});
//# sourceMappingURL=wj-duplicate-editor.js.map