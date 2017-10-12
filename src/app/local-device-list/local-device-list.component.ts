import { Component, OnInit } from '@angular/core';
import {LocalDevice} from "./local-device";
import {LocalDeviceService} from "./local-device.service";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-local-device-list',
  templateUrl: './local-device-list.component.html',
  styleUrls: ['./local-device-list.component.css']
})
export class LocalDeviceListComponent implements OnInit {

  localDevices: LocalDevice[] = [];
  dataSource: LocalDevice | null;
  constructor(
    private _localDeviceService: LocalDeviceService
  ) { }

  ngOnInit() {
    this.loadLocalDevices();
    this.dataSource = new LocalDeviceDataSource(this._localDeviceService);
  }

  loadLocalDevices() {
    this._localDeviceService.getAll()
      .subscribe(data => {
        this.localDevices = data;
      });
  }

}

export class LocalDeviceDataSource extends DataSource<LocalDevice> {

  constructor(private localDeviceService: LocalDeviceService) {
    super();
  }

  connect(): Observable<LocalDevice[]> {
    return Observable.of(this.localDevices);
  }

  disconnect() {}

}
