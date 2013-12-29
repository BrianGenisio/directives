App.directive('harlemShake', function(hsConfig) {
  return {
    restrict: 'AE',
    transclude: true,
    
    link: function(scope, element) {
      element.click(function() {
        scope.$apply(function() {
          $(element).hshakeify(hsConfig);
        });
      });
    },
    
    templateUrl: 
      '/app/directives/harlem-shake.html'
  };
});