angular.module("WebjatoServices").service("SocialUtil", function () {
    return {
        AnyPluginEnabled: function (data) {
            return data.Facebook.Enabled || data.Twitter.Enabled || data.LinkedIn.Enabled || data.YouTube.Enabled || data.GooglePlus.Enabled || data.Pinterest.Enabled || data.Instagram.Enabled;
        }
    };
});