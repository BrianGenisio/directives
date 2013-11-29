App.controller('app', function($scope, $location, $routeParams) {

	function currentPage() {
		return parseInt($routeParams.index);
	}

	$scope.goPrevious = function(){
		var previousPage = currentPage() > 0 ? currentPage() - 1 : 0;

		$location.path('/slides/' + previousPage);
	}

	$scope.goNext = function(){
		var nextPage = currentPage() + 1;

		$location.path('/slides/' + nextPage);
	}

	$scope.keyMap = {
		'37': $scope.goPrevious,
		'39': $scope.goNext
	};

});