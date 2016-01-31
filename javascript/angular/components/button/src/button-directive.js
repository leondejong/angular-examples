angular.module('ButtonModule')
	.directive('uiButton', ['Utilities', function(Utilities) {
		"use strict";
		
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'src/button-template.html',
			controller: 'ButtonController',
			controllerAs: 'button',
			scope: {
				version: '@',
				color: '@',
				procedure: '&',
				info: '='
			},
			bindToController: {
				version: '@',
				color: '@',
				procedure: '&',
				info: '='
			},
			link: function($scope, $element, $attributes, $controller, $transclude){
				var prefix = 'button--';

				$scope.classes = {'button': true};

				// Apply atrributes
				Utilities.forEach($attributes, function(value, key) {
					$element.children().attr(key, value ? value : key);
				}, ['id', 'name', 'class', 'type', 'value', 'disabled']);

				// Apply classes
				Utilities.forEach($attributes, function(value, key) {
					$scope.classes[prefix + value] = true;
				}, ['version', 'color']);

				// Apply events
				// Utilities.forEach($attributes, function(value, key) {
				// 	$element.on(key, $scope[key]);
				// }, ['click']);
				
				$element.on('click', $scope.procedure);
			}
		};
	}]);