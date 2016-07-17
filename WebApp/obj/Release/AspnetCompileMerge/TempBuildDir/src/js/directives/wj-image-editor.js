/// <reference path="wj-line-editor.js" />
angular.module("WebjatoDirectives").directive("wjImageEditor", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=",
            zindex: "="
        },
        templateUrl: "image-editor-tpl.html",
        controller: function ($scope, $http, $timeout, $fileUploader, $q, ContentTypeList, HandleServerException) {
            var OnCropFinish = function (temporaryImage) {
                var crtlURL = _.findWhere(ContentTypeList, { Enum: $scope.data.Type }).Crtl;
                $http({ method: "POST", url: "../api/" + crtlURL + "/FromTmpImage", params: { imgId: $scope.data.Id }, data: temporaryImage })
                    .success(function (data) {
                        angular.extend($scope.data, data);
                    }).error(HandleServerException);
            };
            var uploader = $fileUploader.create({ scope: $scope, url: "../api/tmpimg/new" });
            uploader.bind("afteraddingfile", function (event, item) {
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
            });
            uploader.bind("progress", function (event, item, progress) { $scope.UploadProgress = progress; });
            uploader.bind("success", function (event, xhr, item, response) {
                //Older IE's
                if (typeof (response) == "string") {
                    var aux = response.replace("<PRE>", "").replace("</PRE>", "");
                    response = JSON.parse(aux);
                }
                $scope.Uploading = false;
                item.remove();
                var deferred = $q.defer();
                deferred.promise.then(OnCropFinish, null);
                $scope.$emit("OnCropRequest", response, deferred, { allowResize: true, boxWidth: 640, boxHeight: 480, setSelect: [0, 0, response.Width * 0.7, response.Height * 0.7], type: "logo", keepOriginalImage: ($scope.data.Type == 10) });
            });
            $scope.IsFileValid = true;
            $scope.Uploading = false;
        }
    };
});