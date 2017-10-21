import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { ChromecastListComponent } from './chromecast-list/chromecast-list.component';
import {ChromecastService} from "./chromecast-list/chromecast.service";
import { LocalDeviceListComponent } from './local-device-list/local-device-list.component';
import {LocalDeviceService} from "./local-device-list/local-device.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MdFormFieldModule, MdIconModule, MdInputModule, MdSelectModule,
  MdTableModule
} from '@angular/material';
import {MatCardModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ChromecastListComponent,
    LocalDeviceListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MdIconModule,
    MdFormFieldModule,
    MdInputModule,
    MdSelectModule,
    MdTableModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  providers: [
    ChromecastService,
    LocalDeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
