App.directive('callback', function(rickAstley) {
  return {
    restrict: 'AE',
    
    scope: {
      callback: '&'
    },
    
    controller: function($scope) {
      var messages = rickAstley.get();

      $scope.checkThisOut = function() {
        $scope.callback({
          message: messages.next()
        });
      };

    },
    template: '<button ng-click="checkThisOut()">' +
              '  Check it out!' +
              '</button>'
  };
});