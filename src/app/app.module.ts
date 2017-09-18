import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { ChromecastListComponent } from './chromecast-list/chromecast-list.component';
import {ChromecastService} from "./chromecast-list/chromecast.service";

@NgModule({
  declarations: [
    AppComponent,
    ChromecastListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ChromecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
