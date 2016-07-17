angular.module("WebjatoDirectives").directive("wjContactForm", function (ServerSync) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "contact-form-tpl.html"
    };
});