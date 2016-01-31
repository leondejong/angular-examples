import {
	describe,
	it,
	inject,
	injectAsync,
	expect,
	beforeEachProviders,
	beforeEach,
	afterEach,
	TestComponentBuilder
} from 'angular2/testing';

import {Component} from 'angular2/core';
import {MainComponent} from '../src/main.component';

// export function main() {
	describe('button component', () => {
		beforeEachProviders(() => [MainComponent]);
		
		it('should render', injectAsync([TestComponentBuilder], (testComponentBuilder) => {
			return testComponentBuilder.createAsync(MainComponent).then((fixture) => {
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
				}
			);
		}));
	});
// }