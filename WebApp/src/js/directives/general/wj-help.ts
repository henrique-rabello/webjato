/// <reference path="../../typings/angular-1.2.d.ts" />
/// <reference path="../../typings/jquery.d.ts" />
/// <reference path="../../general/Help.ts" />
/// <reference path="../../typings/IHelpIndexer.ts" />

interface IScopeWjHelp extends ng.IScope {
    Url: string;
    OnLoad: any;
}

interface IJQueryLightboxMe extends JQuery {
    lightbox_me: any;
}

angular.module("WebjatoDirectives").directive("wjHelp", function () {
    return {
        restrict: "E",
        replace: true,
        scope: true,
        template: "<div class='wj-help' ng-include='Url' onload='OnLoad();'></div>",
        controller: function ($rootScope: ng.IRootScopeService, $scope: IScopeWjHelp, HelpIndexer: IHelpIndexer) {
            $scope.Url = null;
            $scope.OnLoad = () => {
                (<IJQueryLightboxMe>$(".wj-help")).lightbox_me({
                    destroyOnClose: true,
                    onClose: () => {
                        $scope.Url = null;
                        $scope.$apply();
                    }
                });
            };
            $rootScope.$on("HelpDisplay", (e: ng.IAngularEvent, id: string): void => {
                $scope.Url = HelpIndexer.GetUrl(id);
            });
            $rootScope.$on("HelpAutoDisplay", (e: ng.IAngularEvent, id: string): void => {
                if (new Help().Show(id)) {
                    $scope.Url = HelpIndexer.GetUrl(id);
                }
            });
            $rootScope.$on("HelpSetState", (e: ng.IAngularEvent, newState: boolean, reset: boolean): void => {
                new Help().SetEnabled(newState, reset);
            });
        }
    };
});