angular.module("WebjatoDirectives").directive("wjSocialEditor", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=",
            zindex: "="
        },
        templateUrl: "social-editor-tpl.html",
        controller: function ($scope, $timeout, ModalService) {
            var NormalizeURL = function () {
                _.each($scope.data, function (key) {
                    if (_.isObject(key) && _.has(key, "URL")) {
                        if (key.URL) {
                            var uri = new URI(key.URL).normalize();
                            if (!uri.protocol()) {
                                uri = uri.protocol("http");
                            }
                            key.URL = uri.toString();
                        }
                        else {
                            key.URL = null;
                        }
                    }
                });
            };
            var HasInvalidLinks = function () {
                var containsInvalidLinks = false;
                _.each($scope.data, function (key) {
                    if (_.isObject(key) && _.has(key, "URL")) {
                        if (key.Enabled && !key.URL) {
                            containsInvalidLinks = true;
                        }
                    }
                });
                return containsInvalidLinks;
            };
            $scope.DisplayAllPlugins = false;
            $scope.DisplayWarning = false;

            $scope.$on("SocialVerify", function () {
                NormalizeURL();
                if (HasInvalidLinks()) {
                    ModalService.Show("<b>Links inválidos!</b><br /><br />Desative as redes não utilizadas e coloque links nas redes ativadas para continuar.").then(function () {
                        $scope.DisplayWarning = true;
                        $timeout(function () {
                            $scope.DisplayWarning = false;
                        }, 3000);
                    });
                    return;
                }
                $scope.$emit("OnContentCommit", $scope.data);
            });
        }
    };
});