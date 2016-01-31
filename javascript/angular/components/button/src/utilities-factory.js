angular.module('ButtonModule')
	.factory('Utilities', [function() {
		"use strict";
		
		return {
			forEach: function(object, callback, properties) {
				// Execute callback for provided properties of object
				angular.forEach(object, function(value, key) {
					if(	key.charAt(0) !== '$'
						&& angular.isDefined(value)
						&& (!properties || properties.indexOf(key) > -1)) {
							callback(value, key, object);
					}
				});
			}
		}
	}]);