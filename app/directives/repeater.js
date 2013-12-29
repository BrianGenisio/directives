App.directive('repeater', function() {
  return {
    restrict: 'AE',
    
    scope: {
      items: '=',
      itemClass: '&'
    },
    
    templateUrl: '/app/directives/repeater.html' 
  };
});