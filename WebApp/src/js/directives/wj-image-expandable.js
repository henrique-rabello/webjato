angular.module("WebjatoDirectives").directive("wjImgExp", function (ContentUtils) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            folder: "@",
            editModeOn: "=",
            isPreview: "@"
        },
        replace: true,
        templateUrl: "image-expandable-tpl.html",
        controller: function ($scope, ContentUtils) {
            $scope.ImageURL = ContentUtils.GetImageURL($scope.data, $scope.folder);
            $scope.$watch("data", function () {
                $scope.ImageURL = ContentUtils.GetImageURL($scope.data, $scope.folder);
            }, true);
        },
        link: function (scope, elem, attrs) {
            if (scope.isPreview !== "1") {
                return;
            }
            var id = "img-exp-" + scope.data.Id;
            var tpl = "<img id=\"" + id + "\" src=\"" + ContentUtils.GetExpandedImageUrl(scope.data, scope.folder) + "\" style=\"display: none;\" />";
            $("body").append(tpl);
            scope.OpenExpandedImage = function () {
                $("#" + id).lightbox_me({
                    centered: true
                });
            };
        }
    };
});