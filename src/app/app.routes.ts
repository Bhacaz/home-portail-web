import {Routes} from "@angular/router";
import {ChromecastListComponent} from "./chromecast-list/chromecast-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const appRoutes: Routes = [
  { path: 'cast', component: ChromecastListComponent },
  { path: '', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];
