import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriversTableComponent } from './drivers-table/drivers-table.component';
import { DriverDialogComponent } from './driver-dialog/driver-dialog.component';
import {TableModule} from 'primeng/table';
import {InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { DriversService } from './services/drivers-service';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    DriversTableComponent,
    DriverDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    NgbModule,  
    RouterModule.forRoot([
      { path: 'auto-complete', component: AutoCompleteComponent },
      { path: '', pathMatch: 'full', redirectTo: 'auto-complete' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DriverDialogComponent]
})
export class AppModule { }
