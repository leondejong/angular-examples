part of angular_dart_examples;

@Component(
	selector: 'main',
	templateUrl: 'buttons-template.html')
class MainComponent {
	Map<String, String> info;
	
	MainComponent() {
		// Example property
		info = {'key': 'value'};
	}
	
	// Example method
	dynamic procedure(Event event) {
		window.console.log(event);
	}
}