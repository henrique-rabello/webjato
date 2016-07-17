/// <reference path="../typings/angular-1.2.d.ts" />
/// <reference path="../entities/Page.ts" />
/// <reference path="../services/modal-service.ts" />

interface PageTarget extends Page {
	SelectedAsTarget: boolean;
}

interface IScopeWjDuplicateEditor extends ng.IScope {
    PageList: Array<PageTarget>;
    SelectEverything: boolean;
    SelectedPage: string;
}

angular.module("WebjatoDirectives").directive("wjDuplicateEditor", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/duplicate-editor.html",
        scope: {
            PageList: "=pageList",
            PageCurrent: "=pageCurrent"
        },
        controller: function ($scope: IScopeWjDuplicateEditor, ModalService: ModalService) {
            $scope.SelectedPage = null;
            $scope.SelectEverything = false;
            $scope.$watch("SelectEverything", function (newValue: boolean) {
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