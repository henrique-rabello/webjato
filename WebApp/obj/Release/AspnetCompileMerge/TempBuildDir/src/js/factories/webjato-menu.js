angular.module("WebjatoFactories")
.factory("MenuConfig",
    function (WebjatoCssHandler) {
        var GetPart = function (partId, colorDefault) {
            return { Id: partId, Value: colorDefault };
        };
        var Parts = {
            Bg1: "Bg1",
            Bg2: "Bg2",
            BgActive: "BgActive",
            Line: "Line",
            LineActive: "LineActive",
            Text: "Text",
            TextActive: "TextActive"
        };
        var NormalizeMenu = function (menu) {
            var m = { Id: menu.Id };
            for (var i = 0; i < menu.Parts.length; i++) {
                m[menu.Parts[i].Id] = menu.Parts[i].Value;
            }
            return m;
        };
        var Menus = [
                {
                    Id: "botao_template_dois",
                    Parts: [
                        GetPart(Parts.Bg1, "#FFFFFF"),
                        GetPart(Parts.LineActive, "#00A650"),
                        GetPart(Parts.Text, "#8D8D8D"),
                        GetPart(Parts.TextActive, "#00A650")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".botao_template_dois", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".botao_template_dois li a", Value: "background-color: " + m.Bg1 + "; color: " + m.Text + ";" },
                            { Class: ".botao_template_dois li a:hover", Value: "color: " + m.TextActive + "; border-top-color: " + m.LineActive + "; border-bottom-color: " + m.LineActive + ";" }
                        ];
                    }

                },
                {
                    Id: "cdfqed",
                    Parts: [
                        GetPart(Parts.Bg1, "#FFFFFF"),
                        GetPart(Parts.Line, "#000000"),
                        GetPart(Parts.Text, "#888888"),
                        GetPart(Parts.TextActive, "#95c02d")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".cdfqed", Value: "background-color: " + m.Bg1 + "; border-top-color: " + m.Line + "; border-bottom-color: " + m.Line + ";" },
                            { Class: ".cdfqed li a", Value: "background-color: " + m.Bg1 + "; color: " + m.Text + ";" },
                            { Class: ".cdfqed li a:hover", Value: "color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "coisa",
                    Parts: [
                        GetPart(Parts.Bg1, "#FF0000"),
                        GetPart(Parts.BgActive, "#FFFFFF"),
                        GetPart(Parts.Line, "#F7977A"),
                        GetPart(Parts.Text, "#FFFFFF"),
                        GetPart(Parts.TextActive, "#FF0000")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".coisa", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".coisa li a", Value: "background-color: " + m.Bg1 + "; color: " + m.Text + "; border-left-color: " + m.Line + ";" },
                            { Class: ".coisa li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "colon",
                    Parts: [
                        GetPart(Parts.Bg1, "#FFFFFF"),
                        GetPart(Parts.Line, "#AEA404"),
                        GetPart(Parts.Text, "#000000"),
                        GetPart(Parts.TextActive, "#AEA404")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".colon", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".colon li a", Value: "background-color: " + m.Bg1 + "; color: " + m.Text + "; border-left-color: " + m.Line + ";" },
                            { Class: ".colon li a:hover", Value: "color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "crf",
                    Parts: [
                        GetPart(Parts.Bg1, "#F16C4D"),
                        GetPart(Parts.BgActive, "#EE1D24"),
                        GetPart(Parts.Text, "#FFFFFF"),
                        GetPart(Parts.TextActive, "#FFFFFF")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".crf", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".crf li a", Value: "background-color: " + m.Bg1 + "; color: " + m.Text + ";" },
                            { Class: ".crf li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "css_menu",
                    Parts: [
                        GetPart(Parts.Bg1, "#333333"),
                        GetPart(Parts.LineActive, "#00B9F8"),
                        GetPart(Parts.Text, "#999999"),
                        GetPart(Parts.TextActive, "#FFFFFF")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".css_menu", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".css_menu li a", Value: "background-color: " + m.Bg1 + "; border-bottom-color: " + m.Bg1 + "; color: " + m.Text + ";" },
                            { Class: ".css_menu li a:hover", Value: "border-bottom-color: " + m.LineActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "cvdv",
                    Parts: [
                        GetPart(Parts.Bg1, "#FFFFFF"),
                        GetPart(Parts.Line, "#666666"),
                        GetPart(Parts.Text, "#666666"),
                        GetPart(Parts.TextActive, "#666666")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".cvdv", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".cvdv li a", Value: "background-color: " + m.Bg1 + "; border-left-color: " + m.Line + "; color: " + m.Text + ";" },
                            { Class: ".cvdv li a:hover", Value: "color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "cvea",
                    Parts: [
                        GetPart(Parts.Bg1, "#000000"),
                        GetPart(Parts.Text, "#FFFFFF"),
                        GetPart(Parts.TextActive, "#FF0000")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".cvea", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".cvea li a", Value: "background-color: " + m.Bg1 + "; color: " + m.Text + ";" },
                            { Class: ".cvea li a:hover", Value: "color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "edu_tnvacation",
                    Parts: [
                        GetPart(Parts.Bg1, "#423A34"),
                        GetPart(Parts.Line, "#FFFFCC"),
                        GetPart(Parts.Text, "#FFFFCC"),
                        GetPart(Parts.TextActive, "#FF682E")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".edu_tnvacation", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".edu_tnvacation li a", Value: "background-color: " + m.Bg1 + "; border-left-color: " + m.Line + "; color: " + m.Text + ";" },
                            { Class: ".edu_tnvacation li a:hover", Value: "color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "estudo_do_espaco",
                    Parts: [
                        GetPart(Parts.Bg1, "#000000"),
                        GetPart(Parts.BgActive, "#FF0000"),
                        GetPart(Parts.Line, "#FFFFFF"),
                        GetPart(Parts.Text, "#FFFFFF"),
                        GetPart(Parts.TextActive, "#FFFFFF")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".estudo_do_espaco", Value: "background-color: " + m.Bg1 + "; border-top-color: " + m.Line + "; border-bottom-color: " + m.Line + "; border-left-color: " + m.Line + "; border-right-color: " + m.Line + ";" },
                            { Class: ".estudo_do_espaco li a", Value: "background-color: " + m.Bg1 + "; border-right-color: " + m.Line + "; color: " + m.Text + ";" },
                            { Class: ".estudo_do_espaco li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "fashion",
                    Parts: [
                        GetPart(Parts.Bg1, "#000000"),
                        GetPart(Parts.Text, "#CCCCCC"),
                        GetPart(Parts.TextActive, "#FFFFFF")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".fashion", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".fashion li a", Value: "background-color: " + m.Bg1 + "; color: " + m.Text + ";" },
                            { Class: ".fashion li a:hover", Value: "color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "feq",
                    Parts: [
                        GetPart(Parts.Bg1, "#000000"),
                        GetPart(Parts.BgActive, "#8FC63D"),
                        GetPart(Parts.Line, "#999999"),
                        GetPart(Parts.Text, "#FFFFFF"),
                        GetPart(Parts.TextActive, "#FFFFFF")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".feq", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".feq li a", Value: "background-color: " + m.Bg1 + "; border-right-color: " + m.Line + "; color: " + m.Text + ";" },
                            { Class: ".feq li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "foc",
                    Parts: [
                        GetPart(Parts.BgActive, "#DDF0F8"),
                        GetPart(Parts.Text, "#333333"),
                        GetPart(Parts.TextActive, "#333333")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".foc li a", Value: "color: " + m.Text + ";" },
                            { Class: ".foc li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "good",
                    Parts: [
                        GetPart(Parts.Bg1, "#818181"),
                        GetPart(Parts.BgActive, "#00BFF3"),
                        GetPart(Parts.Line, "#EEEEEE"),
                        GetPart(Parts.Text, "#FFFFFF"),
                        GetPart(Parts.TextActive, "#FFFFFF")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".good", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".good li a", Value: "background-color: " + m.Bg1 + "; border-right-color: " + m.Line + "; color: " + m.Text + ";" },
                            { Class: ".good li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "gotmojo",
                    Parts: [
                        GetPart(Parts.Bg1, "#FFFFFF"),
                        GetPart(Parts.Line, "#CCCCCC"),
                        GetPart(Parts.Text, "#000000"),
                        GetPart(Parts.TextActive, "#F00000")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".gotmojo", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".gotmojo li a", Value: "background-color: " + m.Bg1 + "; border-left-color: " + m.Line + "; color: " + m.Text + ";" },
                            { Class: ".gotmojo li a:hover", Value: "color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "greencircles",
                    Parts: [
                        GetPart(Parts.Bg1, "#333333"),
                        GetPart(Parts.Line, "#666666"),
                        GetPart(Parts.LineActive, "#C7D92C"),
                        GetPart(Parts.Text, "#CCCCCC"),
                        GetPart(Parts.TextActive, "#FFFFFF")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".greencircles", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".greencircles li a", Value: "background-color: " + m.Bg1 + "; border-bottom-color: " + m.Line + "; color: " + m.Text + ";" },
                            { Class: ".greencircles li a:hover", Value: "border-bottom-color: " + m.LineActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "hydrastudio",
                    Parts: [
                        GetPart(Parts.Bg1, "#000000"),
                        GetPart(Parts.Text, "#666666"),
                        GetPart(Parts.TextActive, "#1EED23")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".hydrastudio", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".hydrastudio li a", Value: "background-color: " + m.Bg1 + "; color: " + m.Text + ";" },
                            { Class: ".hydrastudio li a:hover", Value: "color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "menu_",
                    Parts: [
                        GetPart(Parts.Bg1, "#333333"),
                        GetPart(Parts.BgActive, "#000000"),
                        GetPart(Parts.Line, "#555555"),
                        GetPart(Parts.Text, "#777777"),
                        GetPart(Parts.TextActive, "#51CEAC")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".menu_", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".menu_ li a", Value: "background-color: " + m.Bg1 + "; border-right-color: " + m.Line + "; color: " + m.Text + ";" },
                            { Class: ".menu_ li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "menu_e_cores",
                    Parts: [
                        GetPart(Parts.Bg1, "#5C676E"),
                        GetPart(Parts.Line, "#FFFFFF"),
                        GetPart(Parts.Text, "#FFFFFF"),
                        GetPart(Parts.TextActive, "#ED008C")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".menu_e_cores", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".menu_e_cores li a", Value: "background-color: " + m.Bg1 + "; border-left-color: " + m.Line + "; color: " + m.Text + ";" },
                            { Class: ".menu_e_cores li a:hover", Value: "color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "mercerbradley",
                    Parts: [
                        GetPart(Parts.Bg1, "#000000"),
                        GetPart(Parts.LineActive, "#BF1E2E"),
                        GetPart(Parts.Text, "#999999"),
                        GetPart(Parts.TextActive, "#FFFFFF")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".mercerbradley", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".mercerbradley li a", Value: "background-color: " + m.Bg1 + "; border-left-color: " + m.Bg1 + "; border-right-color: " + m.Bg1 + "; border-top-color: " + m.Bg1 + "; border-bottom-color: " + m.Bg1 + "; color: " + m.Text + ";" },
                            { Class: ".mercerbradley li a:hover", Value: "border-left-color: " + m.LineActive + "; border-right-color: " + m.LineActive + "; border-top-color: " + m.LineActive + "; border-bottom-color: " + m.LineActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "ref_barra",
                    Parts: [
                        GetPart(Parts.Bg1, "#8B9493"),
                        GetPart(Parts.BgActive, "#FF5500"),
                        GetPart(Parts.Line, "#FFFFFF"),
                        GetPart(Parts.Text, "#FFFFFF"),
                        GetPart(Parts.TextActive, "#FFFFFF")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".ref_barra", Value: "background-color: " + m.Bg1 + "; border-left-color: " + m.Line + "; border-right-color: " + m.Line + "; border-top-color: " + m.Line + "; border-bottom-color: " + m.Line + ";" },
                            { Class: ".ref_barra li a", Value: "background-color: " + m.Bg1 + "; border-right-color: " + m.Line + "; color: " + m.Text + ";" },
                            { Class: ".ref_barra li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "template",
                    Parts: [
                        GetPart(Parts.Bg1, "#FFFFFF"),
                        GetPart(Parts.Text, "#8D8D8D"),
                        GetPart(Parts.TextActive, "#0000FF")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".template", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".template li a", Value: "background-color: " + m.Bg1 + "; color: " + m.Text + ";" },
                            { Class: ".template li a:hover", Value: "color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "template_back",
                    Parts: [
                        GetPart(Parts.Bg1, "#FFFFFF"),
                        GetPart(Parts.Bg2, "#EEEEEE"),
                        GetPart(Parts.Line, "#CCCCCC"),
                        GetPart(Parts.Text, "#333333"),
                        GetPart(Parts.TextActive, "#999999")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".template_back", Value: "background-color: " + m.Bg1 + "; border-bottom-color: " + m.Line + ";" },
                            { Class: ".template_back li a", Value: "background-color: " + m.Bg2 + "; color: " + m.Text + "; border-top-color: " + m.Line + "; border-right-color: " + m.Line + ";" },
                            { Class: ".template_back li a:hover", Value: "color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "template_menu",
                    Parts: [
                        GetPart(Parts.Bg1, "#000000"),
                        GetPart(Parts.BgActive, "#EEEEEE"),
                        GetPart(Parts.Line, "#666666"),
                        GetPart(Parts.Text, "#FFFFFF"),
                        GetPart(Parts.TextActive, "#000000")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".template_menu", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".template_menu li a", Value: "background-color: " + m.Bg1 + "; border-right-color: " + m.Line + "; color: " + m.Text + ";" },
                            { Class: ".template_menu li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "tuti",
                    Parts: [
                        GetPart(Parts.Bg1, "#000000"),
                        GetPart(Parts.BgActive, "#B00600"),
                        GetPart(Parts.Text, "#FFFFFF"),
                        GetPart(Parts.TextActive, "#FFFFFF")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".tuti", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".tuti li a", Value: "background-color: " + m.Bg1 + "; border-right-color: " + m.Line + "; color: " + m.Text + ";" },
                            { Class: ".tuti li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "untitled_1a",
                    Parts: [
                        GetPart(Parts.Bg1, "#666666"),
                        GetPart(Parts.BgActive, "#333333"),
                        GetPart(Parts.Text, "#FFFFFF"),
                        GetPart(Parts.TextActive, "#FFFFFF")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".untitled_1a", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".untitled_1a li a", Value: "background-color: " + m.Bg1 + "; border-right-color: " + m.Line + "; color: " + m.Text + ";" },
                            { Class: ".untitled_1a li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "vfsv",
                    Parts: [
                        GetPart(Parts.Bg1, "#000000"),
                        GetPart(Parts.BgActive, "#FFFFFF"),
                        GetPart(Parts.Text, "#FFFFFF"),
                        GetPart(Parts.TextActive, "#000000")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".vfsv", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".vfsv li a", Value: "background-color: " + m.Bg1 + "; border-right-color: " + m.Line + "; color: " + m.Text + ";" },
                            { Class: ".vfsv li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                },
                {
                    Id: "wwd",
                    Parts: [
                        GetPart(Parts.Bg1, "#0072BC"),
                        GetPart(Parts.BgActive, "#004A80"),
                        GetPart(Parts.Text, "#FFFFFF"),
                        GetPart(Parts.TextActive, "#BDE9FB")
                    ],
                    Css: function (customMenu) {
                        var m = NormalizeMenu(customMenu);
                        return [
                            { Class: ".wwd", Value: "background-color: " + m.Bg1 + ";" },
                            { Class: ".wwd li a", Value: "background-color: " + m.Bg1 + "; border-right-color: " + m.Line + "; color: " + m.Text + ";" },
                            { Class: ".wwd li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
                        ];
                    }
                }
        ];
        return {
            Menus: Menus,
            ApplyCSS: function (menu) {
                var rules = _.findWhere(this.Menus, { Id: menu.Id }).Css(menu);
                _.each(rules, function (rule) {
                    rule.Class = ".preview .menu.custom" + rule.Class;
                });
                WebjatoCssHandler.ApplyCSS("custom-menu", rules);
            }
        };
    }
);