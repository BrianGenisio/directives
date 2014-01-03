App.directive('lifecycleDemo', function() {
  return {
  	restrict: 'AE',
  	
    controller: function($scope, $http) {
      // runtime scope behavior
      // runtime inter-directive behavior
    },
    
    compile: function(templateElement, attrs) {
      // Transform the template Element
      // Once per invocation

      return function link(scope, element, attrs) {
      	// Watch the scope and attrs
      	// modify the instance element
      	// runtime behavior
      	// n-times per invocation
      };
    },
    
    template: '<div class="awesome">Something Awesome</div>'
  };
});