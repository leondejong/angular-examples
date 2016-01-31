angular.module('ButtonModule')
	.controller('ButtonController', [function() {
		"use strict";
		
		// Bound properties
		console.log('version: ' + this.version + ', color: ' + this.color + ', info:', this.info);
		// Trigger procedure
		if(typeof this.procedure === 'function') this.procedure();
	}]);