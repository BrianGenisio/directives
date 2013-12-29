App.directive('interesting', function() {
  return {
    restrict: 'AE',
    
    scope: {
      'header': '@',
      'footer': '@'
    },
    
    templateUrl: '/app/directives/interesting.html'
  };
});