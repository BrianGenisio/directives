App.directive('bindString', function() {
  return {
    restrict: 'AE',
    
    scope: {
//      friend: '@'
    },  
      
    link: function(scope, element, attrs) {
      
      attrs.$observe('friend', function(val) {
        scope.friend = val;
      });
      
    },
    
    template: '<div>hello {{friend}}!</div>',
  };
});