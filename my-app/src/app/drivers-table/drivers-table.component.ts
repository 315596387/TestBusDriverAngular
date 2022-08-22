import { Component, OnInit, TemplateRef } from '@angular/core';
import { DriversService } from '../services/drivers-service';
import { Driver } from '../models/Driver';
import { ModalDismissReasons, NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DriverDialogComponent } from '../driver-dialog/driver-dialog.component';

@Component({
  selector: 'app-drivers-table',
  templateUrl: './drivers-table.component.html',
  styleUrls: ['./drivers-table.component.css'],
})
export class DriversTableComponent implements OnInit {
  edited = true;
  drivers: Driver[];
  closeResult: string;

  constructor(private driversService: DriversService,
    private modalService: NgbModal) { }

  openDriverDialog() {
    var modalReference: NgbModalRef;

    let modalOptions: NgbModalOptions = {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
      centered: true
    }
    modalReference = this.modalService
      .open(DriverDialogComponent, modalOptions);

    modalReference.closed.subscribe(res => {
      console.log(res);
    });

    modalReference.dismissed.subscribe(res => {
      console.log(res);
    });
    console.log(modalReference.result);

    // .result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  };
  ngOnInit(): void {
    this.driversService.getdrivers()
      .subscribe(
        drivers => this.drivers = drivers);

    this.driversService.$driverSubject.subscribe(driver => {
      this.drivers.push(driver);
    })
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
