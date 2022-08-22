import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversTableComponent } from './drivers-table/drivers-table.component';
import { DriverDialogComponent } from './driver-dialog/driver-dialog.component';


const routes: Routes = [
  { path: 'drivers', component: DriversTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
