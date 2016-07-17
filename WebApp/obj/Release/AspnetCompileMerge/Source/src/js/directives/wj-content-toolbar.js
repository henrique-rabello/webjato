angular.module("WebjatoDirectives").directive("wjContentToolbar", function (ContentType) {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "toolbar-tpl.html",
        scope: {
            data: "="
        },
        controller: function ($scope) {
            $scope.closeToTop = false;
            $scope.closeToRight = false;
            $scope.Delete = function () {
                $scope.$emit("DeleteRequest", $scope.data);
            };
            $scope.Duplicate = function () {
                $scope.$emit("DuplicateRequest", $scope.data);
            };
            $scope.Edit = function () {
                $scope.$emit("Edit", $scope.data);
            };
        },
        link: function (scope, elem, attrs) {
            var dragOptions = {
                containment: ".cont-page",
                handle: ".btn.move",
                drag: function (event, ui) {
                    scope.data.Position.X = ui.position.left;
                    scope.data.Position.Y = ui.position.top;
                    scope.$apply();
                }
            };
            $(elem.parent()).draggable(dragOptions);
            elem.on("$destroy", function () {
                $(elem._parent()).draggable("destroy");
            });
            //scope.$watch("data.IsHighlighted", function (newValue) {
            //    if (newValue) {
            //        scope.closeToTop = (elem.parent().position().top < 30);
            //        scope.closeToRight = ((scope.data.Type == ContentType.LINE) && !scope.data.IsHorizontal && (elem.parent().position().left > 880));
            //    }
            //});
        }
    };
});