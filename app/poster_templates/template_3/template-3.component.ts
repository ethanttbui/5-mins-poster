import { Component } from '@angular/core';

import { TemCusService } from '../../template.service';

@Component({
	moduleId: module.id,
	selector: 'my-template',
  templateUrl: 'template-3.component.html',
  styleUrls: [ 'template-3.component.css' ],
  providers: [ TemCusService ]
})

export class Template3 { 
	constructor (private tcs: TemCusService) {}
	template = this.tcs.getTemplate(3);
}