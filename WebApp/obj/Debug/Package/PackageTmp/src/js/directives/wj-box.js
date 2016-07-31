angular.module("WebjatoDirectives").directive("wjBox", function (ServerSync) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            editModeOn: "=",
            multiSelectionOn: "="
        },
        replace: true,
        templateUrl: "box-tpl.html",
        link: function (scope, elem, attrs) {
            var Refresh = function () {
                var borderWidth = scope.data.Border.Exists ? scope.data.Border.Width : "0";
                scope.Style = {
                    "background-color": scope.data.Color,
                    "border-color": scope.data.Border.Color,
                    "border-width": borderWidth + "px",
                    "top": scope.data.Position.Y + "px",
                    "left": scope.data.Position.X + "px",
                    "width": scope.data.Size.Width + "px",
                    "height": scope.data.Size.Height + "px",
                    "z-index": scope.data.Position.ZIndex
                };
            };
            scope.$watch("data", Refresh, true);
        }
    };
});