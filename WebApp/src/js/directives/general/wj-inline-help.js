angular.module('WebjatoDirectives').directive('wjInlineHelp', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            helpId: '@'
        },
        template: '<div class="wj-inline-help animated" ng-class="{\'fadeInDown\':active, \'fadeOutUp\':!active}">' +
            '<div ng-bind="helpContent"></div>' +
            '</div>',
        controller: function ($scope, $timeout) {
            var index = {
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
            $scope.$watch('helpId', function (nv) {
                if (!nv)
                    return;
                $timeout(function () {
                    $scope.helpContent = index[nv];
                    $scope.active = true;
                    $timeout(function () {
                        $scope.active = false;
                    }, 3000);
                }, 1000);
                $scope.helpContent = index[nv];
            });
        }
    };
});
