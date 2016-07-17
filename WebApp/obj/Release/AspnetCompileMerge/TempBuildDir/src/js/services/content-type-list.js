angular.module("WebjatoServices").service("ContentTypeList", function () {
    return [{ Crtl: "Box", Enum: 1 },
            { Crtl: "ContactForm", Enum: 2 },
            { Crtl: "Maps", Enum: 3 },
            { Crtl: "RegularImage", Enum: 4 },
            { Crtl: "LinkedImage", Enum: 5 },
            { Crtl: "Line", Enum: 6 },
            { Crtl: "Social", Enum: 7 },
            { Crtl: "Text", Enum: 8 },
            { Crtl: "Video", Enum: 9 },
            { Crtl: "ExpandableImage", Enum: 10 }];
});