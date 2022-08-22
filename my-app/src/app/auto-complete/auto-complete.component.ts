import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  constructor(private router: Router) {
 
   }
   btnClick= function (this:any) {
    this.router.navigateByUrl('/drivers');
   
};
  myControl = new FormControl('');
  options: string[] = ['Tel-Aviv', 'Yafo', 'Bnei-Brak','Lod'];
  filteredOptions: Observable<string[]>;

  public edited = true;

  ngOnInit() {
    debugger;
     if(this.router.url=='/addDriver')
     {this.edited=false;}
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
