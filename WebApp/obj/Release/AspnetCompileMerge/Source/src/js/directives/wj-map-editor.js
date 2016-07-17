angular.module("WebjatoDirectives").directive("wjMapEditor", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=",
            zindex: "="
        },
        templateUrl: "map-editor-tpl.html",
        controller: function ($scope) {
            $scope.SizeOptions = [
                { Width: 525, Height: 550, Label: "525 x 550" },
                { Width: 600, Height: 550, Label: "600 x 550" },
                { Width: 640, Height: 480, Label: "640 x 480" },
                { Width: 860, Height: 510, Label: "860 x 510" }];
            $scope.OnSizeChange = function () {
                $scope.data.Size.Width = $scope.SelectedSize.Width;
                $scope.data.Size.Height = $scope.SelectedSize.Height;
            };
            $scope.ApplyNewAddress = function () {
                $scope.data.Address = $scope.AddressTmp;
            };
            $scope.AddressTmp = $scope.data.Address;
            $scope.SelectedSize = _.findWhere($scope.SizeOptions, { Width: $scope.data.Size.Width });
        }
    };
});