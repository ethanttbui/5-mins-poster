import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Template } from './template';
import { TEMPLATES } from './template-default';

@Injectable()

export class TemCusService {
	constructor(private http: Http){}

	getAllTemplates(): Template[] {
		return TEMPLATES;
	}

	getTemplate(id : number): Template {
		return TEMPLATES.find(template => template.id == id);
	}

	//NOTE: the following codes should be move to a separate service
	getPoster(id: number): Promise<Template> {
		return this.http.get("https://o88z2j88yh.execute-api.us-east-1.amazonaws.com/beta/spaces/" + id).toPromise().then(function (response) {
			var poster = TEMPLATES[1];
			var data = response.json().Items[0];
			poster.texts[3] = "Address: " + data.address;
			return poster;
		}).catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}