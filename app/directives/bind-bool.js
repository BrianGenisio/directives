App.directive('bindBool', function($parse) {
  return {
    restrict: 'AE',
    
    scope: {
//      value: '='
    }, 
      
    link: function(scope, element, attrs) {
      
      scope.$parent.$watch(attrs.value, function(val) {
        scope.value = val;
      });
      
      scope.$watch('value', function() {
        $parse(attrs.value).assign(scope.$parent, scope.value);
      });
      
    },
    
    template: '<span ng-click="value = !value">' +
              '  Value: {{value}}' +
              '</span>'
    
  };
});