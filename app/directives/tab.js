App.directive('tab', function() {
  return {
    require: '^tabs',
    restrict: 'AE',
    transclude: true,
    scope: {
      title: '@'
    },
    link: function(scope, el, attr, tabsCtrl) {
      tabsCtrl.register(scope);
    },
    replace: true,
    templateUrl: '/app/directives/tab.html' 
  };
});