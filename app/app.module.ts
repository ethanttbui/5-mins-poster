import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { TemCusComponent } from './template-customization.component';
import { Template1 } from './poster_templates/template_1/template-1.component';
import { Template2 } from './poster_templates/template_2/template-2.component';
import { Template3 } from './poster_templates/template_3/template-3.component';
import { Template4 } from './poster_templates/template_4/template-4.component';
import { Attempspace } from './attempspace/attempspace.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
  	BrowserModule,
  	FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TemCusComponent,
    Template1,
    Template2,
    Template3,
    Template4,
    Attempspace 
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
