import { Component } from '@angular/core';

import { TemCusService } from '../../template.service';

@Component({
	moduleId: module.id,
	selector: 'my-template',
  templateUrl: 'template-4.component.html',
  styleUrls: [ 'template-4.component.css' ],
  providers: [ TemCusService ]
})

export class Template4 { 
	constructor (private tcs: TemCusService) {}
	template = this.tcs.getTemplate(4);
}