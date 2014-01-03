// Mark Lagendijk
// http://stackoverflow.com/questions/14430655/recursion-in-angular-directives
App.factory('recursionHelper', function($compile){
  return {
    compile: function(templateElement){
      
      var contents = templateElement.contents().remove();
      var compiledContents;
      
      return function(scope, element){
        if(!compiledContents){
          compiledContents = $compile(contents);
        }
        
        compiledContents(scope, function(clone){
          element.append(clone);
        });
      };
    }
  };
});