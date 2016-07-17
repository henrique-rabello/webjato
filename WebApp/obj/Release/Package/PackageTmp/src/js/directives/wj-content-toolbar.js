angular.module("WebjatoDirectives").directive("wjContentToolbar", function (ContentType, ContentUtils) {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "toolbar-tpl.html",
        scope: {
            data: "=",
            draggableElement: "=",
            display: "="    //Array de boolean que define a visibilidade de cada botão nesta ordem [mover, editar, duplicar, excluir]
        },
        controller: function ($scope) {
            $scope.closeToTop = false;
            $scope.closeToRight = false;
            $scope.unfloatMoveButton = false;
            $scope.Delete = function () {
                $scope.$emit("DeleteRequest", $scope.data);
            };
            $scope.Duplicate = function () {
                $scope.$emit("DuplicateRequest", $scope.data, $scope.data.PageId);
            };
            $scope.Edit = function () {
                $scope.$emit("Edit", $scope.data);
            };
        },
        link: function (scope, elem, attrs) {
            var CalculateToolbarPosition = function (refreshAngular) {
                var position = $("#" + scope.data.Id).position();
                if (!position) {
                    return;
                }
                scope.closeToTop = position.top < 35;
                var isVerticalLine = (scope.data.Type == ContentType.LINE) && !scope.data.IsHorizontal;
                scope.closeToRight = isVerticalLine && (position.left > 880);
                scope.unfloatMoveButton = isVerticalLine;
                if (!refreshAngular) {
                    return;
                }
                scope.$apply();
            };

            var SetDraggableBoundaries = function () {
                var contPage = $(".cont-page");
                var delta = scope.data.IsNewContent ? 15 : 0;
                $(".js-content-boundary").width(contPage.width() + delta);
                $(".js-content-boundary").height(contPage.height() + delta);
            };

            var dragOptions = {
                containment: ".js-content-boundary",
                handle: ".btn.move",
                start: function (event, ui) {
                    scope.$emit("OnContentDragStart", ui.position.left, ui.position.top);
                },
                drag: function (event, ui) {
                    scope.$emit("OnContentDrag", ui.position.left, ui.position.top);
                },
                stop: function (event, ui) {
                    CalculateToolbarPosition(true);
                    scope.$emit("OnContentDragStop", ui.position.left, ui.position.top);
                }
            };
            $(scope.draggableElement).draggable(dragOptions);
            elem.on("$destroy", function () {
                $(scope.draggableElement).draggable("destroy");
            });
            scope.$watch("data", function (newValue) {
                if (!newValue) {
                    return;
                }
                CalculateToolbarPosition(false);
                SetDraggableBoundaries();
            });
        }
    };
});