var CropImageCrtl = function ($scope, $http, $cookies, gettextCatalog, WebjatoConfig, HandleServerException) {
    $scope.working = false;
    $scope.temporaryImage = null;
    $scope.deferred = null;
    $scope.Config = WebjatoConfig;
    $scope.CropArea = { x: 0, y: 0, w: 0, h: 0 };
    $scope.CropOptions = null;
    $scope.img = "";
    $scope.OnSelect = function (coords) {
        $scope.CropArea = {
            x: ~~coords.x,
            y: ~~coords.y,
            w: ~~coords.w,
            h: ~~coords.h
        };
    };
    $scope.OnImageLoad = function () {
        $scope.working = false;
        $scope.$apply();
    }
    $scope.Crop = function () {
        $scope.working = true;
        $http({ method: "POST", url: "../api/tmpimg/crop", data: { id: $scope.temporaryImage.Id, x: $scope.CropArea.x, y: $scope.CropArea.y, w: $scope.CropArea.w, h: $scope.CropArea.h, keepOriginalImage: $scope.CropOptions.keepOriginalImage } })
            .success(function (data) {
                $scope.deferred.resolve(data);
                $(".crop-tool").trigger("close");
            }).error(HandleServerException);
    };
    $scope.KeepOriginal = function () {
        $scope.deferred.resolve($scope.temporaryImage);
        $(".crop-tool").trigger("close");
    };
    $scope.Cancel = function () {
        $http({ method: "POST", url: "../api/tmpimg/delete", data: $scope.temporaryImage });
        $scope.deferred.reject();
        $(".crop-tool").trigger("close");
    };
    $scope.temporaryImage = $scope.$parent.CropInfo.temporaryImage;
    $scope.deferred = $scope.$parent.CropInfo.deferred;
    $scope.CropOptions = $scope.$parent.CropInfo.options;
    $scope.img = $scope.Config.AssetsPath + $scope.temporaryImage.Key;
    $scope.working = true;
    $(".crop-tool").lightbox_me({ centered: true, closeClick: false, closeEsc: false, destroyOnClose: true });
    gettextCatalog.currentLanguage = $cookies.language;
};