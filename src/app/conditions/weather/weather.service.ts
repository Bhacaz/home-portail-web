import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class WeatherService {

  private baseUrl = environment.apiUrl + 'weather/';
  constructor(private http: Http) {
  }

  getCurrent() {
    return this.http
      .get(this.baseUrl)
      .map(res => res.json());
  }

  getForecast() {
    return this.http
      .get(this.baseUrl + 'forecast')
      .map(res => res.json());
  }

  getIndoor() {
    return this.http
      .get(this.baseUrl + 'indoor')
      .map(res => res.json());
  }
}
