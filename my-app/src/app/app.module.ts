import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutoCompleteComponent } from './outo-complete/outo-complete.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriversDataComponent } from './drivers-data/drivers-data.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import {TableModule} from 'primeng/table';
import {InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { DriversServiceService } from './drivers-service.service';

@NgModule({
  declarations: [
    AppComponent,
    OutoCompleteComponent,
    DriversDataComponent,
    AddDriverComponent
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
      { path: 'outo-complete', component: OutoCompleteComponent },
      { path: '', pathMatch: 'full', redirectTo: 'outo-complete' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
