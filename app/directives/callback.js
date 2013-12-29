App.directive('callback', function(rickAstley) {
  return {
    restrict: 'AE',
    
    scope: {
      callback: '&'
    },
    
    controller: function($scope) {
      var messages = rickAstley.get();

      $scope.freeiPad = function() {
        $scope.callback({
          message: messages.next()
        });
      };

    },
    template: '<button ng-click="freeiPad()">' +
              '  Free iPad!' +
              '</button>'
  };
});