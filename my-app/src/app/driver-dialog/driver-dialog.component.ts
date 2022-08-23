import { Component } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DriversService } from '../services/drivers-service';
import { Driver } from '../models/Driver';

@Component({
  selector: 'app-driver-dialog',
  templateUrl: './driver-dialog.component.html',
  styleUrls: ['./driver-dialog.component.css']
})
export class DriverDialogComponent {

  currentDriver: Driver = <Driver>{};

  constructor(private driversService: DriversService,
    public activeModal: NgbActiveModal) { }

  addDriver() {
    //debugger;
    this.activeModal.dismiss("add");
    this.driversService.addDriver(this.currentDriver);
  };
}
