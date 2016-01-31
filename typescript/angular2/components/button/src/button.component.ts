import {Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter, HostListener} from 'angular2/core'
import {NgClass} from 'angular2/common'
import {Utilities} from './utilities.service'

"use strict";

@Component({
	selector: 'ui-button',
	templateUrl: 'src/button-template.html',
	styleUrls: ['src/button-style.css'],
	encapsulation: ViewEncapsulation.Native,
	providers: [Utilities],
	directives: [NgClass]})
export class ButtonComponent implements OnInit {
	static PREFIX: string = 'button--';
	private classes: Object;
	
	@Input() name: string = 'button';
	@Input() class: string;
	@Input() disabled: boolean;
	
	@Input() version: string;
	@Input() color: string;
	@Input() info: any;
	
	@Output() procedure: EventEmitter<any> = new EventEmitter();
	
	constructor() {
		this.classes = {'button': true};
	}
	
	ngOnInit() {
		var self = this;
		
		if(this.class) this.class.split(' ').forEach((value) => this.addClass(value));
		
		this.disabled = this.disabled === undefined ? false : true;
		
		Utilities.forEach(this, function(value, key) {
			self.addClass(value, true);
		}, ['version', 'color']);
		
		// Bound properties
		console.log('version: ' + this.version + ', color: ' + this.color + ', info:', this.info);
		
		// Trigger procedure
		if(this.procedure) this.procedure.emit(null);
	}
	
	@HostListener('click', ['$event'])
	private onClick(event: Event): void {
		this.procedure.emit(null);
	}
	
	private addClass(name: string, prefix: boolean = false): void {
		name = prefix ? ButtonComponent.PREFIX + name : name;
		if (!this.classes[name]) {
			this.classes[name] = true;
		}
	}
}