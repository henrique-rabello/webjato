﻿angular.module("WebjatoDirectives").directive("wjVideoEditor", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "video-editor-tpl.html",
        scope: {
            data: "=",
            zindex: "="
        },
        controller: function ($scope, URLParser) {
            $scope.VideoSizeOptions = [
                { Width: 230, Height: 161, Label: "230 x 161" },
                { Width: 450, Height: 315, Label: "450 x 315" },
                { Width: 480, Height: 360, Label: "480 x 360" },
                { Width: 640, Height: 480, Label: "640 x 480" }
            ];
            $scope.OnVideoSizeChange = function () {
                $scope.data.Size.Width = $scope.data.SelectedSize.Width;
                $scope.data.Size.Height = $scope.data.SelectedSize.Height;
            };
            var GetVideoType = function (hostname) {
                if ((hostname.indexOf("youtube") != -1) || (hostname.indexOf("youtu.be") != -1)) {
                    return 1;
                }
                if (hostname.indexOf("vimeo") != -1) {
                    return 2;
                }
                return null;
            };
            $scope.OnRawURLChange = function () {
                var uri = URLParser($scope.data.RawURL);
                var videoType = GetVideoType(uri.hostname());
                if (!videoType) return;
                var videoId = (videoType == 1) ? uri.search(true).v : uri.path().replace("/", "");
                if (!videoId) return;
                $scope.data.VideoType = videoType;
                $scope.data.VideoId = videoId;
            };
            $scope.data.SelectedSize = _.findWhere($scope.VideoSizeOptions, { Width: $scope.data.Size.Width });
            $scope.data.RawURL = $scope.data.VideoId ? ($scope.data.VideoType == 1 ? "https://www.youtube.com/watch?v=" + $scope.data.VideoId : "http://vimeo.com/" + $scope.data.VideoId) : "";
        }
    };
});