describe("hello directive", function() {
  	var element, scope;
  
  	function bootstrap($rootScope, $compile) {
      var html = "<div hello></div>";
		element = angular.element(html);
		
		scope = $rootScope.$new();
        scope.foo = 'bar';
		
		var link = $compile(element);
		link(scope);

		scope.$digest();
    }
  
  
  
  
	

	beforeEach(module('SlidePlayer'));
	beforeEach(inject(function($rootScope, $compile) {
		bootstrap($rootScope, $compile);
	}));
	
	it("says hello", function() {
		expect(element.text()).toBe("hello directive!");
	});
});