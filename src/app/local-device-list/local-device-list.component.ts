import { Component, OnInit } from '@angular/core';
import {LocalDevice} from "./local-device";
import {LocalDeviceService} from "./local-device.service";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-local-device-list',
  templateUrl: './local-device-list.component.html',
  styleUrls: ['./local-device-list.component.css']
})
export class LocalDeviceListComponent implements OnInit {

  localDevices: LocalDevice[] = [];
  dataSource: LocalDeviceDataSource | null;
  displayedColumns = ['name', 'ip', 'mac'];

  constructor(
    private _localDeviceService: LocalDeviceService
  ) { }

  ngOnInit() {
    // this.loadLocalDevices();
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

  constructor(private _localDeviceService: LocalDeviceService) {
    super();
  }

  connect(): Observable<LocalDevice[]> {
    return this._localDeviceService.getAll();
  }

  disconnect() {}

}
