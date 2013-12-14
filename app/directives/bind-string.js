App.directive('bindString', function() {
  return {
    restrict: 'AE',
    scope: {
//      friend: '@'
    },  
    template: '<div>hello {{friend}}!</div>',
      
    link: function(scope, element, attrs) {
      
      attrs.$observe('friend', function(val) {
        scope.friend = val;
      });
      
    }
  };
});