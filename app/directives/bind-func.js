App.directive('bindFunc', function($parse) {
  return {
    restrict: 'AE',
    
    scope: {
//      action: '&'
    },  

    link: function(scope, element, attrs) {
      scope.hello = "Greetings!";

      scope.action = function(parameters) {
        return scope.$parent.$eval(attrs.action, parameters);
      };

    },

    template: '<button ng-click="action({message: hello})">' +
              '  Call Back!' +
              '</button>'
  };
});