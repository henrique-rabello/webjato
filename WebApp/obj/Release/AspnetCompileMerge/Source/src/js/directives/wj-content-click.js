angular.module("WebjatoDirectives").directive("wjContentClick", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=",
            editModeOn: "="
        },
        templateUrl: "content-click-tpl.html",
        controller: function ($scope, $timeout, ContentType, ContentUtils) {
            $scope.position = {
                top: 0,
                left: 0
            };
            $scope.size = {
                width: 0,
                height: 0
            };
            var SetPosition = function () {
                var top = 0;
                var left = 0;
                switch ($scope.data.Type) {
                    case ContentType.BOX:
                        if ($scope.data.Border.Exists) {
                            top = -$scope.data.Border.Width;
                            left = -$scope.data.Border.Width;
                        }
                        break;
                    case ContentType.LINE:
                        if ($scope.data.IsHorizontal) {
                            top = -$scope.data.Width;
                        }
                        else {
                            left = -$scope.data.Width;
                        }
                        break;
                }
                if ((top == $scope.position.top) && (left == $scope.position.left)) {
                    return;
                }
                $scope.position.top = top;
                $scope.position.left = left;
                $scope.$digest();
            };
            var SetSize = function () {
                var size = ContentUtils.GetSizeForHighlightedContent($scope.data);
                var w = size.width;
                var h = size.height;
                if ((w == $scope.size.width) && (h == $scope.size.height)) {
                    return;
                }
                $scope.size.width = w;
                $scope.size.height = h;
                $scope.$digest();
            };

            $scope.Select = function () {
                $scope.$emit("OnContentClick", $scope.data);
            };
            $scope.$watch("data", _.debounce(function () {
                SetPosition();
                SetSize();
            }, 500), true);
        }
    };
});