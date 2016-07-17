angular.module("ui.spinner", [])
  .directive("uiSpinner", [function () {
      return {
          restrict: "A",
          scope: {
              stateFlag: "=",
              stateValue: "=",
              onUpdate: "&"
          },
          link: function (scope, elm, attrs) {
              var UnwatchStateValue = null;
              var UnwatchStateFlag = null;
              var IsValueOk = function (value) {
                  return (value != undefined && value != null && String(value) != "" && !isNaN(value) && parseInt(value) >= parseInt(attrs.min) && parseInt(value) <= parseInt(attrs.max));
              };
              var OnStateValueChange = function (newValue) {
                  $(elm).spinner("value", newValue);
              };
              var OnStateFlagChange = function (newValue) {
                  $(elm).spinner(newValue ? "disable" : "enable");
              };
              var OnSpinnerCreated = function () {
                  if (IsValueOk(scope.stateValue)) {
                      OnStateValueChange(scope.stateValue);
                  }
                  if (angular.isDefined(scope.stateFlag)) {
                      OnStateFlagChange(scope.stateFlag);
                  }
                  UnwatchStateValue = scope.$watch("stateValue", OnStateValueChange);
                  UnwatchStateFlag = scope.$watch("stateFlag", OnStateFlagChange);
                  elm.bind("propertychange keyup input paste", function () {
                      OnChange(elm.val());
                  });
              };
              var OnChange = function (value) {
                  if (!IsValueOk(value)) return;
                  scope.stateValue = parseInt(value);
                  if (angular.isDefined(scope.onUpdate)) {
                      scope.onUpdate(parseInt(value));
                  }
                  if (!scope.$root.$$phase) {
                      scope.$apply();
                  }
              };
              setTimeout(function () {
                  var options = {
                      max: attrs.max,
                      min: attrs.min,
                      create: OnSpinnerCreated,
                      spin: function (event, ui) {
                          OnChange(ui.value);
                      }
                  };
                  $(elm).spinner(options);
              });
              scope.$on("$destroy", function () {
                  $(elm).spinner("destroy");
                  $(elm).unbind();
                  UnwatchStateFlag();
                  UnwatchStateValue();
              });
          }
      };
  }]);