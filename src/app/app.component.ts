// https://maps.googleapis.com/maps/api/directions/json?
// origin=matara&destination=nugegoda&mode=transit&key=AIzaSyD5g_QO7b1pBfgl9OtX6vchzZwX1Vmxo2Y
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public lat = 24.799448;
  public lng = 120.979021;

  // origin = { lat: 24.799448, lng: 120.979021 }
  // destination = { lat: 24.799524, lng: 120.975017 }

  public origin: any = 'Kandy';
  public destination: any = 'Colombo';
  public travelMode: any = 'TRANSIT';
  public lati: any;
  public langi: any;
  // public arrDataLangi: any = [];
  // public arrDataLongi: any = [];
  arrDataLangi = [
    7.276109,
    7.274674,
    7.272000,
  ];
  arrDataLongi = [
    80.615642,
    80.613383,
    80.608223
  ];
  public renderOptions = {
    suppressMarkers: true,
  };

  public markerOptions = {
    origin: {
      icon: 'https://i.imgur.com/7teZKif.png',
      draggable: true,
    },
    destination: {
      icon: 'https://i.imgur.com/7teZKif.png',
      draggable: true,
      infoWindow: `
        <h4>Hello<h4>
        <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
        `
    },
  };
  public onRefresh(num) {
if (navigator) {
    navigator.geolocation.getCurrentPosition( pos => {
        this.langi = +pos.coords.longitude;
        this.lati = +pos.coords.latitude;
      });
    }

      // this.langi = this.arrDataLongi[num];
      // this.lati = this.arrDataLangi[num];
  }

  public sleep(delay) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay) {; }
  }
}
