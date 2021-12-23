import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentReportRoutingModule } from './appointment-report-routing.module';
import { AppointmentReportComponent } from './components/appointment-report/appointment-report.component';


@NgModule({
  declarations: [
    AppointmentReportComponent
  ],
  imports: [
    CommonModule,
    AppointmentReportRoutingModule
  ]
})
export class AppointmentReportModule { }
