describe('button directive', function() {

	beforeEach(module('ButtonModule'));

	// Define
	var compile,
		httpBackend,
		rootScope,
		scope,
		elementScope,
		controller,
		buttonController,
		template,
		component,
		element,
		button;

	// Assign
	beforeEach(inject(function($compile, $rootScope, $controller, $httpBackend) {
		compile = $compile;
		rootScope = $rootScope;
		controller = $controller;
		httpBackend = $httpBackend;
		scope = rootScope.$new();
		template =
			'<button ng-class="classes">'
				+ '<span ng-transclude></span>'
			+ '</button>';
		component =
			'<ui-button'
				+ ' name="button"'
				+ ' version="outline"'
				+ ' color="red"'
				+ ' procedure="click(\'click!\')"'
				+ ' info="object"'
				+ ' class="custom">'
						+ 'Button'
			+ '</ui-button>';
	}));

	// Initialize
	beforeEach(function() {
		scope.version = 'outline';
		scope.color = 'red';
		scope.object = {key: 'value'};
		scope.click = jasmine.createSpy('click');

		// buttonController = controller('ButtonController');
		httpBackend.expectGET('src/button-template.html').respond(template);
		element = compile(component)(scope);

		scope.$digest();
		httpBackend.flush();

		elementScope = element.isolateScope();
		button = element.find('button');
	});

	// Cleanup
	afterEach(function() {
		compile = null;
		rootScope = null;
		controller = null;
		buttonController = null;
		httpBackend = null;
		scope = null;
		elementScope = null;
		template = null;
		component = null;
		element = null;
		button = null;
	});

	// Scope
	it('should populate the scope', function() {
		expect(elementScope.version).toEqual(scope.version);
		expect(elementScope.color).toEqual(scope.color);
		expect(elementScope.info).toEqual(scope.object);
		expect(typeof(elementScope.procedure)).toEqual('function');

		elementScope.procedure();
		expect(scope.click).toHaveBeenCalledWith('click!');
	});

	// Controller
	it('should bind properties to controller', function() {
		expect(elementScope.button.version).toEqual(scope.version);
		expect(elementScope.button.color).toEqual(scope.color);
		expect(elementScope.button.info).toEqual(scope.object);
		expect(typeof(elementScope.button.procedure)).toEqual('function');
	});

	// Element
	it('should render html', function() {
		expect(button.text()).toEqual('Button');
		expect(button.attr('name')).toEqual('button');

		expect(button.attr('class')).toContain('custom');
		expect(button.attr('class')).toContain('button');
		expect(button.attr('class')).toContain('button--outline');
		expect(button.attr('class')).toContain('button--red');
	});

	// Events
	it('should handle events', function() {
		element.triggerHandler('click');
		expect(scope.click).toHaveBeenCalledWith('click!');
	});
});