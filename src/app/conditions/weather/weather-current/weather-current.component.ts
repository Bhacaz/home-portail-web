import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.css']
})
export class WeatherCurrentComponent implements OnInit {

  currentWeather: any;

  constructor(
    private _weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.loadWeather();
  }

  loadWeather() {
    this._weatherService.getCurrent()
      .subscribe(data => this.currentWeather = data);
  }
}
