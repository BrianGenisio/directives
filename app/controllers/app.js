App.controller('app', function($scope, $location, $routeParams) {

	function currentPage() {
		return parseInt($routeParams.index);
	}

	function goPrevious() {
		var previousPage = currentPage() > 0 ? currentPage() - 1 : 0;

		$location.path('/slides/' + previousPage);
	}

	function goNext() {
		var nextPage = currentPage() + 1;

		$location.path('/slides/' + nextPage);
	}

	$scope.keyMap = {
		'37': goPrevious,
		'39': goNext
	}
});