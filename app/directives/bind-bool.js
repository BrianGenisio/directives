App.directive('bindBool', function($parse) {
  return {
    restrict: 'AE',
    
    scope: {
//      value: '='
    }, 
    
    template: '<span ng-click="toggle()">' +
              '  Value: {{value}}' +
              '</span>',
      
    link: function(scope, element, attrs) {
      
      scope.$parent.$watch(attrs.value, function(val) {
        scope.value = val;
      });
      
      scope.$watch('value', function() {
        $parse(attrs.value).assign(scope.$parent, scope.value);
      });
      
      scope.toggle = function() {
        scope.value = !scope.value;
      };
    }
  };
});