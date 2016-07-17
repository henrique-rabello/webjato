angular.module("WebjatoDirectives").directive("wjUnitPreview", function () {
    return {
        replace: true,
        restrict: "E",
        scope: true,
        templateUrl: "unit-preview-tpl.html",
        controller: function ($scope, ContentType, UnitContentModel, $http) {
            $scope.ContentType = ContentType;
            $scope.Model = UnitContentModel;
            $scope.Templates = [];
            $scope.Loading = false;
            $scope.AddContent = function (contentType, query) {
                $scope.Loading = true;
                $scope.$emit("NewContentRequest", contentType, query);
            };
            $scope.Dismiss = function () {
            	$scope.Model.ShowUnity = true;
            	$scope.Model.ContentTypeToPreview = null;
            	$scope.Loading = false;
            };
            $scope.AddTemplate = function (template) {
            	$scope.$emit("OnTemplateRequest", template.Id);
            	$scope.Dismiss();
            };
            $scope.$on("DismissAddContentPreview", $scope.Dismiss);
            $http({ method: "GET", url: "../api/template/all" })
				.success(function (data) {
					$scope.Templates = data;
				});
        }
    };
});