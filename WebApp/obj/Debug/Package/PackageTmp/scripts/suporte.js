angular.module('SupportApp', []).controller('SupportCtrl', function ($scope, $http, $timeout) {
    $scope.data = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };
    $scope.working = false;
    $scope.go = function (form) {
        if (!form.$valid) {
            return;
        }
        $scope.working = true;
        $http({ method: 'POST', url: '/api/support', data: $scope.data })
            .success(function () {
                $scope.working = false;
                $scope.done = true;
                $timeout(function () {
                    $scope.done = false
                    form.$setPristine();
                    form.$setUntouched();
                    $scope.data.name = '';
                    $scope.data.email = '';
                    $scope.data.subject = '';
                    $scope.data.message = '';
                }, 2000);
            })
            .error(function () {
                alert('Ocorreu um erro ao enviar a mensagem. Por favor tente novamente mais tarde.');
            });
    };
});