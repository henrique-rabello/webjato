angular.module("WebjatoDirectives").directive("wjTextEditPanel", function () {
    return {
        restrict: "E",
        templateUrl: "text-editor-tpl.html",
        scope: {
            data: "=",
            zindex: "="
        },
        replace: true,
        link: function (scope, elem, attrs) {
            var originalZIndex = null;
            var ZIndexToTheTop = function (sender, data) {
                if (data.Id != scope.data.Id) {
                    return;
                }
                if (!originalZIndex) {
                    originalZIndex = scope.data.Position.ZIndex;
                }
                scope.data.Position.ZIndex = 10000;
            };
            var RestoreZIndex = function (e) {
                if (e.target.id && e.target.id.indexOf("mceu_") != -1) {
                    return;
                }
                if (angular.element(e.target).closest("#" + scope.data.Id).length == 1) {
                    return;
                }
                scope.data.Position.ZIndex = originalZIndex;
                scope.$apply();
            };
            var OnZIndexChange = function (sender, data) {
                if (scope.data.Id != data.Id) {
                    return;
                }
                originalZIndex = data.Position.ZIndex;
            };
            //Event listeners
            document.addEventListener("mousedown", RestoreZIndex, true);
            var offHighlightClick = scope.$on("OnHighlightClick", ZIndexToTheTop);
            var offZIndexChange = scope.$on("OnZIndexChange", OnZIndexChange);
            if (scope.data.IsNewContent) {
                ZIndexToTheTop(null, scope.data);
            }
            //Destroys the global listener
            elem.on("$destroy", function () {
                document.removeEventListener("mousedown", RestoreZIndex, true);
                offHighlightClick();
                offZIndexChange();
            });
        }
    };
});