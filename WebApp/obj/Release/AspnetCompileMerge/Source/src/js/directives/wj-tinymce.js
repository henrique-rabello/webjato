angular.module("WebjatoDirectives").directive("wjTinymce", function ($timeout) {
    return {
        restrict: "E",
        scope: {
            onTextChange: "&",
            enabled: "=",
            options: "=textOptions",
            textId: "@"
        },
        templateUrl: "tinymce-tpl.html",
        replace: true,
        link: {
            post: function (scope, elem, attrs) {
                var id = scope.textId + " .editor";
                var editor = null;
                var currentTextValue = scope.options.content;
                var textEditorOptions = {
                    browser_spellcheck: true,
                    font_formats: "Arial=arial;Courier New=courier new;Times New Roman=times new roman;Verdana=verdana",
                    fontsize_formats: "0.5em 1.0em 1.5em 2.0em 2.5em 3.0em",
                    menubar: false,
                    plugins: "textcolor",
                    inline: true,
                    selector: "#" + id,
                    fixed_toolbar_container: "#" + scope.textId + " .toolbar",
                    toolbar: "fontselect | fontsizeselect | forecolor backcolor | bold italic underline | alignleft aligncenter alignright",
                    setup: function (ed) {
                        editor = ed;
                        editor.on("change ExecCommand NodeChange KeyUp", function () {
                            var newTextValue = editor.getContent();
                            if (newTextValue == currentTextValue) {
                                return;
                            }
                            currentTextValue = newTextValue;
                            scope.onTextChange({ newText: currentTextValue });
                        });
                        editor.on("init", function () {
                            editor.setContent(scope.options.content);
                            if (scope.enabled) {
                                editor.focus();
                            }
                            else {
                                editor.hide();
                            }
                        });
                    }
                };
                $timeout(function () {
                    tinymce.init(angular.extend(textEditorOptions, scope.options));
                }, 0);
                if (angular.isDefined(scope.enabled)) {
                    scope.$watch("enabled", function (newValue) {
                        if (!editor) {
                            return;
                        }
                        if (newValue) {
                            editor.show();
                        }
                        else {
                            editor.hide();
                        }
                    });
                }
                var offContentRollback = scope.$on("OnContentRollback", function (sender, data, backup) {
                    if (data.Id != scope.textId) {
                        return;
                    }
                    currentTextValue = backup.Value;
                    editor.setContent(backup.Value);
                });
                var offHighlightClick = scope.$on("OnHighlightClick", function (sender, data) {
                    if (data.Id != scope.textId) {
                        return;
                    }
                    editor.focus();
                });
                elem.on("$destroy", function () {
                    tinymce.EditorManager.execCommand("mceRemoveEditor", true, id);
                    offHighlightClick();
                    offContentRollback();
                });
            }
        }
    };
});