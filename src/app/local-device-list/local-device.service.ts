import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class LocalDeviceService {

  private baseUrl = environment.apiUrl + 'LocalDevices/';
  constructor(private http: Http) {
  }

  getAll() {
    return this.http
      .get(this.baseUrl + 'scan')
      .map(res => res.json().localDevices);
  }

  getById(id) {
    return this.http
      .get(this.baseUrl + id.toString())
      .map(res => res.json());
  }

  patchById(id, data) {
    return this.http
      .patch(this.baseUrl + id.toString(), data)
      .map(res => res.json());
  }


}
