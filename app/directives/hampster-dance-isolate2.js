App.directive('hampsterDanceIsolate2', function() {
  return {
    restrict: 'EA',
	  
    scope: {
      animated: '='
    },

    controller: function($scope) {
      $scope.toggle = function() {
        $scope.animated = !$scope.animated;
      }
    },

    templateUrl: '/app/directives/hampster-dance.html'
  };
});