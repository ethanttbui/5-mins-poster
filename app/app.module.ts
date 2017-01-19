import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { TemCusComponent } from './template-customization.component';
import { Template1 } from './poster_templates/template_1/template-1.component';
import { Template2 } from './poster_templates/template_2/template-2.component';
import { Attempspace } from './attempspace/attempspace.component';

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
    HttpModule, 
  	RouterModule.forRoot([
  		{
  			path: 'template-1',
  			component: Template1
  		},
  		{
  			path: 'template-2',
  			component: Template2
  		},
      {
        path: 'attempspace',
        component: Attempspace
      }
  	])
  ],
  declarations: [ AppComponent, TemCusComponent, Template1, Template2, Attempspace ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
