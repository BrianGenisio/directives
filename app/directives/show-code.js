App.directive('showCode', function($http, $timeout) {
  return {
    scope: {
      url: '@showCode',
      mode: '@mode'
    },
    link: function(scope, element, attrs) {
      
      scope.save = function() {
        $http.post("/save", {
          file: scope.url,
          content: scope.tmpCode
        }).success(function() {
          scope.code = tmpCode;
        });
      };
      
      scope.cancel = function() {
        scope.tmpCode = scope.code;
      };
      
      scope.$watch('url', function() {
        var mode = scope.mode ? 'text/' + scope.mode : 'text/html';
        
        scope.editorOptions = {
          lineNumbers: true,
          lineWrapping: false,
          matchBrackets: true,
          autoCloseBrackets: true,
          mode: mode,
          theme: 'eclipse'
        }
        
        if(!scope.url) return;
        
        $http.get(scope.url)
        .success(function(code) {
          scope.code = code;
          scope.tmpCode = code;
        });
      });
    },
    template: '<div class="show-code">' +
    '  <textarea ng-if="code" ui-codemirror="editorOptions" ng-model="$parent.tmpCode"></textarea>' +
    '  <div ng-show="code != tmpCode" class="controls">' +
    '    <button ng-click="save()" class="btn btn-success ok"><i class="glyphicon glyphicon-ok"></i></button>' + 
    '    <button ng-click="cancel()" class="btn btn-danger cancel" ng-disabled="code == tmpCode">'+
    '      <i class="glyphicon glyphicon-ban-circle"></i>' +
    '    </button>' +
    '  </div>' +
    '</div>'
  };
});