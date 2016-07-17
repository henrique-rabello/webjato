angular.module("WebjatoDirectives").directive("wjAnimate", function ($timeout, $parse, ServerSync, ServerSyncCommands) {
    return {
        restrict: "A",
        replace: false,
        link: function (scope, elem, attrs) {
            var data = $parse(attrs.wjAnimate)(scope);
            //ANIMATE ZINDEX
            var oldZindex = null;
            scope.$watch(
                function () {
                    return data.Position.ZIndex;
                }, function (newValue) {
                    if (!oldZindex) {
                        oldZindex = newValue;
                        return;
                    }
                    var cls = newValue > oldZindex ? "zindex-up" : "zindex-down";
                    elem.addClass(cls);
                    oldZindex = newValue;
                    $timeout(function () {
                        elem.removeClass(cls);
                    }, 400);
                });
            //ANIMATE DUPLICATE
            //var duplicateWatcher = scope.$watch(function () { return data.Duplicated; }, function () {
            //    if (!data.Duplicated) {
            //        duplicateWatcher();
            //        return;
            //    }
            //    elem.addClass("duplicated");
            //    if (!data.DuplicatedMove) {
            //    	return;
            //    }
            //    $timeout(function () {
            //        data.Position.X += 50;
            //        data.Position.Y += 50;
            //    }, 100);
            //    $timeout(function () {
            //        elem.removeClass("duplicated");
            //        ServerSync.SyncItem(data, ServerSyncCommands.POSITION);
            //    }, 500);
            //});
        }
    };
});