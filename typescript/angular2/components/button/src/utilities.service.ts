import {Injectable} from 'angular2/core';

"use strict";

@Injectable()
export class Utilities {
	public static forEach(
		object: Object,
		callback: (value: any, key: string, object: Object) => void,
		properties: Array<string> = null): void {
		// Execute callback for provided properties of object
		for(var key in object) {
			if(	object.hasOwnProperty(key)
				&& (properties === null || properties.indexOf(key) !== -1)) {
				callback(object[key], key, object);
			}
		}
	}
}