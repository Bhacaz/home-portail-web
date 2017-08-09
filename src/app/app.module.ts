import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChromecastsComponent } from './chromecasts/chromecasts.component';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    ChromecastsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
