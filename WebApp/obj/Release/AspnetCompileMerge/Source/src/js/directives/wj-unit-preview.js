angular.module("WebjatoDirectives").directive("wjUnitPreview", function () {
    return {
        replace: true,
        restrict: "E",
        scope: true,
        templateUrl: "unit-preview-tpl.html",
        controller: function ($scope, ContentType, UnitContentModel) {
            $scope.ContentType = ContentType;
            $scope.Model = UnitContentModel;
            $scope.AddContent = function (contentType, query) {
                $scope.$emit("NewContentRequest", contentType, query);
            };
            $scope.Dismiss = function () {
                $scope.Model.ContentTypeToPreview = null;
            };
            $scope.$on("DismissAddContentPreview", $scope.Dismiss);
        }
    };
});