App.directive('tabs', function() {
  return {
    restrict: 'AE',
    transclude: true,
    scope: {},
    controller: function($scope) {
      $scope.tabs = [];

      $scope.select = function(selected) {
        angular.forEach($scope.tabs, function(tab) {
          tab.selected = tab === selected;
        });
      }

      this.register = function(tab) {
      	$scope.tabs.push(tab);
      	$scope.select($scope.tabs[0]);
      }
    },
    templateUrl: 
      '/app/directives/tabs.html'
  };
});