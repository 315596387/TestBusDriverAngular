import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../models/Driver';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DriversService {
  $driverSubject: Subject<Driver> = new Subject<Driver>();

  constructor(private http: HttpClient) { }

  getdrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>('assets/Drivers.json');
  }
  addDriver(driver: Driver) {
    this.$driverSubject.next(driver);
  }
}
