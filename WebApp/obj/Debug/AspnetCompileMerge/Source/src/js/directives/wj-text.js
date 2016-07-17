angular.module("WebjatoDirectives").directive("wjText", function (ContentUtils) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            lang: "@",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "text-tpl.html",
        controller: function($scope, $timeout, $sce) {
            $scope.OnTextChange = function (newText) {
                $timeout(function () {
                    $scope.data.Value = newText;
                }, 0);
            };
            $scope.OnSizeChange = function (w, h) {
                $scope.data.Size.Width = w;
                $scope.data.Size.Height = h;
                $scope.$apply();
            };
            $scope.TrustedText = $sce.trustAsHtml;
        },
        link: {
            pre: function (scope) {
                scope.resizeOptions = ContentUtils.GetResizeOptions(scope.data);
                scope.TextEditorOpts = {
                    content: scope.data.Value ? scope.data.Value : "Escreva aqui...",
                    language: (scope.lang != "en_US")? scope.lang : null
                };
            }
        }
    };
});