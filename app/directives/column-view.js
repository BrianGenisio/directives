App.directive('columnView', function() {
  return {
    restrict: 'AE',
    transclude: true,
    scope: {
      heading: '@'
    },
    controller: function($scope) {
      var columns = [];

      this.register = function(column) {
        columns.push(column);
        this.focus(columns[0]);
      };

      this.focus = function(focusedColumn) {
        if(!focusedColumn) return;

        var numberOfColumns = columns.length;
        angular.forEach(columns, function(column, i) {
          column.width = 2;
        });

        focusedColumn.width = 12 - ((numberOfColumns - 1) * 2);
      };
    },
    templateUrl: '/app/directives/column-view.html'
  };
});

App.directive('column', function() {
  return {
    restrict: 'AE',
    transclude: true,
    require: '^columnView',
    scope: {},
    controller: function($scope) {
      $scope.getColumn = function() {
        return 'col-md-' + $scope.width;
      };
    },
    link: function(scope, element, attrs, viewCtrl) {
      viewCtrl.register(scope);

      element.on('click', function() {
        scope.$apply(function() {
          viewCtrl.focus(scope);
        });
      });
    },
    template: '<div class="column" ng-class="getColumn()" ng-transclude></div>'
  }
});