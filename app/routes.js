App.config(function($routeProvider) {
	var slides = [
		"intro.html",
		"overview.html",
		"angular-intro.html",
		"types-of-directives.html",
		"hello-1.html",
		"test-hello-1.html",
		"apply-basics.html",
		"apply-when-to-use.html"
	];

	$routeProvider.when('/slides/:index', {
		templateUrl: function(params) {
			var slideName = slides[params.index];

			return slideName ? 'slides/' + slides[params.index] : 'slides/notfound.html';
		}
	});

	$routeProvider.otherwise({redirectTo: '/slides/0'});
});