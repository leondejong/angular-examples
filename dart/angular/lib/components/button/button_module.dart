library angular_dart_examples;

import 'dart:html';
import 'package:angular/angular.dart';

part 'utilities_service.dart';
part 'main_component.dart';
part 'button_component.dart';

class ButtonModule extends Module {
	ButtonModule() {
		bind(MainComponent);
		bind(ButtonComponent);
	}
}