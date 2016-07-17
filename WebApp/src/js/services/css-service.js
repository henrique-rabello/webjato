var CssService = (function () {
    function CssService($document) {
        this.rulesCount = 0;
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(''));
        document.head.appendChild(style);
        this.sheet = style.sheet;
    }
    CssService.prototype.ApplyCSS = function (rules) {
        var _this = this;
        _.each(rules, function (rule) {
            if (_this.sheet.insertRule) {
                _this.sheet.insertRule(rule.selector + ' { ' + rule.selectorText + ' }', _this.rulesCount);
            }
            else if (_this.sheet.addRule) {
                _this.sheet.addRule(rule.selector, rule.selectorText, _this.rulesCount);
            }
            _this.rulesCount++;
        });
    };
    CssService.$inject = ['$document'];
    return CssService;
}());
angular.module("WebjatoServices").service("CssService", CssService);
