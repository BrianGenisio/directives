App.config(function($routeProvider) {
	var slides = [
		"intro.html",
		"next.html"
	];

	slides.forEach(function(slide, i) {
		$routeProvider.when('/slides/' + i, {
			templateUrl: 'slides/' + slide
		});
	});

	$routeProvider.otherwise({redirectTo: '/slides/0'});
});