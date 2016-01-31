import 'dart:async';
import 'dart:html';

import 'package:unittest/unittest.dart' hide expect;
import 'package:guinness/guinness.dart';

import 'package:angular/angular.dart';
import 'package:angular/mock/module.dart';

import 'package:angular_dart_examples/components/button/button_module.dart';

loadTemplates(List<String> templates) {
	return () {
		updateCache(template, response) => inject((TemplateCache cache) => cache.put(template, response));

		final futures = templates.map((template) => HttpRequest.request('../lib/$template', method: 'GET')
			.then((_) => updateCache('../lib/$template', new HttpResponse(200, _.response))));

		return Future.wait(futures);
	};
}

void main(){
	describe('ButtonComponent', () {
		beforeEach(setUpInjector);
		afterEach(tearDownInjector);

		beforeEach(module((Module module) => module..bind(ButtonComponent)));
		beforeEach(loadTemplates(['buttons-template.html', 'button-template.html']));

		it('should render', () {
			async(inject((TestBed testBed, Scope scope) {
				scope.context['info'] = {'key': 'value'};
				scope.context['procedure'] = (Event event) => window.console.log(event);

				final HtmlElement element = testBed.compile(
						'<ui-button name="button" version="outline" color="red"'
						+ 'procedure="procedure" info="info" class="custom">Button</ui-button>'
						, scope: scope);

				microLeap();
				testBed.rootScope.apply();

				final ShadowRoot root = element.shadowRoot;
				final button = root.querySelector('button');

				expect(button.text).toEqual('Button');

				expect(button.getAttribute('name')).toEqual('button');

				expect(button.getAttribute('class')).toContain('custom');
				expect(button.getAttribute('class')).toContain('button');
				expect(button.getAttribute('class')).toContain('button--outline');
				expect(button.getAttribute('class')).toContain('button--red');
			}));	
		});
	});
}