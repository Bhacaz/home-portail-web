import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Chromecast} from './chromecast';
import {environment} from "../../environments/environment";

@Injectable()
export class ChromecastService {

  private baseUrl = environment.apiUrl + 'chromecasts/';
  constructor(private http: Http) {
  }

  getAll() {
    return this.http
      .get(this.baseUrl + 'getDevices')
      .map(res => res.json());
  }

  sendMessage(message) {
    return this.http
      .post(this.baseUrl + 'speakText', message)
      .subscribe();
  }

}
