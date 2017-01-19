import { Component } from '@angular/core';

import { Template } from './template';
import { TemCusService } from './template.service';

@Component ({
	selector: 'my-app',
	template: `
		<a routerLink="/template-1" (click)="getTemplate(1)">Template-1</a>
		<a routerLink="/template-2" (click)="getTemplate(2)">Template-2</a>
		<a routerLink="/attempspace">Attempspace</a>
		<my-tem-cus [template]="selectedTemplate"></my-tem-cus>
	`,
	providers: [ TemCusService ]
})

export class AppComponent {
	selectedTemplate: Template; 

	constructor(private tcs: TemCusService) {}

	getTemplate(id: number): void {
		this.selectedTemplate = this.tcs.getTemplate(id);
	}
}