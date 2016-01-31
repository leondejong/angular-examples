/// <reference path="references.ts" />

module ButtonModule {
	"use strict";

	export class Utilities {
		public static forEach(
			object: Object,
			callback: (value: any, key: string, object: Object) => void,
			properties: Array<string> = null
		): void {
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
}