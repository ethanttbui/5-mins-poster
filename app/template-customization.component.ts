import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Template } from './template';
import { TemCusService } from './template.service';

@Component({
	moduleId: module.id,
	selector: 'my-tem-cus',
	templateUrl: 'template-customization.component.html',
	styleUrls: [ 'template-customization.component.css' ],
	providers: [ TemCusService ]
})

export class TemCusComponent implements OnInit {
	template: Template;

	constructor(private tcs: TemCusService, private ar: ActivatedRoute) {}

	ngOnInit(): void {
		this.ar.params.subscribe((params: Params) => this.template = this.tcs.getTemplate(+params['id']));
	}

	readFileUrl(event: any) : void {
		if (event.target.files && event.target.files[0]) {
			var reader = new FileReader();
			var target = event.srcElement || event.target;
			switch (target.attributes.name.value) {    //NOTE: Strong coupling with the view here!!!
				case "background":
					reader.onload = (e: any) => this.template.bgImgUrl = e.target.result;
					break;
				case "banner":
					reader.onload = (e: any) => this.template.bannerImgUrl = e.target.result;
					break;
				case "supplementary":
					reader.onload = (e: any) => this.template.supImgUrl = e.target.result;
					break;
			}
			reader.readAsDataURL(event.target.files[0]);
		}
	}
}