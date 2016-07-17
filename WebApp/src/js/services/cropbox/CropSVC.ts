/// <reference path="../../typings/angular-1.2.d.ts" />
/// <reference path="../../typings/jquery.d.ts" />
/// <reference path="../../typings/lightbox_me.d.ts" />
/// <reference path="../../typings/cropbox.d.ts" />

interface ICropOptions {
    Url: string;
    Width: number;
    Height: number;
}

interface IOnCropParams {
    data64: string;
}

interface ICropBoxScope extends ng.IScope {
    options: ICropOptions;
    cropper: ICropper;
    onCrop: (params: IOnCropParams) => void;
    onCancel: () => void;
}

interface IThumbBoxCSS {
    width: string;
    height: string;
    marginTop: string;
    marginLeft: string;
}

class CropBoxCtrl {
    private $scope: ICropBoxScope;
    public static $inject: Array<string> = ["$scope"];
    public thumbBoxCSS: IThumbBoxCSS;

    public constructor($scope: ICropBoxScope) {
        this.$scope = $scope;
        this.thumbBoxCSS = {
            width: $scope.options.Width + "px",
            height: $scope.options.Height + "px",
            marginTop: (-$scope.options.Height / 2) + "px",
            marginLeft: (-$scope.options.Width / 2) + "px"
        };
        var borderEffectWidth: number = $scope.options.Width - 4;
        $("<style>.thumbBox:after, .thumbBox:before { width: " + borderEffectWidth + "px }</style>").appendTo("head");
        var borderEffectHeight: number = $scope.options.Height - 4;
        $("<style>.thumbBox .inner:after, .thumbBox .inner:before { height: " + borderEffectHeight + "px }</style>").appendTo("head");
    }

    public Cancel(): void {
        this.$scope.onCancel();
    }

    public Confirm(): void {
        this.$scope.onCrop({ data64: this.$scope.cropper.getDataURL() });
    }

    public ZoomIn(): void {
        this.$scope.cropper.zoomIn();
    }

    public ZoomOut(): void {
        this.$scope.cropper.zoomOut();
    }
}

function CropBoxLink($scope: ICropBoxScope, $elem: ng.IAugmentedJQuery): void {
    $scope.cropper = (<ICropBox>($elem.find(".imageBox"))).cropbox({
        imageBox: ".imageBox",
        thumbBox: ".thumbBox",
        spinner: ".spinner",
        imgSrc: $scope.options.Url
    });
}

class CropService {
    public $inject: Array<string> = ["$rootScope", "$q", "$compile"];
    private $rootScope: ng.IRootScopeService;
    private $q: ng.IQService;
    private $compile: ng.ICompileService;
    private $scopeCropBox: ICropBoxScope;
    private modalId: string;
    private defer: ng.IDeferred<string>;

    public constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $compile: ng.ICompileService) {
        this.$rootScope = $rootScope;
        this.$q = $q;
        this.$compile = $compile;
    }

    public Crop(options: ICropOptions): ng.IPromise<string> {
        this.defer = this.$q.defer<string>();
        this.$scopeCropBox = <ICropBoxScope>this.$rootScope.$new(true);
        this.$scopeCropBox.options = options;
        this.$scopeCropBox.onCrop = <any>((data64: string) => { this.OnCropConfirm(data64); });
        this.$scopeCropBox.onCancel = () => { this.OnCropCancel(); };
        this.modalId = "modal" + new Date().getTime().toString();
        $("body").append("<div id='" + this.modalId + "'><cropbox options='options' on-crop='onCrop(data64);' on-cancel='onCancel();'></cropbox></div>");
        this.$compile($("#" + this.modalId))(this.$scopeCropBox);
        (<ILightboxMe>$("#" + this.modalId)).lightbox_me({
            destroyOnClose: true,
            centered: true,
            closeEsc: false,
            closeClick: false
        });
        return this.defer.promise;
    }

    private OnCropConfirm(data64: string): void {
        this.defer.resolve(data64);
        this.$Destroy();
    }

    private OnCropCancel(): void {
        this.defer.reject();
        this.$Destroy();
    }

    private $Destroy(): void {
        this.$scopeCropBox.$destroy();
        $("#" + this.modalId).trigger("close");
    }
}

angular.module("WebjatoServices")
    .service("CropSVC", CropService)
    .directive("cropbox", (): ng.IDirective => {
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