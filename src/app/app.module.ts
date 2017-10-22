import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { CardToolbarComponent } from './card/card-toolbar/card-toolbar.component';
import {MatProgressSpinnerModule} from '@angular/material';
import { CardSpinnerComponent } from './card/card-spinner/card-spinner.component';
import { CardProgressBarComponent } from './card/card-progress-bar/card-progress-bar.component';
import {MatProgressBarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ChromecastListComponent,
    LocalDeviceListComponent,
    CardToolbarComponent,
    CardSpinnerComponent,
    CardProgressBarComponent
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
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [
    ChromecastService,
    LocalDeviceService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
