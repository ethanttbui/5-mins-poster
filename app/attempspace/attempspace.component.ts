import { Component, OnInit } from '@angular/core';

import { TemCusService } from '../template.service';
import { Template } from '../template';

@Component({
	moduleId: module.id,
  selector: 'my-template',
  templateUrl: 'attempspace.component.html',
  styleUrls: [ 'attempspace.component.css' ],
  providers: [ TemCusService ]
})

export class Attempspace implements OnInit {
	spaceId = 1471838329834474;
	template: Template;

	constructor (private tcs: TemCusService) {}
	
	ngOnInit(): void {
		this.getPoster();
	}
	getPoster() : void {
		this.tcs.getPoster(this.spaceId).then(poster => this.template = poster);
	}
	update():void {
		this.getPoster();
	}
}