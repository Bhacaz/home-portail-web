import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ChromecastsService {

  private baseUrl = 'http://localhost:3000/api/chromecasts/';
  constructor(private http: Http) {
  }

  getAll() {
    return this.http
      .get(`${this.baseUrl}/getDevices`)
      .map((res: Response) => res.json());
  }

}
