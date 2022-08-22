import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  title = 'appBootstrap';
  closeResult: string;
  fname:'';
  Tz:'';
  street:'';
  username: string = 'ff';
 
  constructor(private modalService: NgbModal) { }
  DriversDataComponent
  btnAddClick= function (this:any) {
    debugger;
    alert(this.fname); 
    //this.driversData.updateNewDriver({ name: this.fname,Tz:this.Tz, treet:this.street, ity:'lod' });
};
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }

}
