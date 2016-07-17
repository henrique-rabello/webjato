angular.module("WebjatoDirectives").directive("wjLine", function () {
    return {
        restrict: "E",
        scope: {
            data: "=",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "line-tpl.html",
        link: function (scope, elem, attrs) {
            var Refresh = function () {
                var borderStyle = ["solid", "dotted", "dashed"];
                var borderTopWidth = scope.data.IsHorizontal ? scope.data.Width : "0";
                var borderLeftWidth = scope.data.IsHorizontal ? "0" : scope.data.Width;
                scope.Style = {
                    "border-top": borderTopWidth + "px " + borderStyle[scope.data.LineStyle] + " " + scope.data.Color,
                    "border-left": borderLeftWidth + "px " + borderStyle[scope.data.LineStyle] + " " + scope.data.Color,
                    "width": scope.data.IsHorizontal ? scope.data.Size + "px" : "4px",
                    "height": scope.data.IsHorizontal ? "4px" : scope.data.Size + "px",
                    "top": scope.data.Position.Y + "px",
                    "left": scope.data.Position.X + "px",
                    "z-index": scope.data.Position.ZIndex
                };
            };
            scope.$watch("data", Refresh, true);
        }
    };
});