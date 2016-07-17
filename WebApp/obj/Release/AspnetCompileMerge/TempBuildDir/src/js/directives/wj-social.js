angular.module("WebjatoDirectives").directive("wjSocial", function (SocialIconSize, SocialUtil) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "social-tpl.html",
        link: function (scope, elem, attrs) {
            var folder = "/images/social/";
            scope.Icons = {
                Facebook: [folder + "icone_face_peq.png", folder + "icone_face_med.png", folder + "icone_face_gran.png"],
                Twitter: [folder + "icone_twiter_peq.png", folder + "icone_twiter_med.png", folder + "icone_twiter_gran.png"],
                Linkedin: [folder + "icone_in_peq.png", folder + "icone_in_med.png", folder + "icone_in_gran.png"],
                Youtube: [folder + "icone_tube_peq.png", folder + "icone_tube_med.png", folder + "icone_tube_gran.png"],
                GooglePlus: ["http://placehold.it/16x16.png&text=G", "http://placehold.it/24x24.png&text=G", "http://placehold.it/32x32.png&text=G"],
                Pinterest: ["http://placehold.it/16x16.png&text=P", "http://placehold.it/24x24.png&text=P", "http://placehold.it/32x32.png&text=P"],
                Instagram: ["http://placehold.it/16x16.png&text=I", "http://placehold.it/24x24.png&text=I", "http://placehold.it/32x32.png&text=I"]
            };
            scope.IconsSize = [SocialIconSize.SMALL, SocialIconSize.REGULAR, SocialIconSize.LARGE];
            scope.$watch("data", function () {
                if (scope.data == null) {
                    return;
                }
                scope.AnyPluginEnabled = SocialUtil.AnyPluginEnabled(scope.data);
            }, true);
            //scope.OnMove = function (x, y) {
            //    scope.data.Position.X = parseInt(x, 10);
            //    scope.data.Position.Y = parseInt(y, 10);
            //    scope.$digest();
            //};
        }
    };
});