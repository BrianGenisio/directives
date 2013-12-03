App.directive('whatDoesTheFoxSay', function() {
	return {
		link: function(scope, element, attrs) {
			scope.message = "What does the fox say?";

			element.click(function() {
				scope.$apply(function() {
					scope.message = "Wa-pa-pa-pa-pa-pa-pow!";
				});
			});
		},

		template: '<span>{{message}}</span>'
	}
});