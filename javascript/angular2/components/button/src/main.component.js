(function(ButtonModule) {
	"use strict";
	ButtonModule.MainComponent = ng.core
		.Component({
			selector: 'main',
			templateUrl: 'src/buttons-template.html',
			directives: [ButtonModule.ButtonComponent]
		})
		.Class({
			constructor: function() {
				this.info = {value: 'key'};
			},
			procedure: function(data) {
				console.log(data);
			}
		});
})(window.ButtonModule || (window.ButtonModule = {}));