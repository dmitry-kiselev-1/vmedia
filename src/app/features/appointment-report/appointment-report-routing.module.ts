import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppointmentReportComponent} from './components/appointment-report/appointment-report.component';

const routes: Routes = [
  { path: '', component: AppointmentReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentReportRoutingModule { }
