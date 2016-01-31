import {Component} from 'angular2/core'
import {ButtonComponent} from './button.component'

"use strict";

@Component({
	selector: 'main',
	templateUrl: 'src/buttons-template.html',
	directives: [ButtonComponent]})
export class MainComponent {
	private info: Object;
	
	constructor() {
		// Example property
		this.info = {value: 'key'};
	}
	
	// Example method
	private procedure(data: any = null): void {
		console.log(data);
	}
}