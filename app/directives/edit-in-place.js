App.directive('editInPlace', function() {
  return {
  	restrict: 'EA',
    
  	scope: {
      ngModel: '='
  	},
    
  	controller: function($scope) {
      $scope.edit = function() {
        $scope.editing = true;
        $scope.tmpModel = $scope.ngModel;
      };
      
      $scope.save = function() {
        $scope.ngModel = $scope.tmpModel;
        $scope.editing = false;
      };
      
      $scope.cancel = function() {
        $scope.editing = false;
      };
  	},
  	templateUrl: '/app/directives/edit-in-place.html'
  };
});