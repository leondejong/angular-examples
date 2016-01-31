library angular2_dart_examples.button_component;

import 'dart:html';
import 'package:angular2/angular2.dart';
import 'package:angular2_dart_examples/components/button/utilities_service.dart';

@Component(
	selector: 'ui-button',
	templateUrl: 'button-template.html',
	styleUrls: const ['button-style.css'],
	encapsulation: ViewEncapsulation.Native,
	providers: const [Utilities],
	directives: const [NgClass])
class ButtonComponent implements OnInit {
	static const String PREFIX = 'button--';

	Map<String, bool> classes = {};

	HtmlElement element;

	@Input() String name = 'button';
	@Input('class') String custom;
	@Input() bool disabled;
	
	@Input() String version;
	@Input() String color;
	@Input() dynamic info;

	@Output() EventEmitter<dynamic> procedure = new EventEmitter();

	ButtonComponent(ElementRef reference) {
		this.element = reference.nativeElement;
		window.console.log(this.element.attributes);
		classes['button'] = true;
	}

	void ngOnInit() {
		if(custom != null) custom.split(' ').forEach(addClass);
		
		disabled = disabled == null ? false : true;
		
		Utilities.forEach(
			element.attributes,
			(dynamic value, [String key, Map<String, dynamic> object])
				=> addClass(value, true),
			['version', 'color']
		);
		
		// Bound properties
		print('version: ${version}, color: ${color}, info:');
		window.console.log(this.info);
		
		// Trigger procedure
		if(procedure != null) procedure.emit(null);
	}

	@HostListener('click', const ['event'])
	void onClick([Event event]) {
		procedure.emit(null);
	}

	// Method to avoid not generated setter bug
	Event event() {
		return new Event('click');
	}

	void addClass(String name, [bool prefix = false]) {
		name = prefix ? PREFIX + name : name;
		if (!classes.containsKey(name)) {
			classes[name] = true;
		}
	}
}