import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../weather.service";
import {DatePipe} from "@angular/common";
import {COLORSCHART} from "../../../../assets/colors/chart";

@Component({
  selector: 'weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  forecast: any;
  forecastTempData: Array<any> = [
    {data: [], label: 'Température'},
    {data: [], label: 'Minimum'},
    {data: [], label: 'Maximum'}
  ];
  forecastRainData: Array<any> = [
    {data: [], label: 'Précipitation'}
  ];
  forecastTempLabel: Array<any> = [];

  constructor(
    private _weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.loadForecast();
  }

  loadForecast() {
    this._weatherService.getForecast()
      .subscribe(data => {
        this.forecast = data;
        this.buildDataSet(data.list);
      });
  }

  buildDataSet(data: any) {
    let temp = [];
    let temp_min = [];
    let temp_max = [];
    let label = [];
    let rain = [];
    for (const list of data) {
      const main = list.main;
      temp.push(main.temp);
      temp_min.push(main.temp_min);
      temp_max.push(main.temp_max);
      let prec = list.rain['3h'] || list.snow['3h'] || 0;
      rain.push(prec);
      label.push(list.dt);
    }
    this.forecastTempData[0].data = temp;
    this.forecastTempData[1].data = temp_min;
    this.forecastTempData[2].data = temp_max;
    this.forecastRainData[0].data = rain;
    this.forecastTempLabel.length = 0;
    this.forecastTempLabel = this.formatTimeLabel(label);
  }

  formatTimeLabel(arrayTimestamp) {
    const timeLabel = [];
    const datePipe = new DatePipe('fr-CA');
    let currentDate = null;

    for (const timestamp of arrayTimestamp) {
      const date = new Date(timestamp * 1000);
      if (date.getDate() !== currentDate) {
        currentDate = date.getDate();
        timeLabel.push(datePipe.transform(date, 'd MMM'));
      } else {
        timeLabel.push(datePipe.transform(date, 'HH:mm'));
      }
    }
    return timeLabel;
  }
  public lineChartOptions:any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public lineChartColors:Array<any> = [
    COLORSCHART.green,
    COLORSCHART.blue,
    COLORSCHART.orange
  ];


}
