App.directive('fixedTree', function($timeout, $compile) {
  return {
    restrict: 'AE',
    scope: {
      nodes: '='
    },
    link: function(scope, element) {

    	$timeout(function() {
    		var containers = element.find('.subtree-container');

    		angular.forEach(containers, function(container) {
    			var containerElement = angular.element(container);

    			containerElement.append('<fixed-tree nodes="value"></tree>');

    			$compile(containerElement)(containerElement.scope());
    		});
    		
    	});

    },
    templateUrl: '/app/directives/fixed-tree.html'
  };
});