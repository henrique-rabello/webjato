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
                    fontsize_formats: "16px 23px 32px 40px 48px",
                    menubar: false,
                    plugins: "textcolor",
                    inline: true,
                    selector: "#" + id,
                    fixed_toolbar_container: "#" + scope.textId + " .toolbar",
                    toolbar: "fontselect | fontsizeselect | forecolor backcolor | underline | alignleft aligncenter alignright",
                    textcolor_map: [
                        "333333", "Black",
                        "993300", "Burnt orange",
                        "333300", "Dark olive",
                        "003300", "Dark green",
                        "003366", "Dark azure",
                        "000080", "Navy Blue",
                        "333399", "Indigo",
                        "333333", "Very dark gray",
                        "800000", "Maroon",
                        "FF6600", "Orange",
                        "808000", "Olive",
                        "008000", "Green",
                        "008080", "Teal",
                        "0000FF", "Blue",
                        "666699", "Grayish blue",
                        "808080", "Gray",
                        "FF0000", "Red",
                        "FF9900", "Amber",
                        "99CC00", "Yellow green",
                        "339966", "Sea green",
                        "33CCCC", "Turquoise",
                        "3366FF", "Royal blue",
                        "800080", "Purple",
                        "999999", "Medium gray",
                        "FF00FF", "Magenta",
                        "FFCC00", "Gold",
                        "FFFF00", "Yellow",
                        "00FF00", "Lime",
                        "00FFFF", "Aqua",
                        "00CCFF", "Sky blue",
                        "993366", "Red violet",
                        "DDDDDD", "White",
                        "FF99CC", "Pink",
                        "FFCC99", "Peach",
                        "FFFF99", "Light yellow",
                        "CCFFCC", "Pale green",
                        "CCFFFF", "Pale cyan",
                        "99CCFF", "Light sky blue",
                        "CC99FF", "Plum"
                    ],
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