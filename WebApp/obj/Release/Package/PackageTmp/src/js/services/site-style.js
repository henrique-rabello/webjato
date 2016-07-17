angular.module("WebjatoServices").service("SiteStyle", function ($http, $location, WebjatoConfig, WebjatoFormatter, HandleServerException) {
    var qs = "";
    if ($location.search().siteId) {
        qs = "?siteId=" + $location.search().siteId;
    }
    $http({ method: "GET", url: "../api/site/get" + qs })
        .success(function (siteData) {
            WebjatoFormatter.Site.Refresh(siteData);
            $http({ method: "GET", url: "../api/frame/get" + qs })
                .success(function (frameData) {
                    WebjatoFormatter.Frame.Refresh(frameData, siteData);
                    $http({ method: "GET", url: "../api/background/get" + qs })
                        .success(function (data) {
                            WebjatoFormatter.Background.Refresh(data, siteData, WebjatoConfig.AssetsPath);
                        }).error(HandleServerException);
                    $http({ method: "GET", url: "../api/header/get" + qs })
                        .success(function (data) {
                            WebjatoFormatter.Header.Refresh(data, WebjatoConfig.AssetsPath);
                        }).error(HandleServerException);
                    $http({ method: "GET", url: "../api/footer/get" + qs })
                        .success(function (data) {
                            WebjatoFormatter.Footer.Refresh(data, siteData, frameData);
                        }).error(HandleServerException);
                    $http({ method: "GET", url: "../api/logo/get" + qs })
                        .success(function (data) {
                            WebjatoFormatter.Logo.Refresh(data, WebjatoConfig.AssetsPath);
                        }).error(HandleServerException);
                }).error(HandleServerException);
        }).error(HandleServerException);
    return WebjatoFormatter;
});