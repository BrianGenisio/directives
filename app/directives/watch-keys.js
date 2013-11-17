App.directive('watchKeys', function() {
	
	return {
		scope: {
			keyMap: '=watchKeys'
		},
		link: function(scope, element, attrs) {
			element.bind('keydown', function(e) {
				if(scope.keyMap[e.keyCode]) {
					scope.$apply(function() {
						scope.keyMap[e.keyCode]();
					})	
				}
			});
		}
	};
});