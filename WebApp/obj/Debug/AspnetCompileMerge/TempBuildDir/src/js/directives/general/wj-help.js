angular.module("WebjatoDirectives").directive("wjHelp", function () {
    return {
        restrict: "E",
        replace: true,
        scope: true,
        template: "<div class='wj-help' ng-include='Url' onload='OnLoad();'></div>",
        controller: function ($rootScope, $scope, HelpIndexer) {
            $scope.Url = null;
            $scope.OnLoad = function () {
                $(".wj-help").lightbox_me({
                    destroyOnClose: true,
                    onClose: function () {
                        $scope.Url = null;
                        $scope.$apply();
                    }
                });
            };
            $rootScope.$on("HelpDisplay", function (e, id) {
                $scope.Url = HelpIndexer.GetUrl(id);
            });
            $rootScope.$on("HelpAutoDisplay", function (e, id) {
                if (new Help().Show(id)) {
                    $scope.Url = HelpIndexer.GetUrl(id);
                }
            });
            $rootScope.$on("HelpSetState", function (e, newState, reset) {
                new Help().SetEnabled(newState, reset);
            });
        }
    };
});
