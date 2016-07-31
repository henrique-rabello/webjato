angular.module("WebjatoDirectives").directive("wjDuplicateEditor", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/duplicate-editor.html",
        scope: {
            PageList: "=pageList",
            PageCurrent: "=pageCurrent"
        },
        controller: function ($scope, ModalService) {
            $scope.SelectedPage = null;
            $scope.SelectEverything = false;
            $scope.$watch("SelectEverything", function (newValue) {
                $scope.$emit(newValue ? "SelectAll" : "DeselectAll");
            });
            $scope.$on("ValidateMassDuplicateRequest", function () {
                if (!$scope.SelectedPage) {
                    ModalService.Show("Você deve selecionar uma página para continuar.");
                }
                else {
                    $scope.$emit("OnMassDuplicateRequest", [$scope.SelectedPage]);
                }
            });
        }
    };
});
