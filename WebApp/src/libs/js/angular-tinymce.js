angular.module("ui.tinymce", [])
  .directive("uiTinymce", function () {
      var generatedIds = 0;
      return {
          priority: 10,
          require: "ngModel",
          link: function (scope, elm, attrs, ngModel) {
              var tinyInstance;
              var updateView = function () {
                    ngModel.$setViewValue(elm.html());
                    if (!scope.$root.$$phase) {
                        scope.$apply();
                    }
                    if (scope.OnTextChange) {
                        scope.OnTextChange(ngModel.$viewValue);
                    }
                };
              if (!attrs.id) {
                  attrs.$set("id", "uiTinymce" + generatedIds++);
              }
              var options = {
                  setup: function (ed) {
                      var args;
                      ed.on("init", function (args) {
                          ngModel.$render();
                          ngModel.$setPristine();
                      });
                      ed.on("ExecCommand", function (e) {
                          ed.save();
                          updateView();
                      });
                      ed.on("Change", function (e) {
                          ed.save();
                          updateView();
                      });
                      ed.on("KeyUp", function (e) {
                          ed.save();
                          updateView();
                      });
                      ed.on("SetContent", function (e) {
                          if (!e.initial && ngModel.$viewValue !== e.content) {
                              ed.save();
                              updateView();
                          }
                      });
                      ed.on("blur", function (e) {
                          elm.blur();
                      });
                      ed.on("ObjectResized", function (e) {
                          ed.save();
                          updateView();
                      });
                  },
                  mode: "exact",
                  elements: attrs.id
              };
              angular.extend(options, scope.$eval(attrs.config));
              setTimeout(function () {
                  tinymce.init(options);
              });
              ngModel.$render = function () {
                  if (!tinyInstance) {
                      tinyInstance = tinymce.get(attrs.id);
                  }
                  if (tinyInstance) {
                      tinyInstance.setContent(ngModel.$viewValue || "");
                  }
              };
              scope.$on("$destroy", function () {
                  if (!tinyInstance) { tinyInstance = tinymce.get(attrs.id); }
                  if (tinyInstance) {
                      tinyInstance.remove();
                      tinyInstance = null;
                  }
              });
          }
      };
  });