/// <reference path='../../typings/angular-1.2.d.ts' />
/// <reference path='../../typings/jquery.d.ts' />
/// <reference path="../../typings/lightbox_me.d.ts" />

interface IWJHelpScope extends ng.IScope {
    subject: string;
    message: string;
    send: () => void;
    sent: boolean;
    sending: boolean;
    name: string;
    email: string;
}

angular.module('WebjatoDirectives').directive('wjHelp', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            name: '@',
            email: '@'
        },
        templateUrl: '/help/wj-help.html',
        controller: function ($rootScope: ng.IRootScopeService, $scope: IWJHelpScope, $http: ng.IHttpService, $timeout: ng.ITimeoutService) {
            var selector: string = '.wj-help';
            var reset = (): void => {
                $scope.subject = 'Dúvida';
                $scope.message = '';
                $scope.sending = false;
                $scope.sent = false;
            };
            $scope.send = function (): void {
                $scope.sending = true;
                $http({
                    method: 'POST',
                    url: '/api/support',
                    data: {
                        name: $scope.name,
                        email: $scope.email,
                        subject: $scope.subject,
                        message: $scope.message
                    }
                }).success((): void => {
                    $scope.sent = true;
                    $timeout((): void => {
                        reset();
                        (<ILightboxMe>$(selector)).trigger('close');
                    }, 2000);
                });
            };
            $rootScope.$on('HelpDisplay', (e: ng.IAngularEvent, id: string): void => {
                (<ILightboxMe>$(selector)).lightbox_me({
                    destroyOnClose: false
                });
            });
            reset();
        }
    };
});