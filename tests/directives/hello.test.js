describe("hello directive", function() {
	var element, scope;


	beforeEach(module('SlidePlayer'));
	beforeEach(inject(function($rootScope, $compile) {
		var html = "<div hello></div>";
		element = angular.element(html);
		
		scope = $rootScope.$new();
		
		var link = $compile(element);
		link(scope);

		scope.$digest();
	}));
	
	it("says hello", function() {
		expect(element.text()).toBe("hello directive!");
	});
});