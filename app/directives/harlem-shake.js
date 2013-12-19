App.directive('harlemShake', function($timeout) {
  return {
    restrict: 'AE',
    transclude: true,
    link: function(scope, element) {
      $timeout(function() {
        $(element).hshakeify({
          css_file: '/bower_components/jquery-harlem-shake-plugin/jquery-harlem-shake-1.0.css',
          audio_file: '/bower_components/jquery-harlem-shake-plugin/harlemshake'
        });
      }, 100);
    },
    templateUrl: '/app/directives/harlem-shake.html'
  };
});