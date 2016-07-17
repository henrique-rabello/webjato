/// <reference path="wj-line-editor.js" />
angular.module("WebjatoDirectives").directive("wjImageEditor", function (CropSVC) {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=",
            zindex: "="
        },
        templateUrl: "image-editor-tpl.html",
        controller: function ($scope, $http, $timeout, FileUploader, $q, ContentTypeList, HandleServerException, WebjatoConfig) {
            var crtlURL = _.findWhere(ContentTypeList, { Enum: $scope.data.Type }).Crtl;
            var OnCropFinish = function (temporaryImage) {
                $http({ method: "POST", url: "../api/" + crtlURL + "/FromTmpImage", params: { imgId: $scope.data.Id }, data: temporaryImage })
                    .success(function (data) {
                        angular.extend($scope.data, data);
                    }).error(HandleServerException);
            };
            var recommendedSizeExists = !!$scope.data.RecommendedSize;
            var url = recommendedSizeExists ? "../api/tmpimg/newWithCanvas?width=" + $scope.data.RecommendedSize.Width + "&height=" + $scope.data.RecommendedSize.Height : "../api/tmpimg/new";
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
                    }, function () {
                        console.log('cancelou');
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
        }
    };
});