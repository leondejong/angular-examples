part of angular_dart_examples;

@Component(
	selector: 'ui-button',
	templateUrl: 'button-template.html',
	cssUrl: 'button-style.css')
class ButtonComponent implements AttachAware, ShadowRootAware {
	static const String PREFIX = 'button--';
	Map<String, bool> classes = {};
	Map<String, String> attributes;
	Element element;
	Element button;

	@NgAttr('class')
	String custom;

	@NgAttr('version')
	String version;

	@NgAttr('color')
	String color;

	@NgOneWay('procedure')
	EventListener procedure;

	@NgTwoWay('info')
	Map<String, String> info;

	ButtonComponent(Element element) {
		this.element = element;
		attributes = element.attributes;
		classes['button'] = true;
	}

	void attach() {
		// Check procedure
		if (procedure != null) procedure(new Event('data'));
		// Check info
		if (info != null) print(info);

		custom.split(' ').forEach(addClass);
		if (version != null) addClass(version, true);
		if (color != null) addClass(color, true);
	}

	void onShadowRoot(ShadowRoot shadowRoot) {
		button = shadowRoot.querySelector('button');
		if (procedure != null) shadowRoot.addEventListener('click', procedure);
		Utilities.forEach(attributes, addAttribute, ['id', 'name', 'class', 'type', 'value', 'disabled']);
	}

	void addAttribute(String value, String key, Map object /* redundant object to avoid bug in js output */) {
		if (button is Element) {
			button.setAttribute(key, value == null ? key : value);
		}
	}

	void addClass(String name, [bool prefix = false]) {
		name = prefix ? PREFIX + name : name;
		if (!classes.containsKey(name)) {
			classes[name] = true;
		}
	}
}