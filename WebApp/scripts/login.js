var gScope = null;
window.fbAsyncInit = function () {
    FB.init({
        appId: '538659419649795',
        xfbml: true,
        version: 'v2.4'
    });
};

function LoginWithFacebook() {
    gScope.WorkingFB = true;
    gScope.$apply();
    FB.api("/me?fields=name,email", function (response) {
        var id = response.id;
        var email = response.email;
        var fullname = response.name;
        gScope.NewFBAccount(id, email, fullname, "");
    });
}

angular.module("LoginApp", ["gettext", "ngCookies", "WebjatoDirectives", "WebjatoServices"])
    .controller("LoginCrtl",
    function ($scope, $http, $cookies, gettextCatalog) {
        $scope.Email = "";
        $scope.Password = "";
        $scope.FullName = "";
        $scope.ShowInvalidLogin = false;
        $scope.ShowEmailInUse = false;
        $scope.ShowFBEmailInUse = false;
        $scope.ShowPwdEmailNotFound = false;
        $scope.ShowPwdEmailSend = false;
        $scope.ShowPwdFBInUse = false;
        $scope.RetrievePasswordStatus = -1;
        $scope.Working = false;
        $scope.WorkingFB = false;
        $scope.Login = function () {
            $scope.ShowInvalidLogin = false;
            $scope.Working = true;
            $http({ method: "POST", url: "/api/user/login", params: { email: $scope.Email, password: $scope.Password } })
                .success(function (data, status, headers, config) {
                    top.location.href = "/main.html";
                })
                .error(function (data, status, headers, config) {
                    $scope.ShowInvalidLogin = true;
                    $scope.Working = false;
                });
        };
        $scope.LoginFB = function (fbId, email) {
            $scope.ShowInvalidLogin = false;
            $scope.WorkingFB = true;
            $http({ method: "POST", url: "/api/user/loginfacebook", params: { fbid: fbId, email: email } })
                .success(function (data, status, headers, config) {
                    $scope.WorkingFB = false;
                    top.location.href = "/main.html";
                })
                .error(function (data, status, headers, config) {
                    $scope.ShowInvalidLogin = true;
                });
        };
        $scope.RetrievePassword = function () {
            $scope.RetrievePasswordStatus = -1;
            $http({ method: "POST", url: "/api/user/RetrievePassword", params: { email: $scope.Email } })
                .success(function (data, status, headers, config) {
                    $scope.RetrievePasswordStatus = parseInt(data);
                });
        };
        $scope.NewAccount = function () {
            $scope.ShowEmailInUse = false;
            $scope.Working = true;
            $http({ method: "POST", url: "/api/user", params: { email: $scope.Email, password: $scope.Password, fullname: $scope.FullName } })
                .success(function (data, status, headers, config) {
                    $scope.Working = false;
                    if (String(data) == "true") {
                        $scope.Login();
                    }
                    else {
                        $scope.ShowEmailInUse = true;
                    }
                });
        };
        $scope.NewFBAccount = function (fbId, email, fullname, town) {
            $scope.ShowFBEmailInUse = false;
            $scope.WorkingFB = true;
            $http({ method: "POST", url: "/api/user/facebook", params: { email: email, fullname: fullname, remoteid: fbId, town: town } })
                .success(function (data, status, headers, config) {
                    if (String(data) == "false") {
                        $scope.ShowFBEmailInUse = true;
                        $scope.WorkingFB = false;
                    }
                    else {
                        $scope.LoginFB(fbId, email)
                    }
                });
        };
        $scope.IsEmailValid = function () {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test($scope.Email);
        };
        $scope.IsFullNameValid = function () {
            return $scope.FullName.length >= 6;
        };
        $scope.IsPasswordValid = function () {
            return $scope.Password.length >= 5;
        };
        $scope.ResetErrors = function () {
            $scope.ShowInvalidLogin = $scope.ShowEmailInUse = $scope.ShowFBEmailInUse = false;
            $scope.RetrievePasswordStatus = -1;
        };
        gScope = $scope;
    });