angular.module("WebjatoDirectives").directive("wjImageUploadBackdrop", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/image-upload-backdrop.html",
        scope: {
            show: "=",
            progress: "="
        },
        controller: function ($scope) {
            $scope.$watch("show", function (nv) {
                console.log('nv', nv);
            })
        }
    };
});