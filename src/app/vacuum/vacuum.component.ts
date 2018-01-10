import { Component, OnInit } from '@angular/core';
import {VacuumService} from "./vacuum.service";

@Component({
  selector: 'app-vacuum',
  templateUrl: './vacuum.component.html',
  styleUrls: ['./vacuum.component.css']
})
export class VacuumComponent implements OnInit {

  status: any = {};

  constructor(
    private _vacuumService: VacuumService
  ) { }

  ngOnInit() {
    this.getStatus();
  }

  getStatus() {
    this._vacuumService.getStatus()
      .subscribe(data => this.status = data);
  }

  pause() {
    this._vacuumService.postPause()
      .subscribe(
        next => {
          this.getStatus();
        }
      );
  }

  stop() {
    this._vacuumService.postStop()
      .subscribe(
        suc => {
          this.updateStatus();
        }
      );
  }

  start() {
    console.log('start');
    this._vacuumService.postStart()
      .subscribe(
        suc => {
          this.updateStatus();
        }
      );
  }

  updateStatus() {
    setTimeout(() => { this.getStatus(); }, 5000);
  }

}
