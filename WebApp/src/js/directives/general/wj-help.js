angular.module('WebjatoDirectives').directive('wjHelp', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            name: '@',
            email: '@'
        },
        templateUrl: '/help/wj-help.html',
        controller: function ($rootScope, $scope, $http, $timeout) {
            var selector = '.wj-help';
            var reset = function () {
                $scope.subject = 'Dúvida';
                $scope.message = '';
                $scope.sending = false;
                $scope.sent = false;
            };
            $scope.send = function () {
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
                }).success(function () {
                    $scope.sent = true;
                    $timeout(function () {
                        reset();
                        $(selector).trigger('close');
                    }, 2000);
                });
            };
            $rootScope.$on('HelpDisplay', function (e, id) {
                $(selector).lightbox_me({
                    destroyOnClose: false
                });
            });
            reset();
        }
    };
});
