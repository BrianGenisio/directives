App.directive('bindFunc', function($parse) {
  return {
    restrict: 'AE',
    
    scope: {
//      action: '&'
    },  

    link: function(scope, element, attrs) {
      scope.hello = "Magic Missle!";

      scope.action = function(parameters) {
        return scope.$parent.$eval(attrs.action, parameters);
      };

    },

    template: '<button ng-click="action({message: hello})">' +
              '  Cast!' +
              '</button>'
  };
});