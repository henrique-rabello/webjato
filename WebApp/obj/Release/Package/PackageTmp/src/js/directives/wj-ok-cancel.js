/// <reference path="../typings/angular-1.2.d.ts" />
angular.module("WebjatoDirectives").directive("wjOkCancel", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/ok-cancel-tpl.html",
        scope: {
            data: "=",
            eventOk: "@",
            eventCancel: "@"
        },
        controller: function ($scope, $rootScope) {
            var backup = angular.copy($scope.data);
            $scope.Confirm = function () {
                $rootScope.$broadcast($scope.eventOk, $scope.data);
            };
            $scope.Cancel = function () {
                $rootScope.$broadcast($scope.eventCancel, $scope.data, backup);
            };
        }
    };
});
//# sourceMappingURL=wj-ok-cancel.js.map