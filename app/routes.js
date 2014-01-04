App.config(function($routeProvider) {
	var slides = [
		"intro.html",
		"angular-intro.html",
		"what-is-a-directive.html",
		"types-of-directives.html",
		"start-simple.html",
		"hello-1.html",
		"hello-2.html",
		"element-directives-ie8.html",
		"templates-can-contain-directives.html",
		"templates-can-be-separate.html",
		"behavior.html",	
		"directives-can-have-behavior.html",
		"directives-can-use-your-scope.html",
		"sharing-directive-scope-might-not-be-good.html",
		"isolate-scope-intro.html",
		"isolate-scope-intro2.html",
		"isolate-scope-bindings.html",
		"isolate-scope-string-binding.html",
		"isolate-scope-string-binding-interpolate.html",
		"isolate-scope-string-binding-mechanics.html",
		"isolate-scope-object-binding.html",
		"isolate-scope-object-binding2.html",
		"isolate-scope-object-binding-mechanics.html",
		"isolate-scope-function-binding.html",
		//"isolate-scope-function-binding2.html",
		"isolate-scope-function-binding-mechanics.html",
		"isolate-scope-extras.html",
		"lifecycle.html",
		"compile-vs-link.html",
		"test-hello-1.html",
		"apply-basics.html",
		"apply-when-to-use.html",
		"recursion.html",
		"bad-tree.html",
		//"recursive.html",
		"general-recursion.html",
		"transclusion.html",
		"harlem-shake.html",
		"dependencies.html",
		"dependent-directives.html",
		"tabs-without-directives.html",
		"tabs.html",
		//"show-show-code.html",	
		"thank-you.html"
	];

	$routeProvider.when('/slides/:index', {
		templateUrl: function(params) {
			var slideName = slides[params.index];

			return slideName ? 'slides/' + slides[params.index] : 'slides/notfound.html';
		}
	});

	$routeProvider.otherwise({redirectTo: '/slides/0'});
});