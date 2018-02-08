import {Component} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    console.log('registering  play button icon');
    iconRegistry.addSvgIcon('pi-hole',
      sanitizer.bypassSecurityTrustResourceUrl('assets/pi-hole.svg'));
  }

  openPiHoleAdmin() {
    window.location.href = 'http://oubliettes.bhacaz.com/admin';
  }

}
