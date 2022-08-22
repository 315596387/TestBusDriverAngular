import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversDataComponent } from './drivers-data/drivers-data.component';
import { AddDriverComponent } from './add-driver/add-driver.component';


const routes: Routes = [
  { path: 'drivers', component: DriversDataComponent },
  { path: 'addDriver', component: AddDriverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
