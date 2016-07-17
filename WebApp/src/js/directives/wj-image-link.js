angular.module("WebjatoDirectives").directive("wjImgLnk", function () {
    return {
        restrict: "E",
        scope: {
            data: "=",
            folder: "@",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "image-link-tpl.html",
        controller: function ($scope, ContentUtils) {
            $scope.ImageURL = ContentUtils.GetImageURL($scope.data, $scope.folder);
            $scope.Target = $scope.data.LinkType == "0" ? "_self" : "_blank";
            $scope.OpenLink = function () {
                if ($scope.data.LinkType == "0") {
                    $scope.$emit("ChangePage", $scope.data.TargetPageId);
                }
                else {
                    window.open($scope.data.LinkURL);
                }
            };
            $scope.$watch("data", function () {
                $scope.ImageURL = ContentUtils.GetImageURL($scope.data, $scope.folder);
            }, true);
        }
    };
});