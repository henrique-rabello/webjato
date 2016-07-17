angular.module("WebjatoConfig", []);
angular.module("WebjatoConstants", []);
angular.module("WebjatoDirectives", []);
angular.module("WebjatoFactories", ["ngSanitize"]);
angular.module("WebjatoModels", []);
angular.module("WebjatoServices", ["WebjatoConfig"]);
var ContentType;
(function (ContentType) {
    ContentType[ContentType["BOX"] = 1] = "BOX";
    ContentType[ContentType["CONTACT_FORM"] = 2] = "CONTACT_FORM";
    ContentType[ContentType["MAPS"] = 3] = "MAPS";
    ContentType[ContentType["IMAGE"] = 4] = "IMAGE";
    ContentType[ContentType["LINKED_IMAGE"] = 5] = "LINKED_IMAGE";
    ContentType[ContentType["LINE"] = 6] = "LINE";
    ContentType[ContentType["SOCIAL"] = 7] = "SOCIAL";
    ContentType[ContentType["TEXT"] = 8] = "TEXT";
    ContentType[ContentType["VIDEO"] = 9] = "VIDEO";
    ContentType[ContentType["EXPANDABLE_IMAGE"] = 10] = "EXPANDABLE_IMAGE";
})(ContentType || (ContentType = {}));

var LineStyle;
(function (LineStyle) {
    LineStyle[LineStyle["DASHED"] = 2] = "DASHED";
    LineStyle[LineStyle["DOTTED"] = 1] = "DOTTED";
    LineStyle[LineStyle["SOLID"] = 0] = "SOLID";
})(LineStyle || (LineStyle = {}));

var LinkType;
(function (LinkType) {
    LinkType[LinkType["INTERNAL"] = 0] = "INTERNAL";
    LinkType[LinkType["EXTERNAL"] = 1] = "EXTERNAL";
})(LinkType || (LinkType = {}));

var MultiSelectionMode;
(function (MultiSelectionMode) {
    MultiSelectionMode[MultiSelectionMode["OFF"] = 0] = "OFF";
    MultiSelectionMode[MultiSelectionMode["MOVE"] = 1] = "MOVE";
    MultiSelectionMode[MultiSelectionMode["DUPLICATE"] = 2] = "DUPLICATE";
})(MultiSelectionMode || (MultiSelectionMode = {}));
//# sourceMappingURL=MultiSelectionMode.js.map
var MultiSelectionModeList;
(function (MultiSelectionModeList) {
    MultiSelectionModeList[MultiSelectionModeList["OFF"] = 0] = "OFF";
    MultiSelectionModeList[MultiSelectionModeList["MOVE"] = 1] = "MOVE";
    MultiSelectionModeList[MultiSelectionModeList["DUPLICATE"] = 2] = "DUPLICATE";
    MultiSelectionModeList[MultiSelectionModeList["MOVE_AFTER_DUPLICATE"] = 3] = "MOVE_AFTER_DUPLICATE";
})(MultiSelectionModeList || (MultiSelectionModeList = {}));

var Roles;
(function (Roles) {
    Roles[Roles["Regular"] = 1] = "Regular";
    Roles[Roles["Admin"] = 2] = "Admin";
    Roles[Roles["TemplateCreator"] = 3] = "TemplateCreator";
})(Roles || (Roles = {}));

var SocialPluginSize;
(function (SocialPluginSize) {
    SocialPluginSize[SocialPluginSize["Small"] = 0] = "Small";
    SocialPluginSize[SocialPluginSize["Medium"] = 1] = "Medium";
    SocialPluginSize[SocialPluginSize["Large"] = 2] = "Large";
})(SocialPluginSize || (SocialPluginSize = {}));

var VideoType;
(function (VideoType) {
    VideoType[VideoType["YouTube"] = 1] = "YouTube";
    VideoType[VideoType["Vimeo"] = 2] = "Vimeo";
})(VideoType || (VideoType = {}));

var ContentPosition = (function () {
    function ContentPosition(X, Y, ZIndex) {
        this.X = X;
        this.Y = Y;
        this.ZIndex = ZIndex;
        this.ozIndex = null;
    }
    return ContentPosition;
}());

var ContentSize = (function () {
    function ContentSize(_width, _height) {
        this.Width = parseInt(_width);
        this.Height = parseInt(_height);
    }
    return ContentSize;
}());

var BoxBorder = (function () {
    function BoxBorder() {
    }
    return BoxBorder;
}());

var ContentBase = (function () {
    function ContentBase() {
    }
    return ContentBase;
}());

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SimpleImage = (function (_super) {
    __extends(SimpleImage, _super);
    function SimpleImage() {
        _super.apply(this, arguments);
    }
    return SimpleImage;
}(ContentBase));

var SocialPlugin = (function () {
    function SocialPlugin(Enabled, URL) {
        this.Enabled = Enabled;
        this.URL = URL;
    }
    return SocialPlugin;
}());

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScalableImage = (function (_super) {
    __extends(ScalableImage, _super);
    function ScalableImage() {
        _super.apply(this, arguments);
    }
    return ScalableImage;
}(SimpleImage));

angular.module("WebjatoConfig").config(function ($provide) {
    $provide.factory("ColorPickerConfig",
        function () {
            var config = {
                allowEmpty: true,
                showPaletteOnly: true,
                showSelectionPalette: false,
                preferredFormat: "hex",
                palette: [
                    ["#FFFFFF", "#C00000", "#FF0000", "#490000", "#790000", "#C00000", "#EE1D24", "#F16C4D", "#F7977A", "#FBD0C3", "#FDE8E1"],
                    ["#000000", "#CC5200", "#FF6600", "#461C00", "#7B3000", "#A1410D", "#F16522", "#F68E54", "#FBAD82", "#FDDAC7", "#FEEDE3"],
                    ["#333333", "#FFD800", "#FFFF00", "#4F2F00", "#7C4900", "#A36209", "#F7941D", "#FFBF05", "#FFD45C", "#FFECB5", "#FFF6DA"],
                    ["#666666", "#92D14F", "#99FF33", "#5B5600", "#827A00", "#ABA000", "#FFF100", "#FFF467", "#FFF799", "#FFFBD1", "#FFFDE8"],
                    ["#999999", "#00AF50", "#00FF00", "#253D0E", "#3E6617", "#588528", "#8FC63D", "#93D14F", "#ADDC7A", "#DAEFC3", "#EDF7E1"],
                    ["#CCCCCC", "#03B1F0", "#00FFFF", "#033813", "#045F20", "#197B30", "#35b449", "#7DC473", "#A4D49D", "#D6ECD3", "#EBF6E9"],
                    ["#DDDDDD", "#0071C1", "#0000FF", "#003E19", "#005824", "#007236", "#00A650", "#39B778", "#81CA9D", "#C6E7D3", "#E3F3E9"],
                    ["#EEEEEE", "#7030A0", "#FF00FF", "#003531", "#005951", "#00736A", "#00A99E", "#16BCB4", "#7BCDC9", "#C3E8E7", "#E1F4F3"],
                    ["#41484D", "#42260D", "#362F2C", "#00364B", "#005B7E", "#0076A4", "#00AEEF", "#00BFF3", "#6CCFF7", "#BDE9FB", "#DEF4FD"],
                    ["#5C676E", "#613813", "#423A34", "#002D53", "#003562", "#004A80", "#0072BC", "#438CCB", "#7CA6D8", "#C7D9EE", "#E3ECF7"],
                    ["#5F6D84", "#744B24", "#534841", "#001A45", "#002056", "#003370", "#0054A5", "#5573B7", "#8293CA", "#CAD0E8", "#E5E8F4"],
                    ["#758792", "#8C623A", "#726357", "#0C004B", "#1D1363", "#2A2C70", "#393B97", "#5E5CA7", "#8881BE", "#CCC9E3", "#E6E4F1"],
                    ["#90ABBD", "#A77C50", "#9A8575", "#30004A", "#450E61", "#5A2680", "#7030A0", "#855FA8", "#A286BD", "#D5C8E1", "#EAE4F0"],
                    ["#A6BCCA", "#C69C6D", "#C7B198", "#390037", "#4B0048", "#62055F", "#91278F", "#A763A9", "#BC8CBF", "#E1CBE2", "#F0E5F1"],
                    ["#C4D2DC", "#E2CDB6", "#D9CAB9", "#490029", "#7A0045", "#9D005C", "#ED008C", "#EF6EA8", "#f39bc1", "#FAD8E7", "#FDECF3"],
                    ["#E2E9EE", "#F1E6DB", "#ECE5DC", "#58001B", "#7A0026", "#9D0039", "#EE105A", "#F16D7E", "#F5999D", "#FAD1D3", "#FDE8E9"]]
            };
            return config;
        }
    );
});
angular.module("WebjatoConfig").factory("WebjatoConfig", function ($http, $location) {
    var qs = "";
    if ($location.search().siteId) {
        qs = "?siteId=" + $location.search().siteId;
    }
    var Config = {
        AssetsPath: "",
        AssetsLocalPath: "/tmp/"
    };
    $http({
        method: "GET",
        url: "../api/site/config" + qs
    })
    .success(
        function (data) {
            Config.AssetsPath = data.AssetsPath;
        });
    return Config;
});
angular.module("WebjatoConstants").constant("ServerSyncCommands", {
    ALL: "ALL",
    DELETE: "DELETE",
    DUPLICATE: "DUPLICATE",
    POSITION: "POSITION",
    ZINDEX: "Z-INDEX"
});
angular.module("WebjatoConstants").constant("SocialIconSize", {
    SMALL: 16,
    REGULAR: 24,
    LARGE: 32
});
angular.module("WebjatoConstants").constant("zIndexChange", {
    ONE_UP: 1,
    ONE_DOWN: 2,
    BRING_TO_FRONT: 3,
    SEND_TO_BACK: 4
});
var Sair = null;
var dependencies = [
    "angularFileUpload",
    "AngularJCrop",
    "angularSpectrumColorpicker",
    "gettext",
    "ngCookies",
    "ngAnimate",
    "ui.spinner",
    "ui.tinymce",
    "WebjatoConfig",
    "WebjatoConstants",
    "WebjatoDirectives",
    "WebjatoModels",
    "WebjatoFactories",
    "WebjatoServices"
];
angular.module("ContentEditApp", dependencies)
    .controller("ContentEditCrtl", function ($scope, $cookies, $http, $q, $timeout, $document, gettextCatalog, ContentType, ContentTypeList, MultiSelectionMode, SiteStyle, WebjatoConfig, ServerSync, ServerSyncCommands, HandleServerException, zIndexChange, HelpIndexer, UnitContentModel) {
        var commitZindex = false;
        var multiSelectionPanel = [];
		var currentHelpId = "content/start";
        multiSelectionPanel[MultiSelectionMode.MOVE] = "MOVE-TOGETHER";
        multiSelectionPanel[MultiSelectionMode.DUPLICATE] = "DUPLICATE";
        multiSelectionPanel[MultiSelectionMode.MOVE_AFTER_DUPLICATE] = "MOVE_AFTER_DUPLICATE";
        //PROPS
        $scope.MultiSelection = MultiSelectionMode.OFF;
        $scope.MultiSelectionMode = MultiSelectionMode;
        $scope.ActiveContent = null;
        $scope.CurrentPanel = "ADD-UNIT";
        $scope.HighlightedContent = null;
        $scope.ServerSync = ServerSync;
        $scope.Config = WebjatoConfig;
        $scope.language = $cookies.language;
        $scope.CropDefer = null;
        $scope.CropInfo = null;
        $scope.CropUrl = null;
        $scope.Pages = [];
        $scope.SiteContents = [];
        $scope.SiteStyle = SiteStyle;
        $scope.SelectedPage = null;
        $scope.ContentTypeList = ContentTypeList;
        $scope.PageContents = {
            Raw: [],
            ByType: {
                Box: [], ContactForm: [], Maps: [], Image: [], LinkedImage: [], Line: [], Social: [], Text: [], Video: []
            }
        };
        $scope.ZIndexState = {
            BRING_TO_FRONT: true,
            SEND_TO_BACK: true,
            ONE_UP: true,
            ONE_DOWN: true
        };
        $scope.DuplicateBg = {
            zindex: 0,
            show: false
        };
        var AddNewContentItemToScope = function (data) {
            data.IsNewContent = true;
            $scope.SiteContents.push(data);
            $scope.FetchPageContent();
            commitZindex = false;
        };
        var DeleteContent = function (data) {
            ServerSync.SyncItem(data, ServerSyncCommands.DELETE).then(function () {
                $scope.SiteContents = _.without($scope.SiteContents, data);
                $scope.FetchPageContent();
                $scope.ClearEditPanel();
                var zindex = [];
                _.chain($scope.PageContents.Raw)
                    .filter(function (content) {
                        return content.Position.ZIndex > data.Position.ZIndex;
                    })
                    .forEach(function (content) {
                        content.Position.ZIndex -= 1;
                        var obj = _.pick(content, "Id", "Type");
                        obj.ZIndex = content.Position.ZIndex;
                        zindex.push(obj);
                    });
                if (zindex.length > 0) {
                    ServerSync.SyncItem(zindex, ServerSyncCommands.ZINDEX);
                }
            }, HandleServerException);
        };
        var GetCurrentPageMaxZIndex = function () {
            if ($scope.PageContents.Raw.length == 0) {
                return 0;
            }
            else {
                return _.chain($scope.PageContents.Raw)
                            .pluck("Position")
                            .max(function (position) { return position.ZIndex; })
                            .value().ZIndex;
            }
        };
        var MoveTogetherCommitOrCancel = function () {
            $scope.MultiSelection = MultiSelectionMode.OFF;
            $scope.ClearEditPanel();
            $scope.DuplicateBg.show = false;
            _.each($scope.PageContents.Raw, function (content) {
                content.Selected = false;
                content.Editing = false;
                content.IsNewContent = false;
            });
        };
        //SCOPE METHODS
        $scope.EditContent = function (content) {
            _.each($scope.SiteContents, function (item) {
                item.Editing = false;
                item.Position.ozIndex = null;
            });
            content.Editing = true;
            $scope.ActiveContent = content;
            $scope.UpdateZIndexOptions();
            $scope.CurrentPanel = _.findWhere(ContentTypeList, { Enum: content.Type }).Crtl.toUpperCase();
            commitZindex = false;
            $scope.$emit("HelpAutoDisplay", HelpIndexer.GetIdByContentType(content.Type));
        };
        $scope.FetchPageContent = function () {
            $scope.PageContents.Raw = _.chain($scope.SiteContents).where({ PageId: $scope.SelectedPage.Id }).sortBy(function (content) { return content.Position.ZIndex; }).value();
            _.each(ContentTypeList, function (contentType) {
                $scope.PageContents.ByType[contentType.Crtl] = _.where($scope.PageContents.Raw, { Type: contentType.Enum });
            });
        };
        $scope.ClearEditPanel = function () {
            $scope.CurrentPanel = "ADD-UNIT";
            $scope.ActiveContent = null;
            $scope.HighlightedContent = null;
            _.each($scope.SiteContents, function (item) { item.Editing = false; });
        };
        $scope.$on("ZIndexChangeRequest", function (sender, change) {
            var DoIt = function (list, filter, action) {
                _.chain(list).filter(filter).forEach(action);
            };
            var oneUp = function (content) {
                if (!content.Position.ozIndex) {
                    content.Position.ozIndex = content.Position.ZIndex;
                }
                content.Position.ZIndex += 1;
            };
            var oneDown = function (content) {
                if (!content.Position.ozIndex) {
                    content.Position.ozIndex = content.Position.ZIndex;
                }
                content.Position.ZIndex -= 1;
            };
            switch (change) {
                case zIndexChange.ONE_UP:
                    DoIt($scope.PageContents.Raw, function (content) { return content.Position.ZIndex === $scope.ActiveContent.Position.ZIndex + 1; }, oneDown);
                    $scope.ActiveContent.Position.ZIndex += 1;
                    break;
                case zIndexChange.ONE_DOWN:
                    DoIt($scope.PageContents.Raw, function (content) { return content.Position.ZIndex === $scope.ActiveContent.Position.ZIndex - 1; }, oneUp);
                    $scope.ActiveContent.Position.ZIndex -= 1;
                    break;
                case zIndexChange.BRING_TO_FRONT:
                    var maxZIndex = GetCurrentPageMaxZIndex();
                    DoIt($scope.PageContents.Raw, function (content) { return content.Position.ZIndex > $scope.ActiveContent.Position.ZIndex; }, oneDown);
                    $scope.ActiveContent.Position.ZIndex = maxZIndex;
                    break;
                case zIndexChange.SEND_TO_BACK:
                    DoIt($scope.PageContents.Raw, function (content) { return content.Position.ZIndex < $scope.ActiveContent.Position.ZIndex; }, oneUp);
                    $scope.ActiveContent.Position.ZIndex = 1;
                    break;
            }
            $scope.UpdateZIndexOptions();
            commitZindex = true;
            $scope.$broadcast("OnZIndexChange", $scope.ActiveContent);
        });
        $scope.UpdateZIndexOptions = function () {
            var maxZIndex = _.chain($scope.PageContents.Raw).pluck("Position").max(function (position) { return position.ZIndex; }).value().ZIndex;
            var zindex = $scope.ActiveContent.Position.ZIndex;
            $scope.ZIndexState.BRING_TO_FRONT = (zindex < maxZIndex);
            $scope.ZIndexState.SEND_TO_BACK = (zindex > 1);
            $scope.ZIndexState.ONE_UP = (zindex < maxZIndex);
            $scope.ZIndexState.ONE_DOWN = (zindex > 1);
        };
        $scope.DismissAddContentPreview = function () {
            $scope.$broadcast("DismissAddContentPreview");
        };
        $scope.ShowHelp = function () {
            if ($scope.ActiveContent) {
                $scope.$emit("HelpDisplay", HelpIndexer.GetIdByContentType($scope.ActiveContent.Type));
            }
            else {
                $scope.$emit("HelpDisplay", currentHelpId);
            }
        };
        $scope.EnterMultiSelectionMode = function (multiSelectionMode) {
            if ($scope.PageContents.Raw.length == 0) {
                $(".modal-no-content").lightbox_me();
            }
            else {
                $scope.MultiSelection = multiSelectionMode;
                $scope.CurrentPanel = multiSelectionPanel[multiSelectionMode];
                $scope.$broadcast("OnEnterMultiSelectionMode", multiSelectionMode);
                currentHelpId = multiSelectionMode == MultiSelectionMode.MOVE? "content/move" : "content/duplicate";
                $scope.$emit("HelpAutoDisplay", currentHelpId);
            }
            UnitContentModel.ContentTypeToPreview = null;
        };
        //EVENT LISTENERS
        $scope.OnPageHeightChange = _.debounce(function () {
            $http({ method: "POST", url: "../api/page/height", data: $scope.SelectedPage });
        }, 500);
        $scope.$on("OnCropRequest", function (sender, temporaryImage, deferred, options) {
            var myDefer = $q.defer();
            myDefer.promise.then($scope.OnCropFinish, $scope.OnCropCancel);
            $scope.CropDefer = deferred;
            $scope.CropInfo = {
                temporaryImage: temporaryImage,
                deferred: myDefer,
                options: options
            };
            $scope.CropUrl = "../crop.html";
            $scope.$apply();
        });
        $scope.$on("Edit", function (sender, data) {
            $scope.EditContent(data);
        });
        $scope.$on("DeleteRequest", function (sender, data) {
            DeleteContent(data);
        });
        $scope.$on("DuplicateRequest", function (sender, source, targetPageId) {
            ServerSync.SyncItem(source, ServerSyncCommands.DUPLICATE, { zIndex: GetCurrentPageMaxZIndex() + 1, targetPageId: targetPageId }).then(function (data) {
            	data.Duplicated = true;
            	data.DuplicatedMove = true;
                AddNewContentItemToScope(data);
                $scope.EditContent(data);
                $scope.HighlightedContent = data;
                $scope.DismissAddContentPreview();
            });
        });
        $scope.$on("NewContentRequest", function (sender, type, query) {
            var crtl = _.findWhere(ContentTypeList, { Enum: type }).Crtl;
            $http({
                method: "POST",
                url: "../api/" + crtl + "/new" + query,
                params: {
                    zindex: GetCurrentPageMaxZIndex() + 1
                },
                data: "\"" + $scope.SelectedPage.Id + "\""
            }).success(function (data) {
                AddNewContentItemToScope(data);
                $scope.EditContent(data);
                $scope.HighlightedContent = data;
                $scope.DismissAddContentPreview();
            }).error(HandleServerException);
        });
        $scope.$on("OnContentCommit", function (sender, data) {
            $scope.ActiveContent = null;
            $scope.CurrentPanel = "ADD-UNIT";
            $scope.HighlightedContent = null;
            if (commitZindex) {
                var zindex = [];
                _.forEach($scope.PageContents.Raw, function (content) {
                    var obj = _.pick(content, "Id", "Type");
                    obj.ZIndex = content.Position.ZIndex;
                    zindex.push(obj);
                });
                ServerSync.SyncItem(zindex, ServerSyncCommands.ZINDEX);
            }
            ServerSync.SyncItem(data, ServerSyncCommands.ALL).then(function (updatedData) {
                angular.copy(updatedData, data);
                data.Editing = false;
                data.IsNewContent = false;
                data.Selected = false;
                data.Position.ozIndex = null;
            });
        });
        $scope.$on("OnContentRollback", function (sender, data, backup) {
            _.each($scope.SiteContents, function (item) {
                if (item.Position.ozIndex) {
                    item.Position.ZIndex = item.Position.ozIndex;
                    item.Position.ozIndex = null;
                }
            });
            if (data.IsNewContent) {
                DeleteContent(data);
            }
            else {
                backup.Editing = false;
                backup.IsNewContent = false;
                angular.copy(backup, data);
            }
            $scope.ActiveContent = null;
            $scope.CurrentPanel = "ADD-UNIT";
            $scope.HighlightedContent = null;
        });
        $scope.$on("OnContentClick", function (sender, data) {
            if ($scope.ActiveContent) {
                return;
            }
            if ($scope.MultiSelection != MultiSelectionMode.OFF) {
                data.Selected = true;
                data.Editing = false;
                return;
            }
            $scope.HighlightedContent = data;
        });
        $scope.$on("SelectAll", function () {
            _.each($scope.PageContents.Raw, function (content) {
                content.Selected = true;
                content.Editing = false;
            });
        });
        $scope.$on("DeselectAll", function () {
            _.each($scope.PageContents.Raw, function (content) {
                content.Selected = false;
                content.Editing = false;
            });
        });
        $scope.$on("OnMoveTogetherCommit", function () {
        	currentHelpId = "content/start";
            MoveTogetherCommitOrCancel();
        });
        $scope.$on("OnMoveTogetherRollback", function () {
			currentHelpId = "content/start";
            MoveTogetherCommitOrCancel();
        });
        $scope.$on("OnMassDuplicateRequest", function (sender, targetPages, itemsToDuplicate) {
        	currentHelpId = "content/start";
        	if (!itemsToDuplicate) {
	        	itemsToDuplicate = _.where($scope.PageContents.Raw, { Selected: true });
        	}
        	_.each($scope.PageContents.Raw, function (content) {    //Reset nos conteúdos originais
        		content.Selected = false;
        		content.Editing = false;
        	});
        	if (targetPages.length == 0 || itemsToDuplicate.length == 0) {
        		MoveTogetherCommitOrCancel();
        		return;
        	}
        	$scope.DuplicateBg.show = true;
        	var DuplicateItemsOnPage = function (pageId, items) {
        		$scope.SelectedPage = _.findWhere($scope.Pages, { Id: pageId });
        		$scope.FetchPageContent();
        		var zindexDuplicateBG = GetCurrentPageMaxZIndex() + 1;
        		var totalItemsToDuplicate = items.length;
        		var defer = $q.defer();
        		$scope.DuplicateBg.zindex = zindexDuplicateBG;
        		_.each(items, function (item, i) {
        			ServerSync.SyncItem(item, ServerSyncCommands.DUPLICATE, { zIndex: zindexDuplicateBG + i + 1, targetPageId: pageId }).then(function (newContent) {
        				AddNewContentItemToScope(newContent);
        				newContent.Duplicated = true;
        				newContent.DuplicatedMove = false;
        				newContent.Selected = false;
        				newContent.Editing = false;
        				newContent.IsNewContent = false;
        				totalItemsToDuplicate--;
        				if (totalItemsToDuplicate == 0) {
        					defer.resolve();
        				}
        			});
        		});
        		return defer.promise;
        	};
        	var currentPage = -1;
        	var AfterContentIsDuplicatedOnPage = function () {
        		currentPage++;
        		if (currentPage < targetPages.length) {
        			DuplicateItemsOnPage(targetPages[currentPage], itemsToDuplicate).then(AfterContentIsDuplicatedOnPage);
        			return;
        		}
        		$timeout(function () {
        			MoveTogetherCommitOrCancel();
        		}, 500);
        	};
        	AfterContentIsDuplicatedOnPage();
        });
        $scope.$on("OnMassDuplicateRollback", function (sender) {
            _.chain($scope.PageContents.Raw).where({ IsNewContent: true }).each(function (content) {
                ServerSync.SyncItem(content, ServerSyncCommands.DELETE);
                $scope.SiteContents = _.without($scope.SiteContents, content);
            });
            $scope.FetchPageContent();
            MoveTogetherCommitOrCancel();
        });
        $scope.$on("OnTemplateRequest", function (sender, templateId) {
        	$http({
        		method: "POST",
        		url: "../api/template/apply",
        		params: {
        			templateId: templateId,
        			targetPageId: $scope.SelectedPage.Id,
        			zindex: GetCurrentPageMaxZIndex() + 1
        		}
        	}).success(function (items) {
        		_.each(items, function (item) {
        			AddNewContentItemToScope(item);
        			item.Duplicated = true;
        			item.DuplicatedMove = false;
        			item.Selected = false;
        			item.Editing = false;
        			item.IsNewContent = false;
        		});
        	});
        });
        angular.element($document).on("click", function (e) {
            if (($scope.HighlightedContent != null) && ($scope.ActiveContent == null)) {
                if (angular.element(e.target).parent("#" + $scope.HighlightedContent.Id).length == 0) {
                    $scope.HighlightedContent = null;
                    $scope.$digest();
                }
            }
        });
        $scope.OnCropFinish = function (data) {
            $scope.CropUrl = null;
            $scope.CropDefer.resolve(data);
        };
        $scope.OnCropCancel = function () {
            $scope.CropUrl = null;
            $scope.CropDefer.reject();
        };
        $scope.OnPageChange = function (pageTitle, trigger) {
            $scope.SelectedPage = _.findWhere($scope.Pages, { Title: pageTitle });
            $scope.FetchPageContent();
            gaEvent("UX001_PAGE_CHANGE", trigger);
        };
        //PRIVATE METHODS
        var FetchPages = function () {
            $http({ method: "GET", url: "../api/page/get" })
                .success(function (data) {
                    $scope.Pages = _.chain(data)
                                        .filter(function (key) { return key.Title != "" && key.Title != null; })
                                        .sortBy(function (key) { return key.Position; }).value();
                    //O mapeamento abaixo é pro componente wj-select-box-it
                    _.each($scope.Pages, function (key) {
                        key.value = key.Title;
                        key.text = key.Title;
                    });
                    $scope.SelectedPage = $scope.Pages[0];
                    $scope.FetchPageContent();
                    $scope.$emit("HelpAutoDisplay", "content/start");
                }).error(HandleServerException);
        };
        //CODE STARTS HERE
        $http({ method: "GET", url: "../api/content/get" })
            .success(function (data) {
                $scope.SiteContents = data;
                _.each($scope.SiteContents, function (content) {
                    content.IsNewContent = false;
                    content.Editing = false;
                    content.Position.ozIndex = null;
                });
                FetchPages();
            }).error(HandleServerException);
        gettextCatalog.currentLanguage = $cookies.language;
        $scope.Logout = function () {
        	$http({ method: "POST", url: "../api/user/logout" })
				.success(function (data, status, headers, config) {
					top.location.href = "../index.html";
				}).error(HandleServerException);
        };
        $http({ method: "GET", url: "../api/user/get" })
			.success(function (data) {
				$scope.User = data;
			}).error(HandleServerException);
        Sair = $scope.Logout;
    });
var CropImageCrtl = function ($scope, $http, $cookies, gettextCatalog, WebjatoConfig, HandleServerException) {
    $scope.working = false;
    $scope.temporaryImage = null;
    $scope.deferred = null;
    $scope.Config = WebjatoConfig;
    $scope.CropArea = { x: 0, y: 0, w: 0, h: 0 };
    $scope.CropOptions = null;
    $scope.img = "";
    $scope.OnSelect = function (coords) {
        $scope.CropArea = {
            x: ~~coords.x,
            y: ~~coords.y,
            w: ~~coords.w,
            h: ~~coords.h
        };
    };
    $scope.OnImageLoad = function () {
        $scope.working = false;
        $scope.$apply();
    }
    $scope.Crop = function () {
        $scope.working = true;
        $http({ method: "POST", url: "../api/tmpimg/crop", data: { id: $scope.temporaryImage.Id, x: $scope.CropArea.x, y: $scope.CropArea.y, w: $scope.CropArea.w, h: $scope.CropArea.h, keepOriginalImage: $scope.CropOptions.keepOriginalImage } })
            .success(function (data) {
                $scope.deferred.resolve(data);
                $(".crop-tool").trigger("close");
            }).error(HandleServerException);
    };
    $scope.KeepOriginal = function () {
        $scope.deferred.resolve($scope.temporaryImage);
        $(".crop-tool").trigger("close");
    };
    $scope.Cancel = function () {
        $http({ method: "POST", url: "../api/tmpimg/delete", data: $scope.temporaryImage });
        $scope.deferred.reject();
        $(".crop-tool").trigger("close");
    };
    $scope.temporaryImage = $scope.$parent.CropInfo.temporaryImage;
    $scope.deferred = $scope.$parent.CropInfo.deferred;
    $scope.CropOptions = $scope.$parent.CropInfo.options;
    $scope.img = $scope.Config.AssetsPath + $scope.temporaryImage.Key;
    $scope.working = true;
    $(".crop-tool").lightbox_me({
        centered: true,
        closeClick: false,
        closeEsc: false,
        destroyOnClose: true
    });
    gettextCatalog.currentLanguage = $cookies.language;
};
var Page = (function () {
    function Page() {
    }
    return Page;
}());

angular.module("WebjatoFactories")
.factory("WebjatoCssHandler",
    function () {
        return {
            GetStyleSheet: function (styleSheetTitle) {
                var styleSheetExists = _.some(document.styleSheets, function (styleSheet) { return styleSheet.title == styleSheetTitle; });
                if (!styleSheetExists) {
                    $("head").append("<style type=\"text/css\" media=\"screen\" title=\"" + styleSheetTitle + "\"></style>");
                }
                return _.findWhere(document.styleSheets, { title: styleSheetTitle });
            },
            ApplyCSS: function (styleSheetTitle, rules) {
                var sheet = this.GetStyleSheet(styleSheetTitle);
                //Deletes old rules
                var sheetRules = sheet.cssRules ? sheet.cssRules : sheet.rules;
                while (sheetRules.length > 0) {
                    if (sheet.deleteRule) {
                        sheet.deleteRule(0);
                    }
                    else if (sheet.removeRule) {
                        sheet.removeRule(0);
                    }
                }
                //Apply new rules
                _.each(rules, function (rule) {
                    if (sheet.insertRule) {
                        sheet.insertRule(rule.Class + " { " + rule.Value + " }", sheetRules.length);
                    }
                    else if (sheet.addRule) {
                        sheet.addRule(rule.Class, rule.Value, sheetRules.length);
                    }
                });
            }
        };
    });
angular.module("WebjatoFactories")
.factory("WebjatoFormatter",
    function ($sce, MenuConfig) {
        var hashRepeat = {
            "11": "repeat",
            "10": "repeat-x",
            "01": "repeat-y",
            "00": "no-repeat"
        };
        var hashVAlign = {
            "1": "top",
            "2": "center",
            "3": "bottom"
        };
        var hashHAlign = {
            "1": "left",
            "2": "center",
            "3": "right"
        };
        return {
            Background: {
                Data: null,
                Style: {},
                Refresh: function (bg, site, assetsPath) {
                    this.Data = bg;
                    this.Style["background-color"] = bg.Color;
                    this.Style["background-image"] = (bg.ImageKey != null && bg.ImageKey != "") ? "url('" + assetsPath + bg.ImageKey + "')" : "none";
                    this.Style["background-repeat"] = hashRepeat[(bg.HRepeat ? "1" : "0") + (bg.VRepeat ? "1" : "0")];
                    this.Style["background-position"] = hashVAlign[bg.VAlign] + " " + hashHAlign[bg.HAlign];
                    this.Style["background-attachment"] = bg.IsFixed ? "fixed" : "scroll";
                    this.Style["text-align"] = hashHAlign[site.Alignment];
                }
            },
            Frame: {
                Data: null,
                StyleBase: {},
                StyleContPage: {},
                StyleEstrutura: {},
                Refresh: function(data, site) {
                    this.Data = data;
                    this.StyleContPage["padding-top"] = data.MarginTop + "px";
                    this.StyleContPage["margin-left"] = parseInt(site.Alignment) == 1 ? "0" : "auto";
                    this.StyleContPage["margin-right"] = parseInt(site.Alignment) == 1 ? "0" : "auto";
                    this.StyleEstrutura["margin"] = parseInt(site.Alignment) == 1 ? "0" : "0 auto";
                    this.StyleEstrutura["border-top-color"] = data.BorderTop.Color;
                    this.StyleEstrutura["border-top-width"] = data.BorderTop.Width + "px";
                    this.StyleEstrutura["border-bottom-color"] = data.BorderBottom.Color;
                    this.StyleEstrutura["border-bottom-width"] = data.BorderBottom.Width + "px";
                    this.StyleEstrutura["border-left-color"] = data.BorderSides.Color;
                    this.StyleEstrutura["border-left-width"] = data.BorderSides.Width + "px";
                    this.StyleEstrutura["border-right-color"] = data.BorderSides.Color;
                    this.StyleEstrutura["border-right-width"] = data.BorderSides.Width + "px";
                    this.StyleBase["background-color"] = data.IsTransparent ? "transparent" : data.Color;
                }
            },
            Footer: {
                Data: null,
                Style: {},
                Refresh: function (footer, site, frame) {
                    this.Data = footer;
                    this.Style["background-color"] = footer.IsTransparent ? "transparent" : footer.Color;
                    this.Style["width"] = 1000;
                    this.Style["margin"] = parseInt(site.Alignment) == 1 ? "0" : "0 auto";
                    this.Style["border-left-width"] = frame.BorderSides.Width + "px";
                    this.Style["border-right-width"] = frame.BorderSides.Width + "px";
                    this.Data.TrustedText = function () { return $sce.trustAsHtml(footer.Text); };
                }
            },
            Header: {
                Data: null,
                Style: {},
                Refresh: function (header, assetsPath) {
                    this.Data = header;
                    this.Style["background-color"] = header.IsTransparent ? "transparent" : header.Color;
                    this.Style["background-image"] = (header.ImageKey != null && header.ImageKey != "") ? "url('" + assetsPath + header.ImageKey + "')" : "none";
                    this.Style["background-repeat"] = hashRepeat[(header.HRepeat ? "1" : "0") + (header.VRepeat ? "1" : "0")];
                    this.Style["background-position"] = hashVAlign[header.VAlign] + " " + hashHAlign[header.HAlign]
                    this.Style["height"] = header.Height + "px";
                }
            },
            Logo: {
                Data: null,
                StyleText: {},
                StyleImageContainer: {},
                StyleImage: {},
                ImagePath: "",
                Refresh: function (logo, assetsPath) {
                    this.Data = logo;
                    this.StyleText["top"] = logo.Position.Y + "px";
                    this.StyleText["left"] = logo.Position.X + "px";
                    this.StyleText["display"] = "block";
                    this.StyleImageContainer["display"] = (parseInt(logo.LogoType) == 2) ? "block" : "none";
                    this.StyleImageContainer["top"] = logo.Position.Y + "px";
                    this.StyleImageContainer["left"] = logo.Position.X + "px";
                    this.StyleImage["width"] = logo.ImageExportedSize.Width + "px";
                    this.ImagePath = (logo.ImageExportedKey != null && logo.ImageExportedKey != "") ? assetsPath + logo.ImageExportedKey : "#";
                    this.Data.TrustedText = function () { return $sce.trustAsHtml(logo.Text); };
                }
            },
            Site: {
                Data: null,
                Style: {},
                Refresh: function (data) {
                    this.Data = angular.copy(data);
                    this.Style["margin"] = parseInt(data.Alignment) == 1 ? "0" : "0 auto";
                    MenuConfig.ApplyCSS(data.Menu);
                }
            }
        };
    });
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
            var m = {
                Id: menu.Id
            };
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
                            { Class: ".botao_template_dois li a:hover", Value: "color: " + m.TextActive + "; border-top-color: " + m.LineActive + "; border-bottom-color: " + m.LineActive + ";" },
                            { Class: ".botao_template_dois li a.active", Value: "color: " + m.TextActive + "; border-top-color: " + m.LineActive + "; border-bottom-color: " + m.LineActive + ";" }
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
                            { Class: ".cdfqed li a:hover", Value: "color: " + m.TextActive + ";" },
                            { Class: ".cdfqed li a.active", Value: "color: " + m.TextActive + ";" }
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
                            { Class: ".coisa li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" },
                            { Class: ".coisa li a.active", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
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
                            { Class: ".colon li a:hover", Value: "color: " + m.TextActive + ";" },
                            { Class: ".colon li a.active", Value: "color: " + m.TextActive + ";" }
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
                            { Class: ".crf li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" },
                            { Class: ".crf li a.active", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
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
                            { Class: ".css_menu li a:hover", Value: "border-bottom-color: " + m.LineActive + "; color: " + m.TextActive + ";" },
                            { Class: ".css_menu li a.active", Value: "border-bottom-color: " + m.LineActive + "; color: " + m.TextActive + ";" }
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
                            { Class: ".cvdv li a:hover", Value: "color: " + m.TextActive + ";" },
                            { Class: ".cvdv li a.active", Value: "color: " + m.TextActive + ";" }
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
                            { Class: ".cvea li a:hover", Value: "color: " + m.TextActive + ";" },
                            { Class: ".cvea li a.active", Value: "color: " + m.TextActive + ";" }
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
                            { Class: ".edu_tnvacation li a:hover", Value: "color: " + m.TextActive + ";" },
                            { Class: ".edu_tnvacation li a.active", Value: "color: " + m.TextActive + ";" }
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
                            { Class: ".estudo_do_espaco li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" },
                            { Class: ".estudo_do_espaco li a.active", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
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
                            { Class: ".fashion li a:hover", Value: "color: " + m.TextActive + ";" },
                            { Class: ".fashion li a.active", Value: "color: " + m.TextActive + ";" }
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
                            { Class: ".feq li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" },
                            { Class: ".feq li a.active", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
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
                            { Class: ".foc li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" },
                            { Class: ".foc li a.active", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
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
                            { Class: ".good li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" },
                            { Class: ".good li a.active", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
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
                            { Class: ".gotmojo li a:hover", Value: "color: " + m.TextActive + ";" },
                            { Class: ".gotmojo li a.active", Value: "color: " + m.TextActive + ";" }
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
                            { Class: ".greencircles li a:hover", Value: "border-bottom-color: " + m.LineActive + "; color: " + m.TextActive + ";" },
                            { Class: ".greencircles li a.active", Value: "border-bottom-color: " + m.LineActive + "; color: " + m.TextActive + ";" }
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
                            { Class: ".hydrastudio li a:hover", Value: "color: " + m.TextActive + ";" },
                            { Class: ".hydrastudio li a.active", Value: "color: " + m.TextActive + ";" }
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
                            { Class: ".menu_ li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" },
                            { Class: ".menu_ li a.active", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
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
                            { Class: ".menu_e_cores li a:hover", Value: "color: " + m.TextActive + ";" },
                            { Class: ".menu_e_cores li a.active", Value: "color: " + m.TextActive + ";" }
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
                            { Class: ".mercerbradley li a:hover", Value: "border-left-color: " + m.LineActive + "; border-right-color: " + m.LineActive + "; border-top-color: " + m.LineActive + "; border-bottom-color: " + m.LineActive + "; color: " + m.TextActive + ";" },
                            { Class: ".mercerbradley li a.active", Value: "border-left-color: " + m.LineActive + "; border-right-color: " + m.LineActive + "; border-top-color: " + m.LineActive + "; border-bottom-color: " + m.LineActive + "; color: " + m.TextActive + ";" }
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
                            { Class: ".ref_barra li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" },
                            { Class: ".ref_barra li a.active", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
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
                            { Class: ".template li a:hover", Value: "color: " + m.TextActive + ";" },
                            { Class: ".template li a.active", Value: "color: " + m.TextActive + ";" }
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
                            { Class: ".template_back li a:hover", Value: "color: " + m.TextActive + ";" },
                            { Class: ".template_back li a.active", Value: "color: " + m.TextActive + ";" }
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
                            { Class: ".template_menu li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" },
                            { Class: ".template_menu li a.active", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
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
                            { Class: ".tuti li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" },
                            { Class: ".tuti li a.active", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
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
                            { Class: ".untitled_1a li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" },
                            { Class: ".untitled_1a li a.active", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
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
                            { Class: ".vfsv li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" },
                            { Class: ".vfsv li a.active", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
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
                            { Class: ".wwd li a:hover", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" },
                            { Class: ".wwd li a.active", Value: "background-color: " + m.BgActive + "; color: " + m.TextActive + ";" }
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
var Help = (function () {
    function Help() {
        this.items = [];
        this.enabled = false;
        this.cookieHelpItems = "HelpItems";
        this.cookieHelpState = "HelpState";
        this.enabled = this.RetrieveHelpState();
        var identifiers = [
            "main",
            "config/size",
            "config/align",
            "config/title",
            "config/pages",
            "config/position",
            "visual/bg",
            "visual/header",
            "visual/footer",
            "visual/logo",
            "visual/menu",
            "visual/page",
            "content/start",
            "content/text",
            "content/box",
            "content/line",
            "content/image-simple",
            "content/image-expandable",
            "content/image-linked",
            "content/video",
            "content/map",
            "content/social",
            "content/contact-form",
            "content/move",
            "content/duplicate",
            "publish/address",
            "publish/display",
            "publish/share",
            "publish/hide"
        ];
        var itemsState = this.RetrieveHelpItems();
        for (var i = 0; i < identifiers.length; i++) {
            var helpItem = new HelpItem(identifiers[i], (itemsState != "") ? (itemsState.charAt(i) == "1") : false);
            this.items.push(helpItem);
        }
    }
    Help.prototype.ExportHelpItems = function () {
        var helpState = "";
        var helpItem;
        for (var i = 0; i < this.items.length; i++) {
            helpItem = this.items[i];
            helpState += (helpItem.displayed ? "1" : "0");
        }
        $.cookie(this.cookieHelpItems, helpState, { path: "/" });
    };
    Help.prototype.RetrieveHelpItems = function () {
        var state = $.cookie(this.cookieHelpItems);
        return ((state == undefined) ? "" : state);
    };
    Help.prototype.ExportHelpState = function () {
        $.cookie(this.cookieHelpState, this.enabled ? "1" : "0", { path: "/" });
    };
    Help.prototype.RetrieveHelpState = function () {
        var state = $.cookie(this.cookieHelpState);
        return ((state == undefined) ? false : (state == "1"));
    };
    Help.prototype.Show = function (id) {
        if (!this.enabled) {
            return false;
        }
        var item = this.GetHelpItem(id);
        if (!item.displayed) {
            item.displayed = true;
            this.ExportHelpItems();
            return true;
        }
        return false;
    };
    Help.prototype.GetHelpItem = function (id) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                return this.items[i];
            }
        }
        return null;
    };
    Help.prototype.ResetAllItemsState = function () {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].displayed = false;
        }
        this.ExportHelpItems();
    };
    Help.prototype.SetEnabled = function (state, reset) {
        this.enabled = state;
        if (reset) {
            this.ResetAllItemsState();
        }
        this.ExportHelpState();
    };
    return Help;
}());

var HelpItem = (function () {
    function HelpItem(id, displayed) {
        this.id = id;
        this.displayed = displayed;
    }
    return HelpItem;
}());

angular.module("WebjatoModels").factory("UnitContentModel", function () {
	return {
		ContentTypeToPreview: null,
		ShowUnity: true
    };
});
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
angular.module("WebjatoServices").service("ContentType", function () {
    return ContentType;
});
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
                        return new ContentSize(data.Size, data.Width);
                    }
                    else {
                        return new ContentSize(data.Width, data.Size);
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
                    if (data.VideoId == "" || data.VideoId == null) {
                        return defaultPlaceHolderSize;
                    }
                    else {
                        return data.Size;
                    }
                case ContentType.MAPS:
                    if (data.Address == "" || data.Address == null) {
                        return defaultPlaceHolderSize;
                    }
                    else {
                        return data.Size;
                    }
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
                    if (data.VideoId == "" || data.VideoId == null) {
                        return defaultPlaceHolderSize;
                    }
                    else {
                        return data.Size;
                    }
                case ContentType.MAPS:
                    if (data.Address == "" || data.Address == null) {
                        return defaultPlaceHolderSize;
                    }
                    else {
                        return data.Size;
                    }
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
                    return data.IsNewContent ? GetResizeOptionsForNewLine(data, newContentDelta) : GetResizeOptionsForHighlightedLine(data);
                case ContentType.IMAGE:
                case ContentType.LINKED_IMAGE:
                case ContentType.EXPANDABLE_IMAGE:
                    return {
                        aspectRatio: true,
                        handles: "all",
                        minWidth: 20,
                        minHeight: 20,
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
angular.module("WebjatoServices").service("HandleServerException", function () {
    return function (data, status, headers, config) {
        switch (status) {
            case 401:
                top.location.href = "../session.html";
                break;
            default:
                alert("Status '" + status + "' não tratado.");
                break;
        }
    };
});
angular.module("WebjatoServices").service("HelpIndexer", function (ContentType) {
    var folder = "/help/";
    var items = [
        new HelpBit("main", "main.html", false),
        new HelpBit("config/size", "config-size.html", false),
        new HelpBit("config/align", "config-align.html", false),
        new HelpBit("config/title", "config-title.html", false),
        new HelpBit("config/pages", "config-pages.html", false),
        new HelpBit("config/position", "config-position.html", false),
        new HelpBit("config/finish", "config-finish.html", false),
        new HelpBit("visual/bg", "visual-bg.html", false),
        new HelpBit("visual/header", "visual-header.html", false),
        new HelpBit("visual/footer", "visual-footer.html", false),
        new HelpBit("visual/logo", "visual-logo.html", false),
        new HelpBit("visual/menu", "visual-menu.html", false),
        new HelpBit("visual/page", "visual-page.html", false),
        new HelpBit("visual/finish", "visual-finish.html", false),
        new HelpBit("content/start", "content-start.html", false),
        new HelpBit("content/text", "content-text.html", false),
        new HelpBit("content/box", "content-box.html", false),
        new HelpBit("content/line", "content-line.html", false),
        new HelpBit("content/image-simple", "content-image-simple.html", false),
        new HelpBit("content/image-expandable", "content-image-expandable.html", false),
        new HelpBit("content/image-linked", "content-image-linked.html", false),
        new HelpBit("content/video", "content-video.html", false),
        new HelpBit("content/map", "content-map.html", false),
        new HelpBit("content/social", "content-social.html", false),
        new HelpBit("content/contact-form", "content-contact-form.html", false),
        new HelpBit("content/move", "content-move.html", false),
        new HelpBit("content/duplicate", "content-duplicate.html", false),
        new HelpBit("publish/address", "publish-address.html", false),
        new HelpBit("publish/display", "publish-display.html", false),
        new HelpBit("publish/share", "publish-share.html", false),
        new HelpBit("publish/hide", "publish-hide.html", false)
    ];
    return {
        GetUrl: function (id) {
            return folder + _.find(items, function (item) { return item.Id === id; }).Url;
        },
        GetIdByContentType: function (type) {
            switch (type) {
                case ContentType.BOX: return "content/box";
                case ContentType.CONTACT_FORM: return "content/contact-form";
                case ContentType.MAPS: return "content/map";
                case ContentType.IMAGE: return "content/image-simple";
                case ContentType.LINKED_IMAGE: return "content/image-linked";
                case ContentType.LINE: return "content/line";
                case ContentType.SOCIAL: return "content/social";
                case ContentType.TEXT: return "content/text";
                case ContentType.VIDEO: return "content/video";
                case ContentType.EXPANDABLE_IMAGE: return "content/image-expandable";
            }
        }
    };
});

angular.module("WebjatoServices").service("MultiSelectionMode", function () {
    return MultiSelectionModeList;
});

angular.module("WebjatoServices").service("ServerSync", function ($rootScope, $http, $q, ContentTypeList, ServerSyncCommands) {
    return {
        isBusy: false,
        itemsToSync: [],
        deletedItems: [],
        Sync: function () {
            var _this = this;
            this.itemsToSync = _.reject(this.itemsToSync, function (item) {
                return _.contains(_this.deletedItems, item.data.Id);
            });
            if ((this.itemsToSync.length == 0) || this.isBusy) return;
            this.isBusy = true;
            var currentItem = this.itemsToSync.shift();
            var promisse_OnComplete = function (success, data, error) {
                if (success) {
                    currentItem.deferred.resolve(data);
                }
                else {
                    currentItem.deferred.reject(error);
                }
                if (currentItem.cmd == "DELETE") {
                    _this.deletedItems.push(currentItem.data.Id);
                }
                _this.isBusy = false;
                _this.Sync();
            };
            var promise = null;
            switch (currentItem.cmd) {
                case ServerSyncCommands.ALL:
                    promise = $http({ method: "POST", url: "../api/" + _.findWhere(ContentTypeList, { Enum: currentItem.data.Type }).Crtl + "/update", data: currentItem.data });
                    break;
                case ServerSyncCommands.POSITION:
                    promise = $http({ method: "POST", url: "../api/content/position", data: currentItem.data });
                    break;
                case ServerSyncCommands.DELETE:
                    promise = $http({ method: "POST", url: "../api/content/delete", data: currentItem.data });
                    break;
                case ServerSyncCommands.ZINDEX:
                    promise = $http({ method: "POST", url: "../api/content/UpdateZIndex", data: currentItem.data });
                    break;
                case ServerSyncCommands.DUPLICATE:
                    promise = $http({
                        method: "POST",
                        url: "../api/" + _.findWhere(ContentTypeList, { Enum: currentItem.data.Type }).Crtl + "/duplicate",
                        params: {
                            zindex: currentItem.args.zIndex,
                            targetPageId: currentItem.args.targetPageId
                        },
                        data: currentItem.data
                    });
                    break;
            }
            promise.success(function (data) {
                promisse_OnComplete(true, data, null);
            });
            promise.error(function (error) {
                promisse_OnComplete(false, null, error);
            });
        },
        SyncItem: function (item, operation, args) {
            var deferred = $q.defer();
            this.itemsToSync.push({
                data: item,
                cmd: operation,
                deferred: deferred,
                args: args
            });
            this.Sync();
            return deferred.promise;
        }
    }
});
angular.module("WebjatoServices").service("SiteStyle", function ($http, $location, WebjatoConfig, WebjatoFormatter, HandleServerException) {
    var qs = "";
    if ($location.search().siteId) {
        qs = "?siteId=" + $location.search().siteId;
    }
    $http({ method: "GET", url: "../api/site/get" + qs })
        .success(function (siteData) {
            WebjatoFormatter.Site.Refresh(siteData);
            $http({ method: "GET", url: "../api/frame/get" + qs })
                .success(function (frameData) {
                    WebjatoFormatter.Frame.Refresh(frameData, siteData);
                    $http({ method: "GET", url: "../api/background/get" + qs })
                        .success(function (data) {
                            WebjatoFormatter.Background.Refresh(data, siteData, WebjatoConfig.AssetsPath);
                        }).error(HandleServerException);
                    $http({ method: "GET", url: "../api/header/get" + qs })
                        .success(function (data) {
                            WebjatoFormatter.Header.Refresh(data, WebjatoConfig.AssetsPath);
                        }).error(HandleServerException);
                    $http({ method: "GET", url: "../api/footer/get" + qs })
                        .success(function (data) {
                            WebjatoFormatter.Footer.Refresh(data, siteData, frameData);
                        }).error(HandleServerException);
                    $http({ method: "GET", url: "../api/logo/get" + qs })
                        .success(function (data) {
                            WebjatoFormatter.Logo.Refresh(data, WebjatoConfig.AssetsPath);
                        }).error(HandleServerException);
                }).error(HandleServerException);
        }).error(HandleServerException);
    return WebjatoFormatter;
});
angular.module("WebjatoServices").service("SocialUtil", function () {
    return {
        AnyPluginEnabled: function (data) {
            return data.Facebook.Enabled || data.Twitter.Enabled || data.LinkedIn.Enabled || data.YouTube.Enabled || data.GooglePlus.Enabled || data.Pinterest.Enabled || data.Instagram.Enabled;
        }
    };
});
angular.module("WebjatoServices").service("URLParser", function () {
    return function (url) {
        return new URI(url);
    };
});


angular.module("WebjatoDirectives").directive("wjAnimate", function ($timeout, $parse, ServerSync, ServerSyncCommands) {
    return {
        restrict: "A",
        replace: false,
        link: function (scope, elem, attrs) {
            var data = $parse(attrs.wjAnimate)(scope);
            //ANIMATE ZINDEX
            var oldZindex = null;
            scope.$watch(
                function () {
                    return data.Position.ZIndex;
                }, function (newValue) {
                    if (!oldZindex) {
                        oldZindex = newValue;
                        return;
                    }
                    var cls = newValue > oldZindex ? "zindex-up" : "zindex-down";
                    elem.addClass(cls);
                    oldZindex = newValue;
                    $timeout(function () {
                        elem.removeClass(cls);
                    }, 400);
                });
            //ANIMATE DUPLICATE
            var duplicateWatcher = scope.$watch(function () { return data.Duplicated; }, function () {
                if (!data.Duplicated) {
                    duplicateWatcher();
                    return;
                }
                elem.addClass("duplicated");
                if (!data.DuplicatedMove) {
                	return;
                }
                $timeout(function () {
                    data.Position.X += 50;
                    data.Position.Y += 50;
                }, 100);
                $timeout(function () {
                    elem.removeClass("duplicated");
                    ServerSync.SyncItem(data, ServerSyncCommands.POSITION);
                }, 500);
            });
        }
    };
});
angular.module("WebjatoDirectives").directive("wjAnimatedHighlight", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/animated-highlight.html",
        scope: {
            data: "=",
            multiSelectionMode: "="
        },
        controller: function ($scope, $rootScope, $timeout, ContentUtils, MultiSelectionMode, ContentType) {
            var backedupPosition = null;
            var originalPosition = null;
            var startDragPosition = null;
            var GetPosition = function (data) {
                switch (data.Type) {
                    case ContentType.BOX:
                        var box = data;
                        if (box.Border.Exists) {
                            return new ContentPosition(-box.Border.Width, -box.Border.Width, 0);
                        }
                        break;
                    case ContentType.LINE:
                        var line = data;
                        if (line.IsHorizontal) {
                            return new ContentPosition(line.Width, 0, 0);
                        }
                        else {
                            return new ContentPosition(0, -line.Width, 0);
                        }
                }
                return new ContentPosition(0, 0, 0);
            };
            var BackupOriginalPosition = function () {
                backedupPosition = new ContentPosition($scope.data.Position.X, $scope.data.Position.Y, 0);
                originalPosition = new ContentPosition($scope.data.Position.X, $scope.data.Position.Y, 0);
            };
            $scope.position = new ContentPosition(0, 0, 0);
            $scope.size = new ContentSize(0, 0);
            $scope.selectionMode = MultiSelectionMode.OFF;
            $scope.selectionModeList = MultiSelectionMode;
            $scope.contentType = ContentType;
            $scope.toolbarDisplay = [false, false, false, false];
            $scope.displayElementName = false;
            $scope.$on("OnContentDragStart", function (event, x, y) {
                startDragPosition = new ContentPosition(x, y, 0);
            });
            $scope.$on("OnContentDrag", function (sender, x, y) {
                var dx = x - startDragPosition.X;
                var dy = y - startDragPosition.Y;
                $rootScope.$broadcast("OnMoveTogetherDrag", dx, dy, $scope.data);
            });
            $scope.$on("OnContentDragStop", function (event, x, y) {
                $rootScope.$broadcast("OnMoveTogetherStop");
            });
            $scope.$on("OnMoveTogetherDrag", function (event, dx, dy, sourceContent) {
                if (!$scope.data.Selected) {
                    return;
                }
                $scope.data.Position.X = originalPosition.X + dx;
                $scope.data.Position.Y = originalPosition.Y + dy;
                if ($scope.data != sourceContent) {
                    $scope.$apply();
                }
            });
            $scope.$on("OnMoveTogetherStop", function () {
                originalPosition.X = $scope.data.Position.X;
                originalPosition.Y = $scope.data.Position.Y;
            });
            $scope.$on("OnMoveTogetherRollback", function () {
                $scope.data.Position.X = backedupPosition.X;
                $scope.data.Position.Y = backedupPosition.Y;
            });
            $scope.$on("OnMoveTogetherCommit", function () {
                var positionChanged = (backedupPosition.X != $scope.data.Position.X) || (backedupPosition.Y != $scope.data.Position.Y);
                BackupOriginalPosition();
                if (positionChanged) {
                    $scope.$emit("OnContentCommit", $scope.data);
                }
            });
            $scope.$on("OnEnterMultiSelectionMode", function (e, multiSelectionMode) {
                BackupOriginalPosition();
                $scope.position = GetPosition($scope.data);
                $scope.size = ContentUtils.GetSizeForHighlightedContent($scope.data);
                $scope.selectionMode = multiSelectionMode;
                $scope.toolbarDisplay[0] = (multiSelectionMode == MultiSelectionMode.MOVE) || (multiSelectionMode == MultiSelectionMode.MOVE_AFTER_DUPLICATE);
            });
            $scope.$watch("data.Selected", function (newValue) {
                $scope.displayElementName = (newValue && $scope.data.Selected && ($scope.selectionMode == $scope.selectionModeList.DUPLICATE));
                if (!$scope.displayElementName) {
                    return;
                }
                $timeout(function () {
                    $scope.displayElementName = false;
                }, 500);
            });
        },
        compile: function (tElem, tAttrs, transclude) {
            return {
                pre: function (scope, elem, attrs) {
                    scope.draggableElement = elem.parent();
                },
                post: function (scope, elem, attrs) {
                    elem.on("click", function (e) {
                        if (e.target == elem.get(0)) {
                            scope.data.Selected = !scope.data.Selected;
                            scope.$apply();
                        }
                    });
                    scope.$on("$destroy", function (e) {
                        elem.off("click");
                    });
                }
            };
        }
    };
});

angular.module("WebjatoDirectives").directive("wjBoxEditor", function () {
    return {
        replace: true,
        restrict: "E",
        scope: {
            data: "=",
            zindex: "="
        },
        templateUrl: "box-editor-tpl.html",
        controller: function ($scope, ColorPickerConfig) {
            $scope.ColorPickerConfig = angular.extend({ change: $scope.OnDataChange }, ColorPickerConfig);
        }
    };
});
angular.module("WebjatoDirectives").directive("wjBox", function (ServerSync) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            editModeOn: "=",
            multiSelectionOn: "="
        },
        replace: true,
        templateUrl: "box-tpl.html",
        link: function (scope, elem, attrs) {
            var Refresh = function () {
                var borderWidth = scope.data.Border.Exists ? scope.data.Border.Width : "0";
                scope.Style = {
                    "background-color": scope.data.Color,
                    "border-color": scope.data.Border.Color,
                    "border-width": borderWidth + "px",
                    "top": scope.data.Position.Y + "px",
                    "left": scope.data.Position.X + "px",
                    "width": scope.data.Size.Width + "px",
                    "height": scope.data.Size.Height + "px",
                    "z-index": scope.data.Position.ZIndex
                };
            };
            scope.$watch("data", Refresh, true);
        }
    };
});
angular.module("WebjatoDirectives").directive("wjContactFormEditor", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=",
            zindex: "="
        },
        templateUrl: "contact-form-editor-tpl.html",
        controller: function ($scope, ColorPickerConfig) {
            $scope.IsEmailValid = function (mail) {
                if (mail == "") return true;
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(mail);
            };
            $scope.OnSelectedPartChange = function () {
                $scope.SelectedColor = $scope.data[$scope.SelectedPart];
                $scope.Undoable = null;
                $scope.PreviousColor = $scope.SelectedColor;
            };
            $scope.OnColorChange = function () {
                $scope.data[$scope.SelectedPart] = $scope.SelectedColor;
                $scope.Undoable = true;
            };
            $scope.Undo = function () {
                $scope.data[$scope.SelectedPart] = $scope.PreviousColor;
                $scope.SelectedColor = $scope.PreviousColor;
                $scope.Undoable = false;
            };
            $scope.SelectedPart = "BorderColor";
            $scope.SelectedColor = $scope.data.BorderColor;
            $scope.PreviousColor = $scope.data.BorderColor;
            $scope.Undoable = false;
            $scope.ColorPickerConfig = angular.extend({ change: $scope.OnColorChange }, ColorPickerConfig);
        }
    };
});
angular.module("WebjatoDirectives").directive("wjContactForm", function (ServerSync) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "contact-form-tpl.html"
    };
});
angular.module("WebjatoDirectives").directive("wjContentClick", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=",
            editModeOn: "="
        },
        templateUrl: "content-click-tpl.html",
        controller: function ($scope, $timeout, ContentType, ContentUtils) {
            $scope.position = {
                top: 0,
                left: 0
            };
            $scope.size = {
                width: 0,
                height: 0
            };
            var SetPosition = function () {
                var top = 0;
                var left = 0;
                switch ($scope.data.Type) {
                    case ContentType.BOX:
                        if ($scope.data.Border.Exists) {
                            top = -$scope.data.Border.Width;
                            left = -$scope.data.Border.Width;
                        }
                        break;
                    case ContentType.LINE:
                        if ($scope.data.IsHorizontal) {
                            top = -$scope.data.Width;
                        }
                        else {
                            left = -$scope.data.Width;
                        }
                        break;
                }
                if ((top == $scope.position.top) && (left == $scope.position.left)) {
                    return;
                }
                $scope.position.top = top;
                $scope.position.left = left;
                $scope.$digest();
            };
            var SetSize = function () {
                var size = ContentUtils.GetSizeForHighlightedContent($scope.data);
                var w = size.Width;
                var h = size.Height;
                if ((w == $scope.size.width) && (h == $scope.size.height)) {
                    return;
                }
                $scope.size.width = w;
                $scope.size.height = h;
                $scope.$digest();
            };

            $scope.Select = function () {
                $scope.$emit("OnContentClick", $scope.data);
            };
            $scope.$watch("data", _.debounce(function () {
                SetPosition();
                SetSize();
            }, 500), true);
        }
    };
});
angular.module("WebjatoDirectives").directive("wjContentToolbar", function (ContentType, ContentUtils) {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "toolbar-tpl.html",
        scope: {
            data: "=",
            draggableElement: "=",
            display: "="    //Array de boolean que define a visibilidade de cada botão nesta ordem [mover, editar, duplicar, excluir]
        },
        controller: function ($scope) {
            $scope.closeToTop = false;
            $scope.closeToRight = false;
            $scope.unfloatMoveButton = false;
            $scope.Delete = function () {
                $scope.$emit("DeleteRequest", $scope.data);
            };
            $scope.Duplicate = function () {
                $scope.$emit("DuplicateRequest", $scope.data, $scope.data.PageId);
            };
            $scope.Edit = function () {
                $scope.$emit("Edit", $scope.data);
            };
        },
        link: function (scope, elem, attrs) {
            var CalculateToolbarPosition = function (refreshAngular) {
                var position = $("#" + scope.data.Id).position();
                if (!position) {
                    return;
                }
                scope.closeToTop = position.top < 35;
                var isVerticalLine = (scope.data.Type == ContentType.LINE) && !scope.data.IsHorizontal;
                scope.closeToRight = isVerticalLine && (position.left > 880);
                scope.unfloatMoveButton = isVerticalLine;
                if (!refreshAngular) {
                    return;
                }
                scope.$apply();
            };

            var SetDraggableBoundaries = function () {
                var contPage = $(".cont-page");
                var delta = scope.data.IsNewContent ? 15 : 0;
                $(".js-content-boundary").width(contPage.width() + delta);
                $(".js-content-boundary").height(contPage.height() + delta);
            };

            var dragOptions = {
                containment: ".js-content-boundary",
                handle: ".btn.move",
                start: function (event, ui) {
                    scope.$emit("OnContentDragStart", ui.position.left, ui.position.top);
                },
                drag: function (event, ui) {
                    scope.$emit("OnContentDrag", ui.position.left, ui.position.top);
                },
                stop: function (event, ui) {
                    CalculateToolbarPosition(true);
                    scope.$emit("OnContentDragStop", ui.position.left, ui.position.top);
                }
            };
            $(scope.draggableElement).draggable(dragOptions);
            elem.on("$destroy", function () {
                $(scope.draggableElement).draggable("destroy");
            });
            scope.$watch("data", function (newValue) {
                if (!newValue) {
                    return;
                }
                CalculateToolbarPosition(false);
                SetDraggableBoundaries();
            });
        }
    };
});
/// <reference path="../typings/angular-1.2.d.ts" />
angular.module("WebjatoDirectives").directive("wjDuplicateBackground", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            marginTop: "@",
            show: "=",
            zIndex: "="
        },
        templateUrl: "/content/duplicate-background.html",
        controller: function ($scope) {
        }
    };
});
//# sourceMappingURL=wj-duplicate-background.js.map
angular.module("WebjatoDirectives").directive("wjDuplicateEditor", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/duplicate-editor.html",
        scope: {
            PageList: "=pageList",
            PageCurrent: "=pageCurrent"
        },
        controller: function ($scope) {
            _.each($scope.PageList, function (page) {
                page.SelectedAsTarget = false;
            });
            $scope.SelectedPages = [];
            $scope.OnPageSelectChange = function () {
                $scope.SelectedPages = _.chain($scope.PageList).where({ SelectedAsTarget: true }).pluck("Id").value();
            };
            $scope.SelectEverything = false;
            $scope.$watch("SelectEverything", function (newValue) {
                $scope.$emit(newValue ? "SelectAll" : "DeselectAll");
            });
        }
    };
});

angular.module("WebjatoDirectives").directive("wjHighlight", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "="
        },
        templateUrl: "highlight-tpl.html",
        controller: function ($scope, $rootScope, $timeout, ContentUtils, ContentType) {
            var newContentDelta = 0;
            $scope.toolbarDisplay = [false, false, false, false];
            $scope.isInteractiveContent = false;
            $scope.position = { top: null, left: null };
            $scope.size = { width: null, height: null };
            $scope.resizeEnabled = false;
            $scope.resizeOptions = {};
            $scope.OnClick = function () {
                $rootScope.$broadcast("OnHighlightClick", $scope.data);
            };
            $scope.OnSizeChange = function (w, h) {
                ContentUtils.SetContentSize($scope.data, w - newContentDelta, h - newContentDelta);
                $scope.$digest();
            };
            $scope.$on("OnContentDrag", function (sender, x, y) {
                $scope.data.Position.X = x;
                $scope.data.Position.Y = y;
                $scope.$apply();
            });
            $scope.$watch("data", function () {
                if ($scope.data == null) {
                    return;
                }
                newContentDelta = $scope.data.IsNewContent ? 30 : 0;
                $scope.position.top = $scope.data.Position.Y;
                $scope.position.left = $scope.data.Position.X;
                $scope.resizeEnabled = ContentUtils.IsContentResizableFromHighlightBox($scope.data) && $scope.data.Editing;
                $scope.resizeOptions = ContentUtils.GetResizeOptions($scope.data, newContentDelta + 10);
                $scope.isInteractiveContent = ($scope.data.Type == ContentType.TEXT) && $scope.data.Editing;
                $scope.toolbarDisplay = [$scope.data.Editing, !$scope.data.Editing, !$scope.data.Editing, !$scope.data.Editing];
                $timeout(function () {
                    if ($scope.data == null) {
                        return;
                    }
                    var size = $scope.data.IsNewContent ? ContentUtils.GetSizeForNewContent($scope.data) : ContentUtils.GetSizeForHighlightedContent($scope.data);
                    $scope.size.width = size.Width + newContentDelta;
                    $scope.size.height = size.Height + newContentDelta;
                }, 50);
            }, true);
        },
        link: {
            pre: function (scope, elem) {
                scope.draggableElement = elem;
            }
        }
    };
});
/// <reference path="wj-line-editor.js" />
angular.module("WebjatoDirectives").directive("wjImageEditor", function (CropSVC) {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=",
            zindex: "="
        },
        templateUrl: "image-editor-tpl.html",
        controller: function ($scope, $http, $timeout, FileUploader, $q, ContentTypeList, HandleServerException, WebjatoConfig) {
            var crtlURL = _.findWhere(ContentTypeList, { Enum: $scope.data.Type }).Crtl;
            var OnCropFinish = function (temporaryImage) {
                $http({ method: "POST", url: "../api/" + crtlURL + "/FromTmpImage", params: { imgId: $scope.data.Id }, data: temporaryImage })
                    .success(function (data) {
                        angular.extend($scope.data, data);
                    }).error(HandleServerException);
            };
            var recommendedSizeExists = !!$scope.data.RecommendedSize;
            var url = recommendedSizeExists ? "../api/tmpimg/newWithCanvas?width=" + $scope.data.RecommendedSize.Width + "&height=" + $scope.data.RecommendedSize.Height : "../api/tmpimg/new";
            $scope.uploader = new FileUploader({ scope: $scope, url: url });
            $scope.uploader.onAfterAddingFile = function (item) {
                var type = "|" + item.file.type.slice(item.file.type.lastIndexOf("/") + 1) + "|";
                $scope.IsFileValid = ("|jpg|png|jpeg|gif|".indexOf(type) !== -1);
                if (!$scope.IsFileValid) {
                    item.remove();
                    $timeout(function () { $scope.IsFileValid = true; }, 5000);
                }
                else {
                    $scope.Uploading = true;
                    item.upload();
                }
            };
            $scope.uploader.onProgressItem = function (item, progress) { $scope.UploadProgress = progress; };
            $scope.uploader.onSuccessItem = function (item, response) {
                //Older IE's
                if (typeof (response) == "string") {
                    var aux = response.replace("<PRE>", "").replace("</PRE>", "");
                    response = JSON.parse(aux);
                }
                $scope.Uploading = false;
                item.remove();
                if (recommendedSizeExists) {
                    CropSVC.Crop({
                        Url: WebjatoConfig.AssetsLocalPath + response.LocalKey,
                        Width: $scope.data.RecommendedSize.Width,
                        Height: $scope.data.RecommendedSize.Height
                    }).then(function (data64) {
                        $http({ method: "POST", url: "../api/tmpimg/newFromBase64", data: { Contents: data64, Name: response.Name } })
                            .success(function (data) {
                                OnCropFinish(data);
                            }).error(HandleServerException);
                    }, function () {
                        console.log('cancelou');
                    });
                }
                else {
                    var deferred = $q.defer();
                    deferred.promise.then(OnCropFinish, null);
                    $scope.$emit("OnCropRequest", response, deferred, {
                        allowResize: true,
                        boxWidth: 640,
                        boxHeight: 480,
                        setSelect: [0, 0, response.Width * 0.7, response.Height * 0.7],
                        type: "logo",
                        keepOriginalImage: ($scope.data.Type == 10)
                    });
                }
            };
            $scope.IsFileValid = true;
            $scope.Uploading = false;
        }
    };
});
angular.module("WebjatoDirectives").directive("wjImgExp", function (ContentUtils) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            folder: "@",
            editModeOn: "=",
            isPreview: "@"
        },
        replace: true,
        templateUrl: "image-expandable-tpl.html",
        controller: function ($scope, ContentUtils) {
            $scope.ImageURL = ContentUtils.GetImageURL($scope.data, $scope.folder);
            $scope.$watch("data", function () {
                $scope.ImageURL = ContentUtils.GetImageURL($scope.data, $scope.folder);
            }, true);
        },
        link: function (scope, elem, attrs) {
            if (scope.isPreview !== "1") {
                return;
            }
            var id = "img-exp-" + scope.data.Id;
            var tpl = "<img id=\"" + id + "\" src=\"" + ContentUtils.GetExpandedImageUrl(scope.data, scope.folder) + "\" style=\"display: none;\" />";
            $("body").append(tpl);
            scope.OpenExpandedImage = function () {
                $("#" + id).lightbox_me({
                    centered: true
                });
            };
        }
    };
});
angular.module("WebjatoDirectives").directive("wjImgLnk", function () {
    return {
        restrict: "E",
        scope: {
            data: "=",
            folder: "@",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "image-link-tpl.html",
        controller: function ($scope, ContentUtils) {
            $scope.ImageURL = ContentUtils.GetImageURL($scope.data, $scope.folder);
            $scope.Target = $scope.data.LinkType == "0" ? "_self" : "_blank";
            $scope.OpenLink = function () {
                if ($scope.data.LinkType == "0") {
                    $scope.$emit("ChangePage", $scope.data.TargetPageId);
                }
                else {
                    window.open($scope.data.LinkURL);
                }
            };
            $scope.$watch("data", function () {
                $scope.ImageURL = ContentUtils.GetImageURL($scope.data, $scope.folder);
            }, true);
        }
    };
});
angular.module("WebjatoDirectives").directive("wjImageUploadBackdrop", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/image-upload-backdrop.html",
        scope: {
            show: "=",
            progress: "="
        }
    };
});
angular.module("WebjatoDirectives").directive("wjImg", function () {
    return {
        restrict: "E",
        scope: {
            data: "=",
            folder: "@",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "image-tpl.html",
        controller: function ($scope, ContentUtils) {
            $scope.ImageURL = ContentUtils.GetImageURL($scope.data, $scope.folder);
            $scope.$watch("data", function () {
                $scope.ImageURL = ContentUtils.GetImageURL($scope.data, $scope.folder);
            }, true);
        }
    };
});
angular.module("WebjatoDirectives").directive("wjLineEditor", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=",
            zindex: "="
        },
        templateUrl: "line-editor-tpl.html",
        controller: function ($scope, ColorPickerConfig) {
            $scope.ColorPickerConfig = ColorPickerConfig;
        }
    };
});
angular.module("WebjatoDirectives").directive("wjLine", function () {
    return {
        restrict: "E",
        scope: {
            data: "=",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "line-tpl.html",
        link: function (scope, elem, attrs) {
            var Refresh = function () {
                var borderStyle = ["solid", "dotted", "dashed"];
                var borderTopWidth = scope.data.IsHorizontal ? scope.data.Width : "0";
                var borderLeftWidth = scope.data.IsHorizontal ? "0" : scope.data.Width;
                scope.Style = {
                    "border-top": borderTopWidth + "px " + borderStyle[scope.data.LineStyle] + " " + scope.data.Color,
                    "border-left": borderLeftWidth + "px " + borderStyle[scope.data.LineStyle] + " " + scope.data.Color,
                    "width": scope.data.IsHorizontal ? scope.data.Size + "px" : "4px",
                    "height": scope.data.IsHorizontal ? "4px" : scope.data.Size + "px",
                    "top": scope.data.Position.Y + "px",
                    "left": scope.data.Position.X + "px",
                    "z-index": scope.data.Position.ZIndex
                };
            };
            scope.$watch("data", Refresh, true);
        }
    };
});
angular.module("WebjatoDirectives").directive("wjMapEditor", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=",
            zindex: "="
        },
        templateUrl: "map-editor-tpl.html",
        controller: function ($scope) {
            $scope.SizeOptions = [
                { Width: 525, Height: 550, Label: "525 x 550" },
                { Width: 600, Height: 550, Label: "600 x 550" },
                { Width: 640, Height: 480, Label: "640 x 480" },
                { Width: 860, Height: 510, Label: "860 x 510" }];
            $scope.OnSizeChange = function () {
                $scope.data.Size.Width = $scope.SelectedSize.Width;
                $scope.data.Size.Height = $scope.SelectedSize.Height;
            };
            $scope.ApplyNewAddress = function () {
                $scope.data.Address = $scope.AddressTmp;
            };
            $scope.AddressTmp = $scope.data.Address;
            $scope.SelectedSize = _.findWhere($scope.SizeOptions, { Width: $scope.data.Size.Width });
        }
    };
});
angular.module("WebjatoDirectives").directive("wjMap", function ($sce, ServerSync) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "map-tpl.html",
        link: {
            pre: function (scope, elem, attrs) {
                scope.DraggableOpts = {
                    containment: ".cont-page",
                    handle: ".handle",
                    addClasses: false
                };
            },
            post: function (scope, elem, attrs) {
                scope.url = "";
                scope.$watch("data.Address", function (newValue) {
                    if (!angular.isDefined(scope.data.Address)) {
                        return;
                    }
                    var url = "https://www.google.com/maps/embed/v1/place?q={0}&key={1}";
                    var key = "AIzaSyA_BlBKdRyHdaj0HkxP87dM9EbQ7yzHr_A";
                    scope.url = $sce.trustAsResourceUrl(url.replace("{0}", escape(scope.data.Address)).replace("{1}", key));
                });
            }
        }
    };
});
angular.module("WebjatoDirectives").directive("wjMoveAfterDuplicateEditor", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/move-after-duplicate-editor.html"
    };
});

angular.module("WebjatoDirectives").directive("wjMoveTogetherEditor", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/move-together-editor.html",
        controller: function ($scope) {
            $scope.SelectEverything = false;
            $scope.$watch("SelectEverything", function (newValue) {
                $scope.$emit(newValue ? "SelectAll" : "DeselectAll");
            });
        }
    };
});

angular.module("WebjatoDirectives").directive("wjOkCancel", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/content/ok-cancel-tpl.html",
        scope: {
            data: "=",
            eventOk: "@",
            eventCancel: "@"
        },
        controller: function ($scope, $rootScope) {
            var backup = angular.copy($scope.data);
            $scope.Confirm = function () {
                $rootScope.$broadcast($scope.eventOk, $scope.data);
            };
            $scope.Cancel = function () {
                $rootScope.$broadcast($scope.eventCancel, $scope.data, backup);
            };
        }
    };
});

angular.module("WebjatoDirectives").directive("wjResizable", function ($parse) {
    return {
        restrict: "A",
        link: function (scope, elem, attrs) {
            attrs.$observe("wjResizableOptions", function (opts) {
                if ($(elem).resizable("instance")) {
                    $(elem).resizable("destroy");
                }
                $(elem).resizable(angular.extend({
                    containment: ".cont-page",
                    create: function (event, ui) {
                        if (angular.isDefined(attrs.wjEnabled)) {
                            $(elem).resizable(JSON.parse(attrs.wjEnabled) ? "enable" : "disable");
                        }
                        $(elem).find(".ui-icon").removeClass("ui-icon ui-icon-gripsmall-diagonal-se");
                    },
                    resize: function (event, ui) {
                        if (angular.isDefined(attrs.wjSizeChange)) {
                            var invoker = $parse(attrs.wjSizeChange);
                            invoker(scope, { w: Math.ceil(ui.size.width), h: Math.ceil(ui.size.height) });
                        }
                    }
                }, JSON.parse(opts)));
            });
            if (angular.isDefined(attrs.wjEnabled)) {
                attrs.$observe("wjEnabled", function (newValue) {
                    if ($(elem).resizable("instance")) {
                        $(elem).resizable(scope.$eval(newValue) ? "enable" : "disable");
                    }
                });
            }
            elem.on("$destroy", function () {
                $(elem).resizable("destroy");
            });
        }
    };
});
angular.module("WebjatoDirectives").directive("wjSelectBoxIt", function () {
    var ignoreChange = false;
    var selectBoxIt = null;
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
        link: function (scope, elem, attrs) {
            selectBoxIt = $(elem).selectBoxIt().data("selectBox-selectBoxIt");
            $(elem).change(function () {
                if (ignoreChange) {
                    ignoreChange = false;
                    return;
                }
                scope.onOptionSelect({ value: $(elem).val() });
                scope.$apply();
            });
            scope.$watch("options", function (value) {
                if (!(scope.options && scope.options.length > 0)) {
                    return;
                }
                selectBoxIt.remove();
                _.each(scope.options, function (item) {
                    selectBoxIt.add({ value: item.value, text: item.text });
                });
            });
            scope.$watch("enabled", function (value) {
                if (value) {
                    selectBoxIt.enable();
                }
                else {
                    selectBoxIt.disable();
                }
            });
            scope.$watch("currentOption", function () {
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
                    e.tipsy({ gravity: "e" });
                }, 1000)
            });
        }
    };
});

angular.module("WebjatoDirectives").directive("wjSocialEditor", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=",
            zindex: "="
        },
        templateUrl: "social-editor-tpl.html",
        controller: function ($scope) {
            var NormalizeURL = function () {
                _.each($scope.data, function (key) {
                    if (_.isObject(key) && _.has(key, "URL")) {
                        if (key.URL == "") return;
                        if (key.URL.indexOf("http") == -1) {
                            key.URL = "http://" + key.URL;
                        }
                    }
                });
            };
            $scope.DisplayAllPlugins = false;
        }
    };
});
angular.module("WebjatoDirectives").directive("wjSocial", function (SocialIconSize, SocialUtil) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "social-tpl.html",
        link: function (scope, elem, attrs) {
            var folder = "/images/social/";
            scope.Icons = {
                Facebook: [folder + "icone_face_peq.png", folder + "icone_face_med.png", folder + "icone_face_gran.png"],
                Twitter: [folder + "icone_twiter_peq.png", folder + "icone_twiter_med.png", folder + "icone_twiter_gran.png"],
                Linkedin: [folder + "icone_in_peq.png", folder + "icone_in_med.png", folder + "icone_in_gran.png"],
                Youtube: [folder + "icone_tube_peq.png", folder + "icone_tube_med.png", folder + "icone_tube_gran.png"],
                GooglePlus: ["http://placehold.it/16x16.png&text=G", "http://placehold.it/24x24.png&text=G", "http://placehold.it/32x32.png&text=G"],
                Pinterest: ["http://placehold.it/16x16.png&text=P", "http://placehold.it/24x24.png&text=P", "http://placehold.it/32x32.png&text=P"],
                Instagram: ["http://placehold.it/16x16.png&text=I", "http://placehold.it/24x24.png&text=I", "http://placehold.it/32x32.png&text=I"]
            };
            scope.IconsSize = [SocialIconSize.SMALL, SocialIconSize.REGULAR, SocialIconSize.LARGE];
            scope.$watch("data", function () {
                if (scope.data == null) {
                    return;
                }
                scope.AnyPluginEnabled = SocialUtil.AnyPluginEnabled(scope.data);
            }, true);
            //scope.OnMove = function (x, y) {
            //    scope.data.Position.X = parseInt(x, 10);
            //    scope.data.Position.Y = parseInt(y, 10);
            //    scope.$digest();
            //};
        }
    };
});
angular.module("WebjatoDirectives").directive("wjTextEditPanel", function () {
    return {
        restrict: "E",
        templateUrl: "text-editor-tpl.html",
        scope: {
            data: "=",
            zindex: "="
        },
        replace: true,
        link: function (scope, elem, attrs) {
            var originalZIndex = null;
            var ZIndexToTheTop = function (sender, data) {
                if (data.Id != scope.data.Id) {
                    return;
                }
                if (!originalZIndex) {
                    originalZIndex = scope.data.Position.ZIndex;
                }
                scope.data.Position.ZIndex = 10000;
            };
            var RestoreZIndex = function (e) {
                if (e.target.id && e.target.id.indexOf("mceu_") != -1) {
                    return;
                }
                if (angular.element(e.target).closest("#" + scope.data.Id).length == 1) {
                    return;
                }
                scope.data.Position.ZIndex = originalZIndex;
                scope.$apply();
            };
            var OnZIndexChange = function (sender, data) {
                if (scope.data.Id != data.Id) {
                    return;
                }
                originalZIndex = data.Position.ZIndex;
            };
            //Event listeners
            document.addEventListener("mousedown", RestoreZIndex, true);
            var offHighlightClick = scope.$on("OnHighlightClick", ZIndexToTheTop);
            var offZIndexChange = scope.$on("OnZIndexChange", OnZIndexChange);
            if (scope.data.IsNewContent) {
                ZIndexToTheTop(null, scope.data);
            }
            //Destroys the global listener
            elem.on("$destroy", function () {
                document.removeEventListener("mousedown", RestoreZIndex, true);
                offHighlightClick();
                offZIndexChange();
            });
        }
    };
});
angular.module("WebjatoDirectives").directive("wjText", function (ContentUtils) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            lang: "@",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "text-tpl.html",
        controller: function($scope, $timeout, $sce) {
            $scope.OnTextChange = function (newText) {
                $timeout(function () {
                    $scope.data.Value = newText;
                }, 0);
            };
            $scope.OnSizeChange = function (w, h) {
                $scope.data.Size.Width = w;
                $scope.data.Size.Height = h;
                $scope.$apply();
            };
            $scope.TrustedText = $sce.trustAsHtml;
        },
        link: {
            pre: function (scope) {
                scope.resizeOptions = ContentUtils.GetResizeOptions(scope.data);
                scope.TextEditorOpts = {
                    content: scope.data.Value ? scope.data.Value : "Escreva aqui...",
                    language: (scope.lang != "en_US")? scope.lang : null
                };
            }
        }
    };
});
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
angular.module("WebjatoDirectives").directive("wjUnitAdd", function () {
    return {
        replace: true,
        restrict: "E",
        scope: true,
        templateUrl: "unit-add-tpl.html",
        controller: function ($scope, ContentType, UnitContentModel) {
            $scope.ContentType = ContentType;
            $scope.Model = UnitContentModel;
        }
    };
});

angular.module("WebjatoDirectives").directive("wjUnitPreview", function () {
    return {
        replace: true,
        restrict: "E",
        scope: true,
        templateUrl: "unit-preview-tpl.html",
        controller: function ($scope, ContentType, UnitContentModel, $http) {
            $scope.ContentType = ContentType;
            $scope.Model = UnitContentModel;
            $scope.Templates = [];
            $scope.AddContent = function (contentType, query) {
                $scope.$emit("NewContentRequest", contentType, query);
            };
            $scope.Dismiss = function () {
            	$scope.Model.ShowUnity = true;
                $scope.Model.ContentTypeToPreview = null;
            };
            $scope.AddTemplate = function (template) {
            	$scope.$emit("OnTemplateRequest", template.Id);
            	$scope.Dismiss();
            };
            $scope.$on("DismissAddContentPreview", $scope.Dismiss);
            $http({ method: "GET", url: "../api/template/all" })
				.success(function (data) {
					$scope.Templates = data;
				});
        }
    };
});
angular.module("WebjatoDirectives").directive("wjVideoEditor", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "video-editor-tpl.html",
        scope: {
            data: "=",
            zindex: "="
        },
        controller: function ($scope, URLParser) {
            $scope.VideoSizeOptions = [
                { Width: 230, Height: 161, Label: "230 x 161" },
                { Width: 450, Height: 315, Label: "450 x 315" },
                { Width: 480, Height: 360, Label: "480 x 360" },
                { Width: 640, Height: 480, Label: "640 x 480" }
            ];
            $scope.OnVideoSizeChange = function () {
                $scope.data.Size.Width = $scope.data.SelectedSize.Width;
                $scope.data.Size.Height = $scope.data.SelectedSize.Height;
            };
            var GetVideoType = function (hostname) {
                if ((hostname.indexOf("youtube") != -1) || (hostname.indexOf("youtu.be") != -1)) {
                    return 1;
                }
                if (hostname.indexOf("vimeo") != -1) {
                    return 2;
                }
                return null;
            };
            $scope.OnRawURLChange = function () {
                var uri = URLParser($scope.data.RawURL);
                var videoType = GetVideoType(uri.hostname());
                if (!videoType) return;
                var videoId = (videoType == 1) ? uri.search(true).v : uri.path().replace("/", "");
                if (!videoId) return;
                $scope.data.VideoType = videoType;
                $scope.data.VideoId = videoId;
            };
            $scope.data.SelectedSize = _.findWhere($scope.VideoSizeOptions, { Width: $scope.data.Size.Width });
            $scope.data.RawURL = $scope.data.VideoId ? ($scope.data.VideoType == 1 ? "https://www.youtube.com/watch?v=" + $scope.data.VideoId : "http://vimeo.com/" + $scope.data.VideoId) : "";
        }
    };
});
angular.module("WebjatoDirectives").directive("wjVideo", function ($sce, ServerSync) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            editModeOn: "="
        },
        replace: true,
        templateUrl: "video-tpl.html",
        link: function (scope, elem, attrs) {
            var Refresh = function () {
                if (angular.isDefined(scope.data.VideoId)) {
                    var videoSource = (scope.data.VideoType == 1) ? "http://www.youtube.com/embed/" : "//player.vimeo.com/video/";
                    scope.url = scope.data.VideoId ? $sce.trustAsResourceUrl(videoSource + scope.data.VideoId) : null;
                }
            };
            scope.$watch("data", Refresh, true);
        }
    };
});
angular.module("WebjatoDirectives").directive("wjZindex", function (zIndexChange) {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "z-index-tpl.html",
        scope: {
            ZIndexState: "=state"
        },
        controller: function ($scope) {
            $scope.ZIndexChange = zIndexChange;
            $scope.ChangeZIndex = function (zIndexChange) {
                $scope.$emit("ZIndexChangeRequest", zIndexChange);
            };
        }
    };
});
var HelpBit = (function () {
    function HelpBit(Id, Url, Enabled) {
        this.Id = Id;
        this.Url = Url;
        this.Enabled = Enabled;
    }
    return HelpBit;
}());

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Box = (function (_super) {
    __extends(Box, _super);
    function Box() {
        _super.apply(this, arguments);
    }
    return Box;
}(ContentBase));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ContactForm = (function (_super) {
    __extends(ContactForm, _super);
    function ContactForm() {
        _super.apply(this, arguments);
    }
    return ContactForm;
}(ContentBase));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExpandableImage = (function (_super) {
    __extends(ExpandableImage, _super);
    function ExpandableImage() {
        _super.apply(this, arguments);
    }
    return ExpandableImage;
}(ScalableImage));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GoogleMaps = (function (_super) {
    __extends(GoogleMaps, _super);
    function GoogleMaps() {
        _super.apply(this, arguments);
    }
    return GoogleMaps;
}(ContentBase));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Line = (function (_super) {
    __extends(Line, _super);
    function Line() {
        _super.apply(this, arguments);
    }
    return Line;
}(ContentBase));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LinkedImage = (function (_super) {
    __extends(LinkedImage, _super);
    function LinkedImage() {
        _super.apply(this, arguments);
    }
    return LinkedImage;
}(ScalableImage));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RegularImage = (function (_super) {
    __extends(RegularImage, _super);
    function RegularImage() {
        _super.apply(this, arguments);
    }
    return RegularImage;
}(ScalableImage));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SocialPlugins = (function (_super) {
    __extends(SocialPlugins, _super);
    function SocialPlugins() {
        _super.apply(this, arguments);
    }
    return SocialPlugins;
}(ContentBase));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TextWJ = (function (_super) {
    __extends(TextWJ, _super);
    function TextWJ() {
        _super.apply(this, arguments);
    }
    return TextWJ;
}(ContentBase));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Video = (function (_super) {
    __extends(Video, _super);
    function Video() {
        _super.apply(this, arguments);
    }
    return Video;
}(ContentBase));

var CropBoxCtrl = (function () {
    function CropBoxCtrl($scope) {
        this.$scope = $scope;
        this.thumbBoxCSS = {
            width: $scope.options.Width + "px",
            height: $scope.options.Height + "px",
            marginTop: (-$scope.options.Height / 2) + "px",
            marginLeft: (-$scope.options.Width / 2) + "px"
        };
        var borderEffectWidth = $scope.options.Width - 4;
        $("<style>.thumbBox:after, .thumbBox:before { width: " + borderEffectWidth + "px }</style>").appendTo("head");
        var borderEffectHeight = $scope.options.Height - 4;
        $("<style>.thumbBox .inner:after, .thumbBox .inner:before { height: " + borderEffectHeight + "px }</style>").appendTo("head");
    }
    CropBoxCtrl.prototype.Cancel = function () {
        this.$scope.onCancel();
    };
    CropBoxCtrl.prototype.Confirm = function () {
        this.$scope.onCrop({ data64: this.$scope.cropper.getDataURL() });
    };
    CropBoxCtrl.prototype.ZoomIn = function () {
        this.$scope.cropper.zoomIn();
    };
    CropBoxCtrl.prototype.ZoomOut = function () {
        this.$scope.cropper.zoomOut();
    };
    CropBoxCtrl.$inject = ["$scope"];
    return CropBoxCtrl;
}());
function CropBoxLink($scope, $elem) {
    $scope.cropper = ($elem.find(".imageBox")).cropbox({
        imageBox: ".imageBox",
        thumbBox: ".thumbBox",
        spinner: ".spinner",
        imgSrc: $scope.options.Url
    });
}
var CropService = (function () {
    function CropService($rootScope, $q, $compile) {
        this.$inject = ["$rootScope", "$q", "$compile"];
        this.$rootScope = $rootScope;
        this.$q = $q;
        this.$compile = $compile;
    }
    CropService.prototype.Crop = function (options) {
        var _this = this;
        this.defer = this.$q.defer();
        this.$scopeCropBox = this.$rootScope.$new(true);
        this.$scopeCropBox.options = options;
        this.$scopeCropBox.onCrop = (function (data64) { _this.OnCropConfirm(data64); });
        this.$scopeCropBox.onCancel = function () { _this.OnCropCancel(); };
        this.modalId = "modal" + new Date().getTime().toString();
        $("body").append("<div id='" + this.modalId + "'><cropbox options='options' on-crop='onCrop(data64);' on-cancel='onCancel();'></cropbox></div>");
        this.$compile($("#" + this.modalId))(this.$scopeCropBox);
        $("#" + this.modalId).lightbox_me({
            destroyOnClose: true,
            centered: true
        });
        return this.defer.promise;
    };
    CropService.prototype.OnCropConfirm = function (data64) {
        this.defer.resolve(data64);
        this.$Destroy();
    };
    CropService.prototype.OnCropCancel = function () {
        this.defer.reject();
        this.$Destroy();
    };
    CropService.prototype.$Destroy = function () {
        this.$scopeCropBox.$destroy();
        $("#" + this.modalId).trigger("close");
    };
    return CropService;
}());
angular.module("WebjatoServices")
    .service("CropSVC", CropService)
    .directive("cropbox", function () {
    return {
        replace: true,
        restrict: "E",
        templateUrl: "/cropbox.html",
        scope: {
            options: "=",
            onCrop: "&",
            onCancel: "&"
        },
        controller: CropBoxCtrl,
        controllerAs: 'cbCtrl',
        link: CropBoxLink
    };
});

angular.module("WebjatoDirectives").directive("wjHelp", function () {
    return {
        restrict: "E",
        replace: true,
        scope: true,
        template: "<div class='wj-help' ng-include='Url' onload='OnLoad();'></div>",
        controller: function ($rootScope, $scope, HelpIndexer) {
            $scope.Url = null;
            $scope.OnLoad = function () {
                $(".wj-help").lightbox_me({
                    destroyOnClose: true,
                    onClose: function () {
                        $scope.Url = null;
                        $scope.$apply();
                    }
                });
            };
            $rootScope.$on("HelpDisplay", function (e, id) {
                $scope.Url = HelpIndexer.GetUrl(id);
            });
            $rootScope.$on("HelpAutoDisplay", function (e, id) {
                if (new Help().Show(id)) {
                    $scope.Url = HelpIndexer.GetUrl(id);
                }
            });
            $rootScope.$on("HelpSetState", function (e, newState, reset) {
                new Help().SetEnabled(newState, reset);
            });
        }
    };
});

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-33818296-1', 'webjato.com.br');
ga('send', 'pageview');

var gaEvent = function(category_req, action_req, label_opt) {
	ga('send', {
		hitType: 'event',
		eventCategory: category_req,
		eventAction: action_req,
		eventLabel: label_opt
	});
}