import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'weather-indoor',
  templateUrl: './weather-indoor.component.html',
  styleUrls: ['./weather-indoor.component.css']
})
export class WeatherIndoorComponent implements OnInit {

  indoorCondition: any = {temperature: '-', humidity: '-'};

  constructor(
    private _weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.getIndoorCondition();
  }

  getIndoorCondition() {
    this._weatherService.getIndoor()
      .subscribe(data => this.indoorCondition = data);
  }

}
