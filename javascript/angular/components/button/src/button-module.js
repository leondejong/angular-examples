angular.module('ButtonModule', [])
	.controller('MainController', [function() {
		"use strict";
		
		// Example data
		this.info = {key: 'value'};
		// Example function
		this.procedure = function(data) {
			console.log(data ? data : 'data');
		};
	}]);