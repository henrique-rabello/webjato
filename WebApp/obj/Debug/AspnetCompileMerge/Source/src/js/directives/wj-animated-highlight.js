angular.module("WebjatoDirectives").directive("wjAnimatedHighlight", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/animated-highlight.html",
        scope: {
            data: "=",
            multiSelectionMode: "="
        },
        controller: function ($scope, $rootScope, $timeout, ContentUtils, MultiSelectionMode, ContentType) {
            var backedupPosition = null;
            var originalPosition = null;
            var startDragPosition = null;
            var GetPosition = function (data) {
                switch (data.Type) {
                    case ContentType.BOX:
                        var box = data;
                        if (box.Border.Exists) {
                            return new ContentPosition(-box.Border.Width, -box.Border.Width, 0);
                        }
                        break;
                    case ContentType.LINE:
                        var line = data;
                        if (line.IsHorizontal) {
                            return new ContentPosition(line.Width, 0, 0);
                        }
                        else {
                            return new ContentPosition(0, -line.Width, 0);
                        }
                }
                return new ContentPosition(0, 0, 0);
            };
            var BackupOriginalPosition = function () {
                backedupPosition = new ContentPosition($scope.data.Position.X, $scope.data.Position.Y, 0);
                originalPosition = new ContentPosition($scope.data.Position.X, $scope.data.Position.Y, 0);
            };
            $scope.position = new ContentPosition(0, 0, 0);
            $scope.size = new ContentSize(0, 0);
            $scope.selectionMode = MultiSelectionMode.OFF;
            $scope.selectionModeList = MultiSelectionMode;
            $scope.contentType = ContentType;
            $scope.toolbarDisplay = [false, false, false, false];
            $scope.displayElementName = false;
            $scope.$on("OnContentDragStart", function (event, x, y) {
                startDragPosition = new ContentPosition(x, y, 0);
            });
            $scope.$on("OnContentDrag", function (sender, x, y) {
                var dx = x - startDragPosition.X;
                var dy = y - startDragPosition.Y;
                $rootScope.$broadcast("OnMoveTogetherDrag", dx, dy, $scope.data);
            });
            $scope.$on("OnContentDragStop", function (event, x, y) {
                $rootScope.$broadcast("OnMoveTogetherStop");
            });
            $scope.$on("OnMoveTogetherDrag", function (event, dx, dy, sourceContent) {
                if (!$scope.data.Selected) {
                    return;
                }
                $scope.data.Position.X = originalPosition.X + dx;
                $scope.data.Position.Y = originalPosition.Y + dy;
                if ($scope.data != sourceContent) {
                    $scope.$apply();
                }
            });
            $scope.$on("OnMoveTogetherStop", function () {
                originalPosition.X = $scope.data.Position.X;
                originalPosition.Y = $scope.data.Position.Y;
            });
            $scope.$on("OnMoveTogetherRollback", function () {
                $scope.data.Position.X = backedupPosition.X;
                $scope.data.Position.Y = backedupPosition.Y;
            });
            $scope.$on("OnMoveTogetherCommit", function () {
                var positionChanged = (backedupPosition.X != $scope.data.Position.X) || (backedupPosition.Y != $scope.data.Position.Y);
                BackupOriginalPosition();
                if (positionChanged) {
                    $scope.$emit("OnContentCommit", $scope.data);
                }
            });
            $scope.$on("OnEnterMultiSelectionMode", function (e, multiSelectionMode) {
                BackupOriginalPosition();
                $scope.position = GetPosition($scope.data);
                $scope.size = ContentUtils.GetSizeForHighlightedContent($scope.data);
                $scope.selectionMode = multiSelectionMode;
                $scope.toolbarDisplay[0] = (multiSelectionMode == MultiSelectionMode.MOVE) || (multiSelectionMode == MultiSelectionMode.MOVE_AFTER_DUPLICATE);
            });
            $scope.$watch("data.Selected", function (newValue) {
                $scope.displayElementName = (newValue && $scope.data.Selected && ($scope.selectionMode == $scope.selectionModeList.DUPLICATE));
                if (!$scope.displayElementName) {
                    return;
                }
                $timeout(function () {
                    $scope.displayElementName = false;
                }, 500);
            });
        },
        compile: function (tElem, tAttrs, transclude) {
            return {
                pre: function (scope, elem, attrs) {
                    scope.draggableElement = elem.parent();
                },
                post: function (scope, elem, attrs) {
                    elem.on("click", function (e) {
                        if (e.target == elem.get(0)) {
                            scope.data.Selected = !scope.data.Selected;
                            if (!scope.data.Selected) {
                                scope.$emit("OnContentDeselected");
                            }
                            scope.$apply();
                        }
                    });
                    scope.$on("$destroy", function (e) {
                        elem.off("click");
                    });
                }
            };
        }
    };
});
