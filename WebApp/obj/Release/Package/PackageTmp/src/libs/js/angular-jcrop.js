angular.module("AngularJCrop", [])
.directive("cropped", function () {
    return {
        restrict: "A",
        replace: false,
        scope: {
            ngSrc: "@",
            selected: "&",
            loaded: "&",
            props: "="
        },
        link: function (scope, element, attr) {
            var props = {
                allowSelect: false,
                bgColor: "#FFFFFF",
                bgOpacity: 0.8,
                onChange: function (x) { scope.selected({ coords: x }); },
                onSelect: function (x) { scope.selected({ coords: x }); },
            };
            var jcropAPI = null;
            var clear = function () {
                if (jcropAPI == null) {
                    return;
                }
                jcropAPI.destroy();
                jcropAPI = null;
            };
            element.bind("load", function () {
                setTimeout(
                    function () {
                        angular.extend(props, scope.props);
                        $(element).Jcrop(props, function () { jcropAPI = this; });
                        scope.loaded();
                    }, 1000);
            });
            scope.$on("$destroy", clear);
        }
    };
});