import {Routes} from "@angular/router";
import {ChromecastListComponent} from "./chromecast-list/chromecast-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LocalDeviceListComponent} from "./local-device-list/local-device-list.component";
import {WeatherForecastComponent} from "./conditions/weather/weather-forecast/weather-forecast.component";

export const appRoutes: Routes = [
  { path: 'cast', component: ChromecastListComponent },
  { path: 'local-device', component: LocalDeviceListComponent },
  { path: 'weather', component: WeatherForecastComponent },
  { path: '', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];
