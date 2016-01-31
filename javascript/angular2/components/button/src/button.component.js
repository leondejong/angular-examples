(function(ButtonModule) {
	"use strict";
	ButtonModule.ButtonComponent = ng.core
		.Component({
			selector: 'ui-button',
			templateUrl: 'src/button-template.html',
			styleUrls: ['src/button-style.css'],
			encapsulation: ng.core.ViewEncapsulation.Native,
			providers: [ButtonModule.Utilities],
			directives: [ng.common.NgClass],
			inputs: [
				'name',
				'class',
				'disabled',
				'version',
				'color',
				'info'
			],
			outputs: [
				'procedure'
			],
			host: {
				'(click)': 'onClick($event)'
			}
		})
		.Class({
			constructor: [ButtonModule.Utilities, function (utilities) { 
				this.PREFIX = 'button--';
				this.utilities = utilities;
				this.classes = {'button': true};
				this.procedure = new ng.core.EventEmitter();
			}],
			ngOnInit() {
				var self = this;
				if(this.class) this.class.split(' ').forEach(this.addClass.bind(this));
				this.disabled = this.disabled === undefined ? false : true;
				this.utilities.forEach(this, function(value, key) {
					self.addClass(value, true);
				}, ['version', 'color']);
				// Bound properties
				console.log('version: ' + this.version + ', color: ' + this.color + ', info:', this.info);
				// Trigger procedure
				if(this.procedure) this.procedure.emit(null);
			},
			onClick(event) {
				this.procedure.emit(null);
			},
			addClass(name, prefix) {
				prefix = prefix || false;
				name = prefix ? this.PREFIX + name : name;
				if (!this.classes[name]) {
					this.classes[name] = true;
				}
			}
		});
})(window.ButtonModule || (window.ButtonModule = {}));