angular.module("WebjatoDirectives").directive("wjMap", function ($sce, ServerSync) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "map-tpl.html",
        link: {
            pre: function (scope, elem, attrs) {
                scope.DraggableOpts = {
                    containment: ".cont-page",
                    handle: ".handle",
                    addClasses: false
                };
            },
            post: function (scope, elem, attrs) {
                scope.url = "";
                scope.$watch("data.Address", function (newValue) {
                    if (!angular.isDefined(scope.data.Address)) {
                        return;
                    }
                    var url = "https://www.google.com/maps/embed/v1/place?q={0}&key={1}";
                    var key = "AIzaSyA_BlBKdRyHdaj0HkxP87dM9EbQ7yzHr_A";
                    scope.url = $sce.trustAsResourceUrl(url.replace("{0}", escape(scope.data.Address)).replace("{1}", key));
                });
            }
        }
    };
});