App.directive('hampsterDance', function() {
  	return {
	  restrict: 'EA',
	  
	  controller: function($scope) {
	  	$scope.toggle = function() {
	  		$scope.animated = !$scope.animated;
	  	}
	  },

      templateUrl: '/app/directives/hampster-dance.html'
	}
});