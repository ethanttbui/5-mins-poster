import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemCusComponent } from './template-customization.component';
import { Template1 } from './poster_templates/template_1/template-1.component';
import { Template2 } from './poster_templates/template_2/template-2.component';
import { Template3 } from './poster_templates/template_3/template-3.component';
import { Template4 } from './poster_templates/template_4/template-4.component';
import { Attempspace } from './attempspace/attempspace.component';

const routes: Routes = [
	{
		path: 'template',
	  children: [
	    {
	       path:'1',
	       component: Template1
	    },
	    {
	       path:'2',
	       component: Template2
	    },
	    {
	       path:'3',
	       component: Template3
	    },
	    {
	       path:'4',
	       component: Template4
	    }
	  ]
	},
	{
	  path: 'attempspace',
	  component: Attempspace
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}