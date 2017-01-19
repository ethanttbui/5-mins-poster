import { Component, Input } from '@angular/core';

import { Template } from './template';

@Component({
	moduleId: module.id,
	selector: 'my-tem-cus',
	templateUrl: 'template-customization.component.html',
	styleUrls: [ 'template-customization.component.css' ]
})

export class TemCusComponent {
	@Input() template: Template;	

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