App.directive('bindFunc', function($parse) {
  return {
    restrict: 'AE',
    
    scope: {
//      action: '&'
    },  

    link: function(scope, element, attrs) {
      
      scope.action = function(parameters) {
        return scope.$parent.$eval(attrs.action, parameters);
      };

    },

    template: '<button ng-click="action({message: \'Magic Missle\'})">' +
              '  Cast!' +
              '</button>'
  };
});