import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Drivers {
  name;
  Tz;
  street;
  city;
}

@Injectable({
  providedIn: 'root'
})

export class DriversServiceService {

  constructor(private http: HttpClient) {}

  getdrivers() {
    debugger;
    return this.http.get<any>('assets/Drivers.json')
      .toPromise()
      .then(res => <Drivers[]>res.data)
      .then(data => { return data; });
    }
    
}
