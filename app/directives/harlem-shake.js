App.directive('harlemShake', function($timeout, hsConfig) {
  return {
    restrict: 'AE',
    transclude: true,
    link: function(scope, element) {
      $timeout(function() {
        $(element).hshakeify(hsConfig);
      }, 100);
    },
    templateUrl: 
      '/app/directives/harlem-shake.html'
  };
});