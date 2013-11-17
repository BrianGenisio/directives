App.directive('showCode', function($http, $timeout) {
	return {
		scope: {
			url: '@showCode',
			mode: '@mode'
		},
		link: function(scope, element, attrs) {

			scope.save = function() {
				$http.post("/save", {
					file: scope.url,
					content: scope.tmpCode
				}).success(function() {
					scope.code = tmpCode;
				});
			};

			scope.cancel = function() {
				scope.tmpCode = scope.code;
			};

			scope.$watch('url', function() {
				var mode = scope.mode ? 'text/' + scope.mode : 'text/html';

				scope.editorOptions = {
					lineNumbers: true,
					matchBrackets: true,
					autoCloseBrackets: true,
					mode: mode,
					theme: '3024-night'
				}

				if(!scope.url) return;

				$http.get(scope.url)
					.success(function(code) {
						scope.code = code;
						scope.tmpCode = code;
					});
			});
		},
		template: '<textarea ng-if="code" ui-codemirror="editorOptions" ng-model="$parent.tmpCode"></textarea>' +
		          '<button ng-click="save()" class="btn btn-default">Save</button>' + 
		          '<button ng-click="cancel()" class="btn btn-default" ng-disabled="code == tmpCode">Cancel</button>'
	};
});