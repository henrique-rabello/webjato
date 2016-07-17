angular.module("WebjatoServices").service("ServerSync", function ($rootScope, $http, $q, ContentTypeList, ServerSyncCommands) {
    return {
        isBusy: false,
        itemsToSync: [],
        deletedItems: [],
        Sync: function () {
            var _this = this;
            this.itemsToSync = _.reject(this.itemsToSync, function (item) {
                return _.contains(_this.deletedItems, item.data.Id);
            });
            if ((this.itemsToSync.length == 0) || this.isBusy) return;
            this.isBusy = true;
            var currentItem = this.itemsToSync.shift();
            var promisse_OnComplete = function (success, data, error) {
                if (success) {
                    currentItem.deferred.resolve(data);
                }
                else {
                    currentItem.deferred.reject(error);
                }
                if (currentItem.cmd == "DELETE") {
                    _this.deletedItems.push(currentItem.data.Id);
                }
                _this.isBusy = false;
                _this.Sync();
            };
            var promise = null;
            switch (currentItem.cmd) {
                case ServerSyncCommands.ALL:
                    promise = $http({ method: "POST", url: "../api/" + _.findWhere(ContentTypeList, { Enum: currentItem.data.Type }).Crtl + "/update", data: currentItem.data });
                    break;
                case ServerSyncCommands.POSITION:
                    promise = $http({ method: "POST", url: "../api/content/position", data: currentItem.data });
                    break;
                case ServerSyncCommands.DELETE:
                    promise = $http({ method: "POST", url: "../api/content/delete", data: currentItem.data });
                    break;
                case ServerSyncCommands.ZINDEX:
                    promise = $http({ method: "POST", url: "../api/content/UpdateZIndex", data: currentItem.data });
                    break;
                case ServerSyncCommands.DUPLICATE:
                    promise = $http({
                        method: "POST",
                        url: "../api/" + _.findWhere(ContentTypeList, { Enum: currentItem.data.Type }).Crtl + "/duplicate",
                        params: {
                            zindex: currentItem.args
                        },
                        data: currentItem.data
                    });
                    break;
            }
            promise.success(function (data) { promisse_OnComplete(true, data, null); });
            promise.error(function (error) { promisse_OnComplete(false, null, error); });
        },
        SyncItem: function (item, operation, args) {
            var deferred = $q.defer();
            this.itemsToSync.push({
                data: item,
                cmd: operation,
                deferred: deferred,
                args: args
            });
            this.Sync();
            return deferred.promise;
        }
    }
});