interface IModalScope extends ng.IScope {
    onClickOk: () => void;
    message: string;
}

class ModalService {
    public $inject: Array<string> = ["$rootScope", "$q", "$compile"];
    private $rootScope: ng.IRootScopeService;
    private $q: ng.IQService;
    private $compile: ng.ICompileService;
    private $modalScope: any;
    private modalId: string;
    private defer: ng.IDeferred<void>;

    public constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $compile: ng.ICompileService) {
        this.$rootScope = $rootScope;
        this.$q = $q;
        this.$compile = $compile;
    }

    public Show(message: string): ng.IPromise<void> {
        this.defer = this.$q.defer<void>();
        this.$modalScope = <IModalScope>this.$rootScope.$new(true);
        this.$modalScope.onClickOk = () => { this.OnClickOk(); };
        this.$modalScope.message = message;
        this.modalId = "modal" + new Date().getTime().toString();
        $("body").append("<div id='" + this.modalId + "'><modal on-click-ok='onClickOk();' message='{{message}}'></modal></div>");
        this.$compile($("#" + this.modalId))(this.$modalScope);
        (<ILightboxMe>$("#" + this.modalId)).lightbox_me({
            destroyOnClose: true,
            centered: true,
            closeEsc: false,
            closeClick: false
        });
        return this.defer.promise;
    }

    public OnClickOk(): void {
        this.defer.resolve();
        this.$Destroy();
    }

    private $Destroy(): void {
        this.$modalScope.$destroy();
        $("#" + this.modalId).trigger("close");
    }
}

angular.module("WebjatoServices")
    .service("ModalService", ModalService)
    .directive("modal", (): ng.IDirective => {
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