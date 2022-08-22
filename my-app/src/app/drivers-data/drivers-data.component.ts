import { Component, OnInit } from '@angular/core';
import { DriversServiceService, Drivers } from '../drivers-service.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-drivers-data',
  templateUrl: './drivers-data.component.html',
  styleUrls: ['./drivers-data.component.css'],
})
export class DriversDataComponent implements OnInit {
  public edited = true;
  drivers:Drivers[];

  constructor(private driversService: DriversServiceService,private router: Router) { }

 
  btnClick= function (this:any) {
    this.router.navigateByUrl('/addDriver');
   
};
  ngOnInit(): void {
    this.driversService.getdrivers().
    then(drivers => this.drivers = drivers);
  }

}
