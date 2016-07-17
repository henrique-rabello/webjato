angular.module("WebjatoServices").service("URLParser", function () {
    return function (url) {
        return new URI(url);
    };
});