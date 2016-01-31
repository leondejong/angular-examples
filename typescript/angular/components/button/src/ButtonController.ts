/// <reference path="references.ts" />

module ButtonModule {
	"use strict";

	export class ButtonController implements IButton {
		public version: string;
		public color: string;
		public procedure: (data?: any) => void;
		public info: any;

		constructor() {
			// Bound properties
			console.log('version: ' + this.version + ', color: ' + this.color + ', info:', this.info);
			// Trigger procedure
			if (typeof this.procedure === 'function') this.procedure();
		}
	}
}