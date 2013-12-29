App.directive('tree', function(recursionHelper) {
  return {
    restrict: 'AE',
    scope: {
      nodes: '='
    },
    
    compile: function(tElement) {
      return recursionHelper.compile(tElement);
    },
    
    templateUrl: '/app/directives/tree.html'
  };
});