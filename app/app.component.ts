import { Component, OnInit } from '@angular/core';

import { Template } from './template';
import { TemCusService } from './template.service';

@Component ({
	selector: 'my-app',
	template: `
		<a *ngFor="let template of allTemplates" [routerLink]="['/template', template.id]" (click)="setSelectedTemplate(template)">Template-{{template.id}}</a>
		<a routerLink="/attempspace">Attempspace</a>
		<my-tem-cus [template]="selectedTemplate"></my-tem-cus>
	`,
	providers: [ TemCusService ]
})

export class AppComponent implements OnInit {
	allTemplates: Template[];
	selectedTemplate: Template;

	constructor(private tcs: TemCusService) {}

	ngOnInit(): void {
		this.allTemplates = this.tcs.getAllTemplates();
	}

	setSelectedTemplate(template: Template): void {
		this.selectedTemplate = template;
	}
}