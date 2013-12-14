App.directive('clickCount', function() {
  return {
    restrict: 'AE',
    scope: {
    	count: '='
    },
    template: 
      '<button ng-click="count = count + 1">' +
      '  +1' +
      '</button>'
  }
});