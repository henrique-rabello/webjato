angular.module("WebjatoServices").service("ContentUtils", function (ContentType, SocialIconSize, SocialUtil) {
    var GetResizeOptionsForNewLine = function (data, newContentDelta) {
        if (data.IsHorizontal) {
            return {
                handles: "w, e",
                minHeight: newContentDelta,
                maxHeight: newContentDelta
            };
        }
        else {
            return {
                handles: "n, s",
                minWidth: newContentDelta,
                maxWidth: newContentDelta
            };
        }
    };
    var GetResizeOptionsForHighlightedLine = function (data) {
        if (data.IsHorizontal) {
            return {
                handles: "w, e",
                maxHeight: 1
            };
        }
        else {
            return {
                handles: "n, s",
                maxWidth: 1
            };
        }
    };
    var defaultImages = [];
        defaultImages[ContentType.IMAGE] = "/images/place-holder-img-normal.png";
        defaultImages[ContentType.LINKED_IMAGE] = "/images/place-holder-img-link.png";
        defaultImages[ContentType.EXPANDABLE_IMAGE] = "/images/place-holder-img-expandable.png";
    return {
        GetSizeForHighlightedContent: function (data) {
            var defaultPlaceHolderSize = new ContentSize(300, 200);
            switch (data.Type) {
                case ContentType.BOX:
                    var delta = data.Border.Exists ? data.Border.Width * 2 : 0;
                    return new ContentSize(data.Size.Width + delta, data.Size.Height + delta);
                case ContentType.LINE:
                    if (data.IsHorizontal) {
                        return new ContentSize(data.Size, 6);
                    }
                    else {
                        return new ContentSize(6, data.Size);
                    }
                case ContentType.TEXT:
                    return data.Size;
                case ContentType.IMAGE:
                case ContentType.LINKED_IMAGE:
                case ContentType.EXPANDABLE_IMAGE:
                    if (data.ImageExportedKey == null) {
                        return defaultPlaceHolderSize;
                    }
                    else {
                        return data.ImageExportedSize;
                    }
                case ContentType.VIDEO:
                    return data.Size;
                case ContentType.MAPS:
                    return data.Size;
                case ContentType.CONTACT_FORM:
                    var elem = angular.element("#" + data.Id);
                    return new ContentSize(elem.width() + 2, elem.height());
                case ContentType.SOCIAL:
                    var elem = angular.element("#" + data.Id);
                    if (SocialUtil.AnyPluginEnabled(data)) {
                        var height = (parseInt(data.Size) == 0) ?
                                        SocialIconSize.SMALL :
                                        (parseInt(data.Size) == 1) ?
                                            SocialIconSize.REGULAR :
                                            SocialIconSize.LARGE;

                        return new ContentSize(elem.width() - 12, height);
                    }
                    else {
                        return new ContentSize(elem.width(), elem.height());
                    }
            }
        },
        GetSizeForNewContent: function (data) {
            var defaultPlaceHolderSize = new ContentSize(300, 200);
            switch (data.Type) {
                case ContentType.BOX:
                    return data.Size;
                case ContentType.LINE:
                    if (data.IsHorizontal) {
                        return new ContentSize(data.Size, -data.Width);
                    }
                    else {
                        return new ContentSize(-data.Width, data.Size);
                    }
                case ContentType.TEXT:
                    return data.Size;
                case ContentType.IMAGE:
                case ContentType.LINKED_IMAGE:
                case ContentType.EXPANDABLE_IMAGE:
                    if (data.ImageExportedKey == null) {
                        return defaultPlaceHolderSize;
                    }
                    else {
                        return data.ImageExportedSize;
                    }
                case ContentType.VIDEO:
                    return data.Size;
                case ContentType.MAPS:
                    return data.Size;
                case ContentType.CONTACT_FORM:
                    var elem = angular.element("#" + data.Id);
                    return new ContentSize(elem.width() + 2, elem.height());
                case ContentType.SOCIAL:
                    var elem = angular.element("#" + data.Id);
                    if (SocialUtil.AnyPluginEnabled(data)) {
                        var height = (parseInt(data.Size) == 0) ?
                                        SocialIconSize.SMALL :
                                        (parseInt(data.Size) == 1) ?
                                            SocialIconSize.REGULAR :
                                            SocialIconSize.LARGE;

                        return new ContentSize(elem.width() - 12, height);
                    }
                    else {
                        return new ContentSize(elem.width(), elem.height());
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
            if (data.ImageKey == null) {
                return defaultImages[data.Type];
            }
            else {
                return folder + (data.Editing ? data.ImageKey : data.ImageExportedKey);
            }
        },
        GetExpandedImageUrl: function(data, folder) {
            if (data.ImageKey == null) {
                return defaultImages[data.Type];
            }
            else {
                return folder + data.ExpandedImage.ImageKey;
            }
        },
        GetResizeOptions: function (data, newContentDelta) {
            switch (data.Type) {
                case ContentType.BOX:
                    return {
                        id: data.Id,
                        isNew: data.IsNewContent,
                        handles: "all",
                        minWidth: 50,
                        minHeight: 50
                    };
                case ContentType.TEXT:
                    return {
                        handles: "all",
                        minWidth: 100,
                        minHeight: 100
                    };
                case ContentType.LINE:
                    return data.IsNewContent ?
                                GetResizeOptionsForNewLine(data, newContentDelta) :
                                GetResizeOptionsForHighlightedLine(data);
                case ContentType.IMAGE:
                case ContentType.LINKED_IMAGE:
                case ContentType.EXPANDABLE_IMAGE:
                    return {
                        aspectRatio: true,
                        handles: "all",
                        minWidth: data.IsNewContent? newContentDelta + 20 : 20,
                        minHeight: data.IsNewContent? newContentDelta + 20: 20,
                        maxHeight: (data.ImageKey != null) ? data.ImageSize.Height + (data.IsNewContent? newContentDelta : 0) : undefined,
                        maxWidth: (data.ImageKey != null) ? data.ImageSize.Width + (data.IsNewContent ? newContentDelta : 0) : undefined
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