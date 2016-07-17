angular.module("WebjatoDirectives").directive("wjVideo", function ($sce, ServerSync) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "video-tpl.html",
        link: function (scope, elem, attrs) {
            var Refresh = function () {
                if (angular.isDefined(scope.data.VideoId)) {
                    var videoSource = (scope.data.VideoType == 1) ? "http://www.youtube.com/embed/" : "//player.vimeo.com/video/";
                    scope.url = scope.data.VideoId ? $sce.trustAsResourceUrl(videoSource + scope.data.VideoId) : null;
                }
            };
            scope.$watch("data", Refresh, true);
        }
    };
});