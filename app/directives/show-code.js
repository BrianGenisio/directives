App.directive('showCode', function($http, $timeout) {
	return {
		scope: {
			url: '@showCode',
			mode: '@mode'
		},
		link: function(scope, element, attrs) {

			scope.$watch('url', function() {
				var mode = scope.mode ? 'text/' + scope.mode : 'text/html';

				scope.editorOptions = {
					lineNumbers: true,
					mode: mode,
					theme: '3024-night'
				}

				if(!scope.url) return;

				$http.get(scope.url)
					.success(function(code) {
						scope.code = code;
					});
			})
		},
		template: '<textarea ng-if="code" ui-codemirror="editorOptions" ng-model="code"></textarea>'
	};
});