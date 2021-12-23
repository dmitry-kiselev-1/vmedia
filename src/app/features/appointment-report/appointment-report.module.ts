import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentReportRoutingModule } from './appointment-report-routing.module';
import { AppointmentReportComponent } from './components/appointment-report/appointment-report.component';
import { AppointmentSummaryComponent } from './components/appointment-summary/appointment-summary.component';


@NgModule({
  declarations: [
    AppointmentReportComponent,
    AppointmentSummaryComponent
  ],
  imports: [
    CommonModule,
    AppointmentReportRoutingModule
  ]
})
export class AppointmentReportModule { }
