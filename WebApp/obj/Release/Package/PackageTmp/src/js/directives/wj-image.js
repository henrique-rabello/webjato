angular.module("WebjatoDirectives").directive("wjImg", function () {
    return {
        restrict: "E",
        scope: {
            data: "=",
            folder: "@",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "image-tpl.html",
        controller: function ($scope, ContentUtils) {
            $scope.ImageURL = ContentUtils.GetImageURL($scope.data, $scope.folder);
            $scope.$watch("data", function () {
                $scope.ImageURL = ContentUtils.GetImageURL($scope.data, $scope.folder);
            }, true);
        }
    };
});