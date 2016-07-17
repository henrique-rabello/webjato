/// <reference path="../typings/angular-1.2.d.ts" />

interface ISelectBoxItScope extends ng.IScope {
    options: Array<ISelectBoxItItem>;
    enabled: boolean;
    onOptionSelect: (value: any) => void;
    currentOption: ISelectBoxItItem;
	title: string;
}

interface ISelectBoxItJquery extends JQuery {
    selectBoxIt: () => ISelectBoxIt;
}

interface ISelectBoxIt {
    data: (v: string) => ISelectBoxIt;
    remove: () => void;
    add: (item: ISelectBoxItItem) => void;
    enable: () => void;
    disable: () => void;
    selectOption: (value: string) => void;
}

interface ISelectBoxItItem {
    value: string;
    text: string;
}

angular.module("WebjatoDirectives").directive("wjSelectBoxIt", function (): ng.IDirective {
    var ignoreChange = false;
    var selectBoxIt: ISelectBoxIt = null;
    return {
        restrict: "E",
        replace: true,
        template: "<select></select>",
        scope: {
            options: "=",
            enabled: "=",
            onOptionSelect: "&",
            currentOption: "=",
			title: "@"
        },
        link: function (scope: ISelectBoxItScope, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {
            selectBoxIt = (<ISelectBoxItJquery>$(elem)).selectBoxIt().data("selectBox-selectBoxIt");
            $(elem).change(function () {
                if (ignoreChange) {
                    ignoreChange = false;
                    return;
                }
                scope.onOptionSelect({ value: $(elem).val() });
                scope.$apply();
            });
            scope.$watch("options", function (value: Array<Object>): void {
                if (!(scope.options && scope.options.length > 0)) {
                    return;
                }
                selectBoxIt.remove();
                _.each(scope.options, function (item: ISelectBoxItItem): void {
                    selectBoxIt.add({ value: item.value, text: item.text });
                });
            });
            scope.$watch("enabled", function (value: boolean): void {
                if (value) {
                    selectBoxIt.enable();
                }
                else {
                    selectBoxIt.disable();
                }
            });
            scope.$watch("currentOption", function (): void {
                if (!scope.currentOption) {
                    return;
                }
                ignoreChange = true;
                selectBoxIt.selectOption(scope.currentOption.value);
            });
			if (!scope.title) {
				return;
			}
			$(elem).bind({
				"create": _.debounce(function () {
					var e = $($(".selectboxit-container")[0]);
					e.addClass("mouse-seta");
					e.attr("title", scope.title);
					(<any>e).tipsy({ gravity: "e" });
				}, 1000)
			});
        }
    };
});