/// <reference path="../typings/angular-1.2.d.ts" />
/// <reference path="../typings/underscore.d.ts" />

class CssService {
    public static $inject: Array<string> = ['$document'];
    private $document: Document;
    private rulesCount: number = 0;
    private sheet: CSSStyleSheet;

    constructor($document: any) {
        var style: HTMLStyleElement = document.createElement('style');
        style.appendChild(document.createTextNode(''));
        document.head.appendChild(style);
        this.sheet = <any>style.sheet;
    }

    public ApplyCSS(rules: Array<CSSPageRule>): void {
        _.each(rules, (rule): void => {
            if (this.sheet.insertRule) {
                this.sheet.insertRule(rule.selector + ' { ' + rule.selectorText + ' }', this.rulesCount);
            }
            else if (this.sheet.addRule) {
                this.sheet.addRule(rule.selector, rule.selectorText, this.rulesCount);
            }
            this.rulesCount++;
        });
    }
}

angular.module("WebjatoServices").service("CssService", CssService);