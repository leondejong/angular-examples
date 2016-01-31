library angular2_dart_examples.main_component;

import 'dart:html';
import 'package:angular2/angular2.dart';
import 'package:angular2_dart_examples/components/button/button_component.dart';

@Component(
	selector: 'main',
	templateUrl: 'buttons-template.html',
	directives: const [ButtonComponent])
class MainComponent {
	Map<String, String> info;
	
	MainComponent() {
		// Example property
		info = {'key': 'value'};
	}
	
	// Example method
	dynamic procedure(dynamic data) {
		window.console.log(data);
	}
}