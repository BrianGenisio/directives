App.directive('binding-features', function() {
  return {
  	restrict: 'AE',
  	scope: {
  		optional: '=?',
  		aliased: '=nsSomething',
  		optionalAliased: '=?nsNotThere'
  	},
  	template: 
  	  '<div>' +
      ' {{optional}}' +
      ' {{aliased}}' +
      ' {{optionalAliased}}' +
      '</div>'
  };
});