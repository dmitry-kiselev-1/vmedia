import { Component, OnInit } from '@angular/core';
import { AppointmentReportService } from '../../services/appointment-report.service';
import {catchError} from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { AppointmentReportModel } from '../../models/appointment-report.model';

@Component({
  selector: 'app-appointment-report',
  templateUrl: './appointment-report.component.html',
  styleUrls: ['./appointment-report.component.scss']
})
export class AppointmentReportComponent /* implements OnInit */ {

  appointmentReport$: Observable<AppointmentReportModel[]> = this.appointmentReportService.get()
    .pipe(
      catchError(err => {
        console.log(err);
        return EMPTY;
      }));

  constructor(
    private appointmentReportService: AppointmentReportService,
  ) { }

  rowColor(row: AppointmentReportModel): string{
    switch (row.Status) {
      case 'Interested': return '#b6d7a8'; break;
      case 'Confirmed': return '#fff2cc'; break;
      case 'Not Interested': return '#ea9999'; break;
      case 'Rep Cancelled': return 'white'; break;
      default : return  'white';
    }
  }

  /*
    ngOnInit(): void {
    this.appointmentReport$.subscribe(value => {
        debugger;
        console.log(value);
      });
  }
  */
}
