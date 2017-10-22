import { Component, OnInit } from '@angular/core';
import {ChromecastService} from "./chromecast.service";
import {Chromecast} from "./chromecast";

@Component({
  selector: 'app-chromecast-list',
  templateUrl: './chromecast-list.component.html',
  styleUrls: ['./chromecast-list.component.css']
})
export class ChromecastListComponent implements OnInit {

  loading: boolean = true;
  chromecasts: Chromecast[];
  message: any = {
    device: '',
    language: 'fr-CA',
    text: ''
  };

  constructor(private _chromecastService: ChromecastService) { }

  ngOnInit() {
    this.loadChromecasts();
  }

  loadChromecasts() {
    this.loading = true;
    this._chromecastService.getAll()
      .subscribe(data => {
        this.chromecasts = data;
        this.loading = false;
      });
  }

  sendMessage() {
    this._chromecastService.sendMessage(this.message);
  }

}
