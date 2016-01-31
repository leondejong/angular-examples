import 'package:angular/application_factory.dart';
import 'package:angular_dart_examples/components/button/button_module.dart';

void main() {
	applicationFactory().addModule(new ButtonModule()).run();
}