import { Injectable } from '@angular/core';
// import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { isNgTemplate } from '@angular/compiler';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
public langi: any;
public lati: any;
  // gpsData: AngularFireObject<number>;    // Reference to Student data list, its an Observable
  // items: RoutesData;
  // constructor(private db: AngularFireDatabase) {
  //   this.db.list('/Buses').valueChanges().subscribe(data => {
  //     const routes = data as RoutesData[];
  //     routes.forEach(route => {
  //       console.log(route);
  //     });
  //   });
  //  }
  constructor(private db: AngularFireDatabase) {
      const busesUidArray: Array<string> = [];
      const routesIdArray: Array<string> = [];
      const gpsDataArray: Array<string> = [];
      // this.db.list('/Buses').valueChanges().subscribe(data => {
      //   const busesData = data as BusData[];
      //   busesData.forEach(busData => {
      //     busesUidArray.push(busData.uid);
      //   });
      // });

      this.db.list('/routes/route01').valueChanges().subscribe(data => {
        const routesData = data as RoutesData[];
        // tslint:disable-next-line: no-shadowed-variable
        routesData.forEach(routeData => {
          // console.log(routeData);
          routesIdArray.push(routeData.origin);
          routesIdArray.push(routeData.destination);
          // this.orign = routesData.
        });
        // origin = routesIdArray[0];
      });

      this.db.list('/routes/route01/sessions/').valueChanges().subscribe(data => {
        const gpsData = data as GPSData[];
        // tslint:disable-next-line: no-shadowed-variable
        gpsData.forEach(gpssData => {
          gpsDataArray.push(gpssData.lat);
          gpsDataArray.push(gpssData.lon);
          // console.log(gpssData);
          // busesUidArray.push(RoutesData.uid);
        });
        this.langi = gpsDataArray[gpsDataArray.length - 2];
        this.lati = gpsDataArray[gpsDataArray.length - 1];
      });
}
public onGpsLangi(): any {
  // if (navigator) {
  //   navigator.geolocation.getCurrentPosition(pos => {
  //      this.langi = +pos.coords.longitude;
  //      return this.langi;
  //       });
  //     }
  console.log(this.langi);
  return this.langi;
  }


public onGpsLati(): any {
       console.log(this.lati);
       return this.lati;
        }
  }

export interface RoutesData {
  destination: string;
  origin: string;
  sessions: string;
  uid: string;
  }

export interface GPSData {
  uid: string;
  dateTime: string;
  lat: string;
  lon: string;
  }
export interface BusData {
  email: string;
  regNumber: string;
  uid: string;
  }
