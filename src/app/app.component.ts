// https://maps.googleapis.com/maps/api/directions/json?
// origin=matara&destination=nugegoda&mode=transit&key=AIzaSyD5g_QO7b1pBfgl9OtX6vchzZwX1Vmxo2Y
import { Component } from '@angular/core';
import { roads } from './../assests/roads/road.json';

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

  public origin: any;
  public destination: any;
  public travelMode: any = 'DRIVING';
  public lati: any;
  public langi: any;
  public iconurl: any = 'https://i.imgur.com/r5a9BR4.png';

  public renderOptions = {
    suppressMarkers: true,
  };

  public markerOptions = {
    origin: {
      icon: 'https://i.imgur.com/JapGewI.png',
      draggable: true,
    },
    destination: {
      icon: 'https://i.imgur.com/JapGewI.png',
      draggable: true,
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

  // Sleep method for halt a event for given time
  public sleep(delay) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay) {; }
  }

  // Set the orgin and the  destination
  public setRoute(option) {
    for (let counter = 0; counter < 5 ; counter++) {
      if ( counter === option) {
        this.origin = roads[counter].origin;
        this.destination = roads[counter].destination;
        break;
      }
    }
  }
}
