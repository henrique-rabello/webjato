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