App.directive('badTree', function() {
  return {
    restrict: 'AE',
    scope: {
      nodes: '='
    },
    templateUrl: '/app/directives/bad-tree.html'
  };
});