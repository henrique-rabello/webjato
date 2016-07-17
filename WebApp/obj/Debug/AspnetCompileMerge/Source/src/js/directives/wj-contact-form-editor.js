angular.module("WebjatoDirectives").directive("wjContactFormEditor", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=",
            zindex: "="
        },
        templateUrl: "contact-form-editor-tpl.html",
        controller: function ($scope, ColorPickerConfig) {
            $scope.IsEmailValid = function (mail) {
                if (mail == "") return true;
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(mail);
            };
            $scope.OnSelectedPartChange = function () {
                $scope.SelectedColor = $scope.data[$scope.SelectedPart];
                $scope.Undoable = null;
                $scope.PreviousColor = $scope.SelectedColor;
            };
            $scope.OnColorChange = function () {
                $scope.data[$scope.SelectedPart] = $scope.SelectedColor;
                $scope.Undoable = true;
            };
            $scope.Undo = function () {
                $scope.data[$scope.SelectedPart] = $scope.PreviousColor;
                $scope.SelectedColor = $scope.PreviousColor;
                $scope.Undoable = false;
            };
            $scope.SelectedPart = "BorderColor";
            $scope.SelectedColor = $scope.data.BorderColor;
            $scope.PreviousColor = $scope.data.BorderColor;
            $scope.Undoable = false;
            $scope.ColorPickerConfig = angular.extend({ change: $scope.OnColorChange }, ColorPickerConfig);
        }
    };
});