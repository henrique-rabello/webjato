/// <reference path="../typings/angular-1.2.d.ts" />

interface IScopeWjOkCancel extends ng.IScope {
    Confirm(): void;
    Cancel(): void;
    data: any;
    eventOk: string;
    eventCancel: string;
}

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
        controller: function ($scope:IScopeWjOkCancel, $rootScope:ng.IRootScopeService) {
            var backup:any = angular.copy($scope.data);
            $scope.Confirm = function () {
                $rootScope.$broadcast($scope.eventOk, $scope.data);
            };
            $scope.Cancel = function () {
                $rootScope.$broadcast($scope.eventCancel, $scope.data, backup);
            };
        }
    };
}); 