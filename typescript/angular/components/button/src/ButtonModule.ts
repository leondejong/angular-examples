/// <reference path="references.ts" />

module ButtonModule {
	"use strict";

	class MainController {
		public info: Object;
		public procedure: (data: any) => void;

		constructor() {
			// Example data
			this.info = {key: 'value'};
			// Example function
			this.procedure = function(data) {
				console.log(data ? data : 'data');
			};
		}
	}

	angular
		.module('ButtonModule', [])
		.controller('MainController', MainController)
		.controller('ButtonController', ButtonController)
		.directive('uiButton', ButtonDirective.factory());
}