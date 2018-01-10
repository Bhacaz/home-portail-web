import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Http} from "@angular/http";

@Injectable()
export class VacuumService {

  private baseUrl = environment.apiUrl + 'vacuum/';
  constructor(private http: Http) {
  }

  getStatus() {
    return this.http
      .get(this.baseUrl + 'status')
      .map(res => res.json().status);
  }

  postPause() {
    return this.http
      .post(this.baseUrl + 'pause', {});
  }

  postStart() {
    return this.http
      .post(this.baseUrl + 'start', {});
  }

  postStop() {
    return this.http
      .post(this.baseUrl + 'home', {});
  }

}
