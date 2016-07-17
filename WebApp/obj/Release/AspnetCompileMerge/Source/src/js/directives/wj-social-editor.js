angular.module("WebjatoDirectives").directive("wjSocialEditor", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=",
            zindex: "="
        },
        templateUrl: "social-editor-tpl.html",
        controller: function ($scope) {
            var NormalizeURL = function () {
                _.each($scope.data, function (key) {
                    if (_.isObject(key) && _.has(key, "URL")) {
                        if (key.URL == "") return;
                        if (key.URL.indexOf("http") == -1) {
                            key.URL = "http://" + key.URL;
                        }
                    }
                });
            };
            $scope.DisplayAllPlugins = false;
        }
    };
});