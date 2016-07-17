angular.module("WebjatoDirectives").directive("wjOkCancel", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "ok-cancel-tpl.html",
        scope: {
            data: "="
        },
        controller: function ($scope, $rootScope) {
            var backup = angular.copy($scope.data);
            $scope.Confirm = function () {
                $rootScope.$broadcast("OnContentCommit", $scope.data);
            };
            $scope.Rollback = function () {
                $rootScope.$broadcast("OnContentRollback", $scope.data, backup);
            };
        }
    };
});