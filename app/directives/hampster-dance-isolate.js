App.directive('hampsterDanceIsolate', function() {
  	return {
	  restrict: 'EA',
	  
	  scope: {},

	  controller: function($scope) {
	  	$scope.toggle = function() {
	  		$scope.animated = !$scope.animated;
	  	}
	  },

      templateUrl: '/app/directives/hampster-dance.html'
	}
});