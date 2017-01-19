import { Component, OnInit } from '@angular/core';

import { Template } from './template';
import { TemCusService } from './template.service';

@Component ({
	selector: 'my-app',
	template: `
		<a *ngFor="let template of allTemplates" [routerLink]="['/template',template.id,template.id]">Template-{{template.id}}</a>
		<a routerLink="/attempspace">Attempspace</a>
		<router-outlet></router-outlet>
	`,
	providers: [ TemCusService ]
})

export class AppComponent implements OnInit {
	allTemplates: Template[]; 

	constructor(private tcs: TemCusService) {}

	ngOnInit(): void {
		this.allTemplates = this.tcs.getAllTemplates();
	}
}