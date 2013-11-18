App.directive('maxHeight', function() {
	return {
		link: function(scope, element) {
			element.height(window.innerHeight);

			$(window).on('resize', function() {
				element.height(window.innerHeight);
			});
		}
	};
});