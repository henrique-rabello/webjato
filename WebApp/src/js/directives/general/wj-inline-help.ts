/// <reference path='../../typings/angular-1.2.d.ts' />

interface IInlineHelpScope extends ng.IScope {
    active: boolean;
    timeout1: ng.IPromise<void>;
    timeout2: ng.IPromise<void>
    firstLoad: boolean;
    helpId: string;
    helpContent: string;
}

angular.module('WebjatoDirectives').directive('wjInlineHelp', function (): ng.IDirective {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            helpId: '@'
        },
        template: '<div class="wj-inline-help animated" ng-class="{\'fadeInDown\':active, \'fadeOutUp\':!active}" ng-hide="firstLoad">' +
        '<div ng-bind="helpContent"></div>' +
        '</div>',
        controller: function ($scope: IInlineHelpScope, $timeout: ng.ITimeoutService): void {
            var index: Object = {
                'home': 'conteúdo home',
                'site/logo': 'conteúdo site/logo',
                'site/bg': 'conteúdo site/background',
                'site/footer': 'conteúdo site/footer',
                'site/menu': 'conteúdo site/menu',
                'content/start': 'conteúdo content/start',
                'content/text': 'conteúdo content/text',
                'content/box': 'conteúdo content/box',
                'content/line': 'conteúdo content/line',
                'content/image-simple': 'conteúdo content/image-simple',
                'content/image-expandable': 'conteúdo content/image-expandable',
                'content/image-linked': 'conteúdo content/image-linked',
                'content/video': 'conteúdo content/video',
                'content/map': 'conteúdo content/map',
                'content/social': 'conteúdo content/social',
                'content/contact-form': 'conteúdo content/contact-form',
                'content/move': 'conteúdo content/move',
                'content/duplicate': 'conteúdo content/duplicate',
                'publish/address': 'conteúdo publish/address',
                'publish/display': 'conteúdo publish/display',
                'publish/share': 'conteúdo publish/share',
                'publish/hide': 'conteúdo publish/hide'
            };
            $scope.firstLoad = true;
            $scope.$watch('helpId', (nv: string): void => {
                if (!nv) return;
                $timeout.cancel($scope.timeout1);
                $timeout.cancel($scope.timeout2);
                $scope.active = false;
                $scope.timeout1 = $timeout((): void => {
                    $scope.helpContent = index[nv];
                    $scope.active = true;
                    $scope.firstLoad = false;
                    $scope.timeout2 = $timeout((): void => {
                        $scope.active = false;
                    }, 6000);
                }, 500);
            });
        }
    };
});