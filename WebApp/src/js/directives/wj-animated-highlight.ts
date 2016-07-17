/// <reference path="../entities/content/Box.ts" />
/// <reference path="../entities/content/ContentBase.ts" />
/// <reference path="../entities/content/ContentPosition.ts" />
/// <reference path="../entities/content/ContentSize.ts" />
/// <reference path="../entities/content/Line.ts" />
/// <reference path="../entities/enums/MultiSelectionModeList.ts" />
/// <reference path="../typings/angular-1.2.d.ts" />
/// <reference path="../typings/ContentUtils.d.ts" />

interface IScopeWjAnimatedHighlight extends ng.IScope {
    data: ContentBase;
    position: ContentPosition;
    size: ContentSize;
    draggableElement: JQuery;
    selectionMode: MultiSelectionModeList;
    selectionModeList: any;
    toolbarDisplay: Array<boolean>;
    contentType: any;
    displayElementName: boolean;
}

angular.module("WebjatoDirectives").directive("wjAnimatedHighlight", function (): ng.IDirective {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/animated-highlight.html",
        scope: {
            data: "=",
            multiSelectionMode: "="
        },
        controller: function ($scope: IScopeWjAnimatedHighlight, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, ContentUtils: ContentUtils, MultiSelectionMode: any, ContentType: any): void {
            var backedupPosition: ContentPosition = null;
            var originalPosition: ContentPosition = null;
            var startDragPosition: ContentPosition = null;
            var GetPosition = function (data: ContentBase): ContentPosition {
                switch (data.Type) {
                    case ContentType.BOX:
                        var box: Box = <Box>data;
                        if (box.Border.Exists) {
                            return new ContentPosition(-box.Border.Width, -box.Border.Width, 0);
                        }
                        break;
                    case ContentType.LINE:
                        var line: Line = <Line>data;
                        if (line.IsHorizontal) {
                            return new ContentPosition(line.Width, 0, 0);
                        }
                        else {
                            return new ContentPosition(0, -line.Width, 0);
                        }
                }
                return new ContentPosition(0, 0, 0);
            };
            var BackupOriginalPosition = function (): void {
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
            $scope.$on("OnContentDragStart", function (event: ng.IAngularEvent, x: number, y: number): void {
                startDragPosition = new ContentPosition(x, y, 0);
            });
            $scope.$on("OnContentDrag", function (sender: ng.IAngularEvent, x: number, y: number): void {
                var dx: number = x - startDragPosition.X;
                var dy: number = y - startDragPosition.Y;
                $rootScope.$broadcast("OnMoveTogetherDrag", dx, dy, $scope.data);
            });
            $scope.$on("OnContentDragStop", function (event: ng.IAngularEvent, x: number, y: number): void {
                $rootScope.$broadcast("OnMoveTogetherStop");
            });
            $scope.$on("OnMoveTogetherDrag", function (event: ng.IAngularEvent, dx: number, dy: number, sourceContent: ContentBase): void {
                if (!$scope.data.Selected) {
                    return;
                }
                $scope.data.Position.X = originalPosition.X + dx;
                $scope.data.Position.Y = originalPosition.Y + dy;
                if ($scope.data != sourceContent) {
                    $scope.$apply();
                }
            });
            $scope.$on("OnMoveTogetherStop", function (): void {
                originalPosition.X = $scope.data.Position.X;
                originalPosition.Y = $scope.data.Position.Y;
            });
            $scope.$on("OnMoveTogetherRollback", function (): void {
                $scope.data.Position.X = backedupPosition.X;
                $scope.data.Position.Y = backedupPosition.Y;
            });
            $scope.$on("OnMoveTogetherCommit", function (): void {
                var positionChanged: boolean = (backedupPosition.X != $scope.data.Position.X) || (backedupPosition.Y != $scope.data.Position.Y);
                BackupOriginalPosition();
                if (positionChanged) {
                    $scope.$emit("OnContentCommit", $scope.data);
                }
            });
            $scope.$on("OnEnterMultiSelectionMode", function (e: ng.IAngularEvent, multiSelectionMode: MultiSelectionModeList): void {
                BackupOriginalPosition();
                $scope.position = GetPosition($scope.data);
                $scope.size = ContentUtils.GetSizeForHighlightedContent($scope.data);
                $scope.selectionMode = multiSelectionMode;
                $scope.toolbarDisplay[0] = (multiSelectionMode == MultiSelectionMode.MOVE) || (multiSelectionMode == MultiSelectionMode.MOVE_AFTER_DUPLICATE);
            });
            $scope.$watch("data.Selected", (newValue: boolean) => {
                $scope.displayElementName = (newValue && $scope.data.Selected && ($scope.selectionMode == $scope.selectionModeList.DUPLICATE));
                if (!$scope.displayElementName) {
                    return;
                }
                $timeout(() => {
                    $scope.displayElementName = false;
                }, 500);
            });
        },
        compile: function (tElem: ng.IAugmentedJQuery, tAttrs: ng.IAttributes, transclude: ng.ITranscludeFunction): ng.IDirectivePrePost {
            return {
                pre: function (scope: IScopeWjAnimatedHighlight, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {
                    scope.draggableElement = elem.parent();
                },
                post: function (scope: IScopeWjAnimatedHighlight, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {
                    elem.on("click", function (e: JQueryEventObject): any {
                        if (e.target == elem.get(0)) {
                            scope.data.Selected = !scope.data.Selected;
                            if (!scope.data.Selected) {
                                scope.$emit("OnContentDeselected");
                            }
                            scope.$apply();
                        }
                    });
                    scope.$on("$destroy", function (e: ng.IAngularEvent): void {
                        elem.off("click");
                    });
                }
            }
        }
    };
});