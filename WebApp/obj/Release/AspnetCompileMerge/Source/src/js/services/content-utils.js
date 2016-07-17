angular.module("WebjatoServices").service("ContentUtils", function (ContentType, SocialIconSize, SocialUtil) {
    var GetResizeOptionsForNewLine = function (data, newContentDelta) {
        if (data.IsHorizontal) {
            return {
                minHeight: newContentDelta,
                maxHeight: newContentDelta
            };
        }
        else {
            return {
                minWidth: newContentDelta,
                maxWidth: newContentDelta
            };
        }
    };
    var GetResizeOptionsForHighlightedLine = function (data) {
        if (data.IsHorizontal) {
            return {
                maxHeight: 1
            };
        }
        else {
            return {
                maxWidth: 1
            };
        }
    };
    return {
        GetSizeForHighlightedContent: function (data) {
            var defaultPlaceHolderSize = {
                width: 300,
                height: 200
            };
            switch (data.Type) {
                case ContentType.BOX:
                    var delta = data.Border.Exists ? data.Border.Width * 2 : 0;
                    return {
                        width: data.Size.Width + delta,
                        height: data.Size.Height + delta
                    };
                case ContentType.LINE:
                    if (data.IsHorizontal) {
                        return {
                            width: data.Size,
                            height: data.Width
                        };
                    }
                    else {
                        return {
                            width: data.Width,
                            height: data.Size
                        };
                    }
                case ContentType.TEXT:
                    return {
                        width: data.Size.Width,
                        height: data.Size.Height
                    };
                case ContentType.IMAGE:
                case ContentType.LINKED_IMAGE:
                case ContentType.EXPANDABLE_IMAGE:
                    if (data.ImageExportedKey == null) {
                        return defaultPlaceHolderSize;
                    }
                    else {
                        return {
                            width: data.ImageExportedSize.Width,
                            height: data.ImageExportedSize.Height
                        };
                    }
                case ContentType.VIDEO:
                    if (data.VideoId == "" || data.VideoId == null) {
                        return defaultPlaceHolderSize;
                    }
                    else {
                        return {
                            width: data.Size.Width,
                            height: data.Size.Height
                        };
                    }
                case ContentType.MAPS:
                    if (data.Address == "" || data.Address == null) {
                        return defaultPlaceHolderSize;
                    }
                    else {
                        return {
                            width: data.Size.Width,
                            height: data.Size.Height
                        };
                    }
                case ContentType.CONTACT_FORM:
                    var elem = angular.element("#" + data.Id);
                    return {
                        width: elem.width() + 2,
                        height: elem.height()
                    };
                case ContentType.SOCIAL:
                    var elem = angular.element("#" + data.Id);
                    if (SocialUtil.AnyPluginEnabled(data)) {
                        var height = (parseInt(data.Size) == 0) ?
                                        SocialIconSize.SMALL :
                                        (parseInt(data.Size) == 1) ?
                                            SocialIconSize.REGULAR :
                                            SocialIconSize.LARGE;

                        return {
                            width: elem.width() - 12,
                            height: height
                        };
                    }
                    else {
                        return {
                            width: elem.width(),
                            height: elem.height()
                        };
                    }
            }
        },
        GetSizeForNewContent: function (data) {
            var defaultPlaceHolderSize = {
                width: 300,
                height: 200
            };
            switch (data.Type) {
                case ContentType.BOX:
                    return {
                        width: data.Size.Width,
                        height: data.Size.Height
                    };
                case ContentType.LINE:
                    if (data.IsHorizontal) {
                        return {
                            width: data.Size,
                            height: -data.Width
                        };
                    }
                    else {
                        return {
                            width: -data.Width,
                            height: data.Size
                        };
                    }
                case ContentType.TEXT:
                    return {
                        width: data.Size.Width,
                        height: data.Size.Height
                    };
                case ContentType.IMAGE:
                case ContentType.LINKED_IMAGE:
                case ContentType.EXPANDABLE_IMAGE:
                    if (data.ImageExportedKey == null) {
                        return defaultPlaceHolderSize;
                    }
                    else {
                        return {
                            width: data.ImageExportedSize.Width,
                            height: data.ImageExportedSize.Height
                        };
                    }
                case ContentType.VIDEO:
                    if (data.VideoId == "" || data.VideoId == null) {
                        return defaultPlaceHolderSize;
                    }
                    else {
                        return {
                            width: data.Size.Width,
                            height: data.Size.Height
                        };
                    }
                case ContentType.MAPS:
                    if (data.Address == "" || data.Address == null) {
                        return defaultPlaceHolderSize;
                    }
                    else {
                        return {
                            width: data.Size.Width,
                            height: data.Size.Height
                        };
                    }
                case ContentType.CONTACT_FORM:
                    var elem = angular.element("#" + data.Id);
                    return {
                        width: elem.width() + 2,
                        height: elem.height()
                    };
                case ContentType.SOCIAL:
                    var elem = angular.element("#" + data.Id);
                    if (SocialUtil.AnyPluginEnabled(data)) {
                        var height = (parseInt(data.Size) == 0) ?
                                        SocialIconSize.SMALL :
                                        (parseInt(data.Size) == 1) ?
                                            SocialIconSize.REGULAR :
                                            SocialIconSize.LARGE;

                        return {
                            width: elem.width() - 12,
                            height: height
                        };
                    }
                    else {
                        return {
                            width: elem.width(),
                            height: elem.height()
                        };
                    }
            }
        },
        SetContentSize: function (data, w, h) {
            switch (data.Type) {
                case ContentType.BOX:
                    if (data.Border.Exists) {
                        w -= (data.Border.Width * 2)
                        h -= (data.Border.Width * 2)
                    }
                    break;
            }
            switch (data.Type) {
                case ContentType.LINE:
                    data.Size = data.IsHorizontal ? parseInt(w, 10) : parseInt(h, 10);
                    break;
                case ContentType.IMAGE:
                case ContentType.LINKED_IMAGE:
                case ContentType.EXPANDABLE_IMAGE:
                    var scale = Math.floor((w / data.ImageSize.Width) * 100);
                    data.ImageScale = scale;
                    data.ImageExportedSize.Width = w;
                    data.ImageExportedSize.Height = h;
                    break;
                default:
                    data.Size.Width = w;
                    data.Size.Height = h;
                    break;
            }
        },
        GetImageURL: function(data, folder) {
            var defaultImages = [];
            defaultImages[ContentType.IMAGE] = "/images/place-holder-img-normal.png";
            defaultImages[ContentType.LINKED_IMAGE] = "/images/place-holder-img-link.png";
            defaultImages[ContentType.EXPANDABLE_IMAGE] = "/images/place-holder-img-expandable.png";
            if (data.ImageKey == null) {
                return defaultImages[data.Type];
            }
            else {
                return folder + (data.Editing ? data.ImageKey : data.ImageExportedKey);
            }
        },
        GetResizeOptions: function (data, newContentDelta) {
            switch (data.Type) {
                case ContentType.BOX:
                    return {
                        minWidth: 50,
                        minHeight: 50
                    };
                case ContentType.TEXT:
                    return {
                        minWidth: 100,
                        minHeight: 100
                    };
                case ContentType.LINE:
                    var opts = data.IsNewContent? GetResizeOptionsForNewLine(data, newContentDelta) : GetResizeOptionsForHighlightedLine(data);
                    return angular.extend(opts, {
                        handles: "ne, se"
                    });
                case ContentType.IMAGE:
                case ContentType.LINKED_IMAGE:
                case ContentType.EXPANDABLE_IMAGE:
                    return {
                        aspectRatio: true,
                        minWidth: 20,
                        minHeight: 20,
                        maxHeight: (data.ImageKey != null) ? data.ImageSize.Height + (data.IsNewContent? newContentDelta : 0) : undefined,
                        maxWidth: (data.ImageKey != null) ? data.ImageSize.Width + (data.IsNewContent? newContentDelta : 0) : undefined
                    }
                default:
                    return {};
            }
        },
        IsContentResizable: function (data) {
            return ((data.Type == ContentType.BOX) ||
                    (data.Type == ContentType.EXPANDABLE_IMAGE && data.ImageKey != null) ||
                    (data.Type == ContentType.IMAGE && data.ImageKey != null) ||
                    (data.Type == ContentType.LINKED_IMAGE && data.ImageKey != null) ||
                    (data.Type == ContentType.LINE) ||
                    (data.Type == ContentType.TEXT));
        },
        IsContentResizableFromHighlightBox: function (data) {
            return ((data.Type == ContentType.BOX) ||
                    (data.Type == ContentType.EXPANDABLE_IMAGE && data.ImageKey != null) ||
                    (data.Type == ContentType.IMAGE && data.ImageKey != null) ||
                    (data.Type == ContentType.LINKED_IMAGE && data.ImageKey != null) ||
                    (data.Type == ContentType.LINE));
        }
    };
});