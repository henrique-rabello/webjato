angular.module("WebjatoServices").service("SiteStyle", function ($http, WebjatoFormatter, HandleServerException) {
    $http({ method: "GET", url: "../api/site/get" })
        .success(function (siteData) {
            WebjatoFormatter.Site.Refresh(siteData);
            $http({ method: "GET", url: "../api/frame/get" })
                .success(function (frameData) {
                    WebjatoFormatter.Frame.Refresh(frameData, siteData);
                    $http({ method: "GET", url: "../api/background/get" }).success(function (data) { WebjatoFormatter.Background.Refresh(data, siteData); }).error(HandleServerException);
                    $http({ method: "GET", url: "../api/header/get" }).success(function (data) { WebjatoFormatter.Header.Refresh(data); }).error(HandleServerException);
                    $http({ method: "GET", url: "../api/footer/get" }).success(function (data) { WebjatoFormatter.Footer.Refresh(data, siteData, frameData); }).error(HandleServerException);
                    $http({ method: "GET", url: "../api/logo/get" }).success(function (data) { WebjatoFormatter.Logo.Refresh(data); }).error(HandleServerException);
                }).error(HandleServerException);
        }).error(HandleServerException);
    return WebjatoFormatter;
});