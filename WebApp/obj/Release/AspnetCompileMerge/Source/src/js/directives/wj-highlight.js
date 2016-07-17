angular.module("WebjatoDirectives").directive("wjHighlight", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "="
        },
        templateUrl: "highlight-tpl.html",
        controller: function ($scope, $rootScope, $timeout, ContentUtils, ContentType) {
            var newContentDelta = 0;
            $scope.isInteractiveContent = false;
            $scope.position = { top: null, left: null };
            $scope.size = { width: null, height: null };
            $scope.resizeEnabled = false;
            $scope.resizeOptions = {};
            $scope.OnClick = function () {
                $rootScope.$broadcast("OnHighlightClick", $scope.data);
            };
            $scope.OnSizeChange = function (w, h) {
                ContentUtils.SetContentSize($scope.data, w - newContentDelta, h - newContentDelta);
                $scope.$digest();
            };
            $scope.$watch("data", function () {
                if ($scope.data == null) {
                    return;
                }
                newContentDelta = $scope.data.IsNewContent ? 30 : 0;
                $scope.position.top = $scope.data.Position.Y;
                $scope.position.left = $scope.data.Position.X;
                $scope.resizeEnabled = ContentUtils.IsContentResizableFromHighlightBox($scope.data) && $scope.data.Editing;
                $scope.resizeOptions = ContentUtils.GetResizeOptions($scope.data, newContentDelta + 10);
                $scope.isInteractiveContent = ($scope.data.Type == ContentType.TEXT) && $scope.data.Editing;
                $timeout(function () {
                    var size = $scope.data.IsNewContent? ContentUtils.GetSizeForNewContent($scope.data) : ContentUtils.GetSizeForHighlightedContent($scope.data);
                    $scope.size.width = size.width + newContentDelta;
                    $scope.size.height = size.height + newContentDelta;
                }, 50);
            }, true);
        }
    };
});