App.config(function($routeProvider) {
	var slides = [
		"intro.html",
		"next.html"
	];

	$routeProvider.when('/slides/:index', {
		templateUrl: function(params) {
			var index = params.index >= slides.length ? slides.length - 1 : params.index;
			index = index < 0 ? 0 : index;

			return 'slides/' + slides[index];
		}
	});

	$routeProvider.otherwise({redirectTo: '/slides/0'});
});