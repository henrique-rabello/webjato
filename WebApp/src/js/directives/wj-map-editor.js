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
                { Width: 414, Height: 233, Label: "414 x 233" },
                { Width: 480, Height: 270, Label: "480 x 270" },
                { Width: 870, Height: 300, Label: "870 x 300" },
                { Width: 1000, Height: 400, Label: "1000 x 400" }];
            $scope.OnSizeChange = function () {
                $scope.data.Size.Width = $scope.SelectedSize.Width;
                $scope.data.Size.Height = $scope.SelectedSize.Height;
                console.log('OnSizeChange', $scope.data.Size);
            };
            $scope.ApplyNewAddress = function () {
                $scope.data.Address = $scope.AddressTmp;
            };
            $scope.AddressTmp = $scope.data.Address;
            $scope.SelectedSize = _.findWhere($scope.SizeOptions, { Width: $scope.data.Size.Width });
        }
    };
});