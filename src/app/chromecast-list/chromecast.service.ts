import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Chromecast} from './chromecast';

@Injectable()
export class ChromecastService {

  private baseUrl = 'http://localhost:3000/api/chromecasts/';
  constructor(private http: Http) {
  }

  getAll() {
    return this.http
      .get(this.baseUrl + 'getDevices')
      .map(res => res.json().devices);
  }

  sendMessage(message) {
    return this.http
      .post(this.baseUrl + 'speakText', message)
      .subscribe();
  }

}
