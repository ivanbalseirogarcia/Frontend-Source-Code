import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Country/list/list.component';
import { AddComponent } from './Country/add/add.component';
import { EditComponent } from './Country/edit/edit.component';
import{FormsModule}from '@angular/forms';
import{ServiceService}from '../app/Service/service.service';
import{HttpClientModule}from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
