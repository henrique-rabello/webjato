angular.module("WebjatoConfig").factory("WebjatoConfig", function ($http) {
    var Config = {
        AssetsPath: ""
    }
    $http({
        method: "GET",
        url: "../api/site/config"
    })
    .success(
        function (data) {
            Config.AssetsPath = data.AssetsPath;
        });
    return Config;
});