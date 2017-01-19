import { Component } from '@angular/core';

import { TemCusService } from '../../template.service';

@Component({
	moduleId: module.id,
  selector: 'my-template',
  templateUrl: 'template-2.component.html',
  styleUrls: [ 'template-2.component.css' ],
  providers: [ TemCusService	]
})

export class Template2 { 
	constructor (private tcs: TemCusService) {}
	template = this.tcs.getTemplate(2);
}
