ng.testing.describe('button component', function() {
	//ng.testing.beforeEachProviders(ng.testing.TestComponentBuilder);
	// ng.testing.it('should render', function(){
	// 	console.log(ButtonModule.MainComponent);
	// 	console.log(ng.testing.TestComponentBuilder);
	// });
	ng.testing.it('should render', 
		ng.testing.injectAsync([ng.testing.TestComponentBuilder], function(testComponentBuilder) {
			ng.testing.TestComponentBuilder
				.createAsync(ButtonModule.MainComponent)
				.then(function(fixture) {
					fixture.detectChanges();
				
					var compiled = fixture.debugElement.nativeElement;
					var root = compiled.querySelector('ui-button').shadowRoot;
					var button = root.querySelector('button');
					
					expect(button.innerHTML.replace(/^\s+|\s+$/g, '')).toEqual('Button');
					
					expect(button.getAttribute('name')).toEqual('button');
					expect(button.getAttribute('class')).toContain('custom');
					expect(button.getAttribute('class')).toContain('button');
					expect(button.getAttribute('class')).toContain('button--outline');
					expect(button.getAttribute('class')).toContain('button--red');
					
					button.click();
				});
		})
	);
});