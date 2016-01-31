/// <reference path="references.ts" />

module ButtonModule {
	"use strict";

	export interface IButton {
		classes?: Object;
		version?: string;
		color?: string;
		procedure?(data?: any): void;
		info?: any;
	}
}