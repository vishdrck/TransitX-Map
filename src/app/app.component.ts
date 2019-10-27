// https://maps.googleapis.com/maps/api/directions/json?
// origin=matara&destination=nugegoda&mode=transit&key=AIzaSyD5g_QO7b1pBfgl9OtX6vchzZwX1Vmxo2Y
import { Component, OnInit } from '@angular/core';
import { roads } from './../assests/roads/road.json';
import { Roads } from './interfaces/roads.app';
// import { RoadsNumbers } from './../assests/roads/roads.numbers.json';
import { CrudService } from './shared/crud.service';  // CRUD API service class
import { Observable, from } from 'rxjs';
import { CrudComponent } from './crud/crud.component';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // constructor(crud: CrudComponent) {
  //   // console.log(crud.items);
  // }
  roadsArrLength = roads.length;
  public crudApi: CrudService; // Inject student CRUD services in constructor.

  // Hardcoded for testing purposes only
  roads: Roads[] = [
    { value: 0, viewValue: 'Bus Route 01' },
    { value: 1, viewValue: 'Bus Route 138' },
    { value: 2, viewValue: 'Bus Route 155' },
    { value: 3, viewValue: 'Bus Route 400' },
  ];

  public lat = 24.799448;
  public lng = 120.979021;

  // origin = { lat: 24.799448, lng: 120.979021 }
  // destination = { lat: 24.799524, lng: 120.975017 }

  public origin: any;
  public destination: any;
  public travelMode: any = 'DRIVING';
  public lati: number;
  public langi: number;
  public iconurl: any = 'https://i.imgur.com/r5a9BR4.png';
  // public roads: Roads[];
  public roadsNames = [];
  public roadsNamesArr = [];
  public gpsDataArr: number[] = [];
  public crudService: CrudService;
  //  public items: new Observable<any>;

  public siteTitle = 'TransitX';
  public isSelectedOption = false;
  public renderOptions = {
    suppressMarkers: true,
  };

  constructor(public db: AngularFireDatabase) {}

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
    // this.langi = this.arrDataLongi[num];
    // this.lati = this.arrDataLangi[num];


  // Sleep method for halt a event for given time
  public sleep(delay) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay) { }
  }

  // Set the orgin and the  destination
  public setRoute(option) {
    for (let counter = 0; counter < 5; counter++) {
      if (counter === option) {
        this.origin = roads[counter].origin;
        this.destination = roads[counter].destination;
        break;
      }
    }
  }
  // On selecting the mat-select fire the event
  public onSelection(event: any) {
    this.isSelectedOption = true;
    this.setRoute(event.value);
    // console.log(event.value);
  }

  public method1() {
    // for (let counter = 0; counter < this.roadsArrLength ; counter++) {
    //   this.roadsNames[counter] = [
    //     {value: counter, viewValue: this.roadsNamesArr[counter].},
    //   ];
    // this.origin = roads[counter].origin;
    // this.destination = roads[counter].destination;
    // break;
    // }
    // tslint:disable-next-line: no-unused-expression

    // }
    //   }

    // dataState() {
    //       this.crudApi.gpsData.snapshotChanges().subscribe( data => {
    //       // this.gpsDataArr = [];
    //       console.log(data);
    //       });
    // }

  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.crudService = new CrudService(this.db);
    this.lati = this.crudApi.onGpsLati();
    // console.log(this.lati);
    this.lati = this.crudApi.onGpsLangi();
    // console.log(this.langi);
  }
}

