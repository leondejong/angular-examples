(function(ButtonModule) {
	"use strict";
	ButtonModule.Utilities = ng.core
		.Injectable()
		.Class({
			constructor: function() {},
			forEach: function(object, callback, properties) {
				// Execute callback for provided properties of object
				for(var key in object) {
					if(	object.hasOwnProperty(key)
						&& (properties === null || properties.indexOf(key) !== -1)) {
						callback(object[key], key, object);
					}
				}
			}
		});
})(window.ButtonModule || (window.ButtonModule = {}));