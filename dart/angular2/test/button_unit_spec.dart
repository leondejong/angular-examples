@TestOn('browser')

import 'package:test/test.dart';
import 'package:angular2_testing/angular2_testing.dart';
import 'package:angular2_dart_examples/components/button/main_component.dart';

void main() {
	initAngularTests();

	setUpProviders(() => [MainComponent]);

	ngTest('button component', (TestComponentBuilder testComponentBuilder) {
		testComponentBuilder.createAsync(MainComponent).then((fixture) {
			fixture.detectChanges();

			var compiled = fixture.debugElement.nativeElement;
			var root = compiled.querySelector('ui-button').shadowRoot;
			var button = root.querySelector('button');

			expect(button.innerHtml.replaceAll(new RegExp(r'^\s+|\s+$'), ''), contains('Button'));

			expect(button.getAttribute('name'), equals('button'));
			expect(button.getAttribute('class'), contains('custom'));
			expect(button.getAttribute('class'), contains('button'));
			expect(button.getAttribute('class'), contains('button--outline'));
			expect(button.getAttribute('class'), contains('button--red'));
		});
	});
}