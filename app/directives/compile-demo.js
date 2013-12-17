App.directive('compileDemo', function() {
  return {
  	restrict: 'AE',
  	
    compile: function(templateElement, attrs) {
      // Transform the template Element
      // Once per invocation

      return function link(scope, element, attrs) {
      	// Watch the scope and attrs
      	// modify the instance element
      	// runtime behavior
      	// n-times per invocation
      };
    }
  };
});