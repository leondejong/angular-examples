/// <reference path="references.ts" />

module ButtonModule {
	"use strict";

	interface IButtonScope extends ng.IScope, IButton { };

	export class ButtonDirective implements ng.IDirective {
		public restrict: string = 'E';
		public transclude: boolean = true;
		public templateUrl: string = 'src/button-template.html';
		public controller: string = 'ButtonController';
		public controllerAs: string = 'button';

		public scope: any = {
			version: '@',
			color: '@',
			procedure: '&',
			info: '='
		};

		public bindToController: boolean | Object = {
			version: '@',
			color: '@',
			procedure: '&',
			info: '='
		};

		public link: ng.IDirectiveLinkFn = (
			scope: IButtonScope,
			element: ng.IAugmentedJQuery,
			attributes: ng.IAttributes,
			controller: Object,
			transclude: ng.ITranscludeFunction
		): void => {
			var prefix = 'button--';

			scope.classes = {'button': true};

			// Apply atrributes
			Utilities.forEach(attributes, function(value, key) {
				element.children().attr(key, value ? value : key);
			}, ['id', 'name', 'class', 'type', 'value', 'disabled']);

			// Apply classes
			Utilities.forEach(attributes, function(value, key) {
				scope.classes[prefix + value] = true;
			}, ['version', 'color']);

			// Apply events
			// Utilities.forEach(attributes, function(value, key) {
			// 	element.on(key, scope[key]);
			// }, ['click']);
			
			element.on('click', scope.procedure);
		}

		static factory(): ng.IDirectiveFactory {
			// Inject optional services here
			const directive = () => new ButtonDirective();
			directive.$inject = [];
			return directive;
		}
	}
}