angular.module("WebjatoDirectives").directive("wjUnitAdd", function () {
    return {
        replace: true,
        restrict: "E",
        scope: true,
        templateUrl: "unit-add-tpl.html",
        controller: function ($scope, ContentType, UnitContentModel) {
            $scope.ContentType = ContentType;
            $scope.Model = UnitContentModel;
            $scope.Select = function (type) {
                $scope.Model.ContentTypeToPreview = type;
                $(".ui-layout-center").animate({ scrollTop: 0 }, 500);
            };
        }
    };
});
