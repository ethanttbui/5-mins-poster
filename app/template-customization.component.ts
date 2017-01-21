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

	readImageUrl(event: any, index: number) : void {
		if (event.target.files && event.target.files[0]) {
			var reader = new FileReader();
			reader.onload = (e: any) => this.template.images[index] = e.target.result;
			reader.readAsDataURL(event.target.files[0]);
		}
	}
}