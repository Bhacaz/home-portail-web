import { Component, OnInit } from '@angular/core';
import {Chromecast} from './chromecast';
import {ChromecastsService} from './chromecasts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chromecasts',
  templateUrl: './chromecasts.component.html',
  styleUrls: ['./chromecasts.component.css'],
  providers: [ChromecastsService]
})
export class ChromecastsComponent implements OnInit {

  chromecasts: Chromecast[];

  constructor(private _chromecastsService: ChromecastsService, private _router: Router) { }

  ngOnInit() {
    this.getChromecasts();
  }

  getChromecasts() {
    // this.chromecasts = [{
    //     name: 'Salon',
    //     deviceName: '123',
    //     language: 'fr-CA',
    //     text: ''
    //   }];
    this._chromecastsService.getAll().subscribe(chromecasts => this.chromecasts = chromecasts);
  }

}
