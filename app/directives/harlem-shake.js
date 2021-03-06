App.directive('shakeIt', function(hsConfig) {
  return {
    restrict: 'AE',
    transclude: true,
    
    link: function(scope, element) {
      element.click(function() {
        $(element).hshakeify(hsConfig);
      });
    },
    
    templateUrl: '/app/directives/harlem-shake.html'
  };
});