App.directive('panel', function() {
  return {
    restrict: 'AE',
    transclude: true,
    scope: {
      heading: '@'
    },
    templateUrl: '/app/directives/panel.html'
  };
});