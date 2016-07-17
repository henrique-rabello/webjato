/// <reference path="../../typings/angular-1.2.d.ts" />
/// <reference path="../../typings/jquery.d.ts" />
/// <reference path="../../typings/lightbox_me.d.ts" />
/// <reference path="../../typings/cropbox.d.ts" />
var CropBoxCtrl = (function () {
    function CropBoxCtrl($scope) {
        this.$scope = $scope;
        this.thumbBoxCSS = {
            width: $scope.options.Width + "px",
            height: $scope.options.Height + "px",
            marginTop: (-$scope.options.Height / 2) + "px",
            marginLeft: (-$scope.options.Width / 2) + "px"
        };
        var borderEffectWidth = $scope.options.Width - 4;
        $("<style>.thumbBox:after, .thumbBox:before { width: " + borderEffectWidth + "px }</style>").appendTo("head");
        var borderEffectHeight = $scope.options.Height - 4;
        $("<style>.thumbBox .inner:after, .thumbBox .inner:before { height: " + borderEffectHeight + "px }</style>").appendTo("head");
    }
    CropBoxCtrl.prototype.Cancel = function () {
        this.$scope.onCancel();
    };
    CropBoxCtrl.prototype.Confirm = function () {
        this.$scope.onCrop({ data64: this.$scope.cropper.getDataURL() });
    };
    CropBoxCtrl.prototype.ZoomIn = function () {
        this.$scope.cropper.zoomIn();
    };
    CropBoxCtrl.prototype.ZoomOut = function () {
        this.$scope.cropper.zoomOut();
    };
    CropBoxCtrl.$inject = ["$scope"];
    return CropBoxCtrl;
}());
function CropBoxLink($scope, $elem) {
    $scope.cropper = ($elem.find(".imageBox")).cropbox({
        imageBox: ".imageBox",
        thumbBox: ".thumbBox",
        spinner: ".spinner",
        imgSrc: $scope.options.Url
    });
}
var CropService = (function () {
    function CropService($rootScope, $q, $compile) {
        this.$inject = ["$rootScope", "$q", "$compile"];
        this.$rootScope = $rootScope;
        this.$q = $q;
        this.$compile = $compile;
    }
    CropService.prototype.Crop = function (options) {
        var _this = this;
        this.defer = this.$q.defer();
        this.$scopeCropBox = this.$rootScope.$new(true);
        this.$scopeCropBox.options = options;
        this.$scopeCropBox.onCrop = (function (data64) { _this.OnCropConfirm(data64); });
        this.$scopeCropBox.onCancel = function () { _this.OnCropCancel(); };
        this.modalId = "modal" + new Date().getTime().toString();
        $("body").append("<div id='" + this.modalId + "'><cropbox options='options' on-crop='onCrop(data64);' on-cancel='onCancel();'></cropbox></div>");
        this.$compile($("#" + this.modalId))(this.$scopeCropBox);
        $("#" + this.modalId).lightbox_me({
            destroyOnClose: true,
            centered: true
        });
        return this.defer.promise;
    };
    CropService.prototype.OnCropConfirm = function (data64) {
        this.defer.resolve(data64);
        this.$Destroy();
    };
    CropService.prototype.OnCropCancel = function () {
        this.defer.reject();
        this.$Destroy();
    };
    CropService.prototype.$Destroy = function () {
        this.$scopeCropBox.$destroy();
        $("#" + this.modalId).trigger("close");
    };
    return CropService;
}());
angular.module("WebjatoServices")
    .service("CropSVC", CropService)
    .directive("cropbox", function () {
    return {
        replace: true,
        restrict: "E",
        templateUrl: "/cropbox.html",
        scope: {
            options: "=",
            onCrop: "&",
            onCancel: "&"
        },
        controller: CropBoxCtrl,
        controllerAs: 'cbCtrl',
        link: CropBoxLink
    };
});
//# sourceMappingURL=CropSVC.js.map