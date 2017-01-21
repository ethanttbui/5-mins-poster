import { Component } from '@angular/core';

import { TemCusService } from '../../template.service';

@Component({
	moduleId: module.id,
	selector: 'my-template',
  templateUrl: 'template-1.component.html',
  styleUrls: [ 'template-1.component.css' ],
  providers: [ TemCusService ]
})

export class Template1 { 
	constructor (private tcs: TemCusService) {}
	template = this.tcs.getTemplate(1);
}
