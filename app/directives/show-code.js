App.directive('showCode', function($http) {
	return {
		scope: {
			url: '@showCode'
		},
		link: function(scope, element, attrs) {

			scope.$watch('url', function() {
				if(!scope.url) return;

				$http.get(scope.url)
					.success(function(code) {
						element.text(code);
					});
			})
		}
	};
});