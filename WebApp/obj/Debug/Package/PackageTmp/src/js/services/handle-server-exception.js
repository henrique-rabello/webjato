angular.module("WebjatoServices").service("HandleServerException", function () {
    return function (data, status, headers, config) {
        switch (status) {
            case 401:
                top.location.href = "../session.html";
                break;
            default:
                alert("Status '" + status + "' não tratado.");
                break;
        }
    };
});