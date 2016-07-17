angular.module("WebjatoConfig").factory("WebjatoConfig", function ($http, $location) {
    var qs = "";
    if ($location.search().siteId) {
        qs = "?siteId=" + $location.search().siteId;
    }
    var Config = {
        AssetsPath: "",
        AssetsLocalPath: "/tmp/"
    };
    $http({
        method: "GET",
        url: "../api/site/config" + qs
    })
    .success(
        function (data) {
            Config.AssetsPath = data.AssetsPath;
        });
    return Config;
});