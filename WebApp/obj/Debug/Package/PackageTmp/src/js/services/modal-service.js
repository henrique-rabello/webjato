var ModalService = (function () {
    function ModalService($rootScope, $q, $compile) {
        this.$inject = ["$rootScope", "$q", "$compile"];
        this.$rootScope = $rootScope;
        this.$q = $q;
        this.$compile = $compile;
    }
    ModalService.prototype.Show = function (message) {
        var _this = this;
        this.defer = this.$q.defer();
        this.$modalScope = this.$rootScope.$new(true);
        this.$modalScope.onClickOk = function () { _this.OnClickOk(); };
        this.$modalScope.message = message;
        this.modalId = "modal" + new Date().getTime().toString();
        $("body").append("<div id='" + this.modalId + "'><modal on-click-ok='onClickOk();' message='{{message}}'></modal></div>");
        this.$compile($("#" + this.modalId))(this.$modalScope);
        $("#" + this.modalId).lightbox_me({
            destroyOnClose: true,
            centered: true,
            closeEsc: false,
            closeClick: false
        });
        return this.defer.promise;
    };
    ModalService.prototype.OnClickOk = function () {
        this.defer.resolve();
        this.$Destroy();
    };
    ModalService.prototype.$Destroy = function () {
        this.$modalScope.$destroy();
        $("#" + this.modalId).trigger("close");
    };
    return ModalService;
}());
angular.module("WebjatoServices")
    .service("ModalService", ModalService)
    .directive("modal", function () {
    return {
        replace: true,
        restrict: "E",
        templateUrl: "/modal-alert.html",
        scope: {
            message: "@",
            onClickOk: "&"
        },
        controller: function ($scope, $sce) {
            $scope.GetTrustedMessage = function () {
                return $sce.trustAsHtml($scope.message);
            };
        }
    };
});
