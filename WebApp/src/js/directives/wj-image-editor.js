angular.module("WebjatoDirectives").directive("wjImageEditor", function (CropSVC) {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=",
            zindex: "="
        },
        templateUrl: "image-editor-tpl.html",
        controller: function ($scope, $http, $timeout, FileUploader, $q, ContentTypeList, HandleServerException, WebjatoConfig, ModalService) {
            var imagebkp = null;
            var crtlURL = _.findWhere(ContentTypeList, { Enum: $scope.data.Type }).Crtl;
            var OnCropFinish = function (temporaryImage) {
                if ((imagebkp == null) && $scope.data.ImageKey) {
                    $http({ method: "POST", url: "../api/tmpimg/newFromContentImage", params: { contentId: $scope.data.Id, contentType: $scope.data.Type } })
                        .success(function (newTmpImg) {
                            imagebkp = newTmpImg;
                            $http({ method: "POST", url: "../api/" + crtlURL + "/FromTmpImage", params: { imgId: $scope.data.Id }, data: temporaryImage })
                                .success(function (data) {
                                    angular.extend($scope.data, data);
                                }).error(HandleServerException);
                        }).error(HandleServerException);
                }
                else {
                    $http({ method: "POST", url: "../api/" + crtlURL + "/FromTmpImage", params: { imgId: $scope.data.Id }, data: temporaryImage })
                        .success(function (data) {
                            angular.extend($scope.data, data);
                        }).error(HandleServerException);
                }
            };
            var recommendedSizeExists = !!$scope.data.RecommendedSize;
            var url = recommendedSizeExists ? "../api/tmpimg/newWithCanvas?width=" + $scope.data.RecommendedSize.Width + "&height=" + $scope.data.RecommendedSize.Height : "../api/tmpimg/new";
            $scope.urlWarning1 = false;
            $scope.urlWarning2 = false;
            $scope.uploader = new FileUploader({ scope: $scope, url: url });
            $scope.uploader.onAfterAddingFile = function (item) {
                var type = "|" + item.file.type.slice(item.file.type.lastIndexOf("/") + 1) + "|";
                $scope.IsFileValid = ("|jpg|png|jpeg|gif|".indexOf(type) !== -1);
                if (!$scope.IsFileValid) {
                    item.remove();
                    $timeout(function () { $scope.IsFileValid = true; }, 5000);
                }
                else {
                    $scope.Uploading = true;
                    item.upload();
                }
            };
            $scope.uploader.onProgressItem = function (item, progress) { $scope.UploadProgress = progress; };
            $scope.uploader.onSuccessItem = function (item, response) {
                //Older IE's
                if (typeof (response) == "string") {
                    var aux = response.replace("<PRE>", "").replace("</PRE>", "");
                    response = JSON.parse(aux);
                }
                $scope.Uploading = false;
                item.remove();
                if (recommendedSizeExists) {
                    CropSVC.Crop({
                        Url: WebjatoConfig.AssetsLocalPath + response.LocalKey,
                        Width: $scope.data.RecommendedSize.Width,
                        Height: $scope.data.RecommendedSize.Height
                    }).then(function (data64) {
                        $http({ method: "POST", url: "../api/tmpimg/newFromBase64", data: { Contents: data64, Name: response.Name } })
                            .success(function (data) {
                                OnCropFinish(data);
                            }).error(HandleServerException);
                    });
                }
                else {
                    var deferred = $q.defer();
                    deferred.promise.then(OnCropFinish, null);
                    $scope.$emit("OnCropRequest", response, deferred, {
                        allowResize: true,
                        boxWidth: 640,
                        boxHeight: 480,
                        setSelect: [0, 0, response.Width * 0.7, response.Height * 0.7],
                        type: "logo",
                        keepOriginalImage: ($scope.data.Type == 10)
                    });
                }
            };
            $scope.IsFileValid = true;
            $scope.Uploading = false;
            $scope.UrlDraft = $scope.data.Type == 5 ? $scope.data.LinkURL : "";
            $scope.UrlOnChange = function () {
                if ($scope.UrlDraft) {
                    var uri = new URI($scope.UrlDraft).normalize();
                    if (!uri.protocol()) {
                        uri = uri.protocol("http");
                    }
                    $scope.data.LinkURL = uri.toString();
                }
                else {
                    $scope.data.LinkURL = null;
                }
            };
            $scope.$on("RollbackOnImageEditor", function (sender, data, backup) {
                if (!imagebkp) {
                    $scope.$emit("OnContentRollback", data, backup);
                    return;
                }
                $http({ method: "POST", url: "../api/" + crtlURL + "/Restore", params: { tmpImgId: imagebkp.Id }, data: backup })
                    .success(function (restoredImage) {
                        $scope.$emit("OnContentRollback", data, restoredImage);
                    }).error(HandleServerException);
            });
            $scope.$on("OnImageCommit", function () {
                if (($scope.data.Type == 5) && ($scope.data.LinkType == "1") && !$scope.data.LinkURL) {
                    ModalService.Show("Atenção! Você deve entrar com um link para continuar.").then(function () {
                        $scope.urlWarning1 = true;
                        $timeout(function () { $scope.urlWarning1 = false; }, 3000);
                    })
                    return;
                }
                if (($scope.data.Type == 5) && ($scope.data.LinkType == "0") && (!$scope.data.TargetPageId)) {
                    ModalService.Show("Atenção! Você deve selecionar uma página de link para continuar.").then(function () {
                        $scope.urlWarning2 = true;
                        $timeout(function () { $scope.urlWarning2 = false; }, 3000);
                    })
                    return;
                }
                $scope.$emit("OnContentCommit", $scope.data);
            });
        }
    };
});