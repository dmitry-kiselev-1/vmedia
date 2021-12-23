import { Component, Input, OnInit } from '@angular/core';
import { AppointmentReportModel } from '../../models/appointment-report.model';
import {BehaviorSubject, EMPTY, from, Observable} from 'rxjs';
import {count, tap} from 'rxjs/operators';

@Component({
  selector: 'app-appointment-summary',
  templateUrl: './appointment-summary.component.html',
  styleUrls: ['./appointment-summary.component.scss']
})
export class AppointmentSummaryComponent implements OnInit {

  constructor() { }

  @Input() data: AppointmentReportModel[] | undefined | null;

  // async calculations example:
  Verified$?: Observable<number> = new BehaviorSubject(0);

  // sync calculations example:
  VerifiedPescent = 0;
  MetricsAmount = 0;
  Scheduled = 0;
  Rescheduled = 0;
  NotVerified = 0;
  Cancelled = 0;
  NotQualified = 0;
  RepCancelled = 0;
  DoctorCancelled = 0;
  Confirmed = 0;
  Completed = 0;
  Interested = 0;
  NotInterested = 0;
  Producing = 0;

  ngOnInit(): void {

    // async calculations example - can be used in template as ({{ (Verified$ | async) }}) + ({{ (Scheduled$ | async) }})
    this.Verified$ = from(this.data ?? EMPTY)
      .pipe(
        count(value => value.Status === 'Verified'),
      tap((verified) => {
          this.NotQualified = this.data?.filter(item => item.Status === 'Not Qualified').length ?? 0;
          this.RepCancelled = this.data?.filter(item => item.Status === 'Rep Cancelled').length ?? 0;

          this.MetricsAmount = verified + this.Scheduled + this.Rescheduled + this.RepCancelled;
          this.VerifiedPescent = verified / this.MetricsAmount;
        })
      );

    // sync calculations example:
    // this.NotQualified = this.data?.filter(item => item.Status === 'Not Qualified').length ?? 0;
    // this.RepCancelled = this.data?.filter(item => item.Status === 'Rep Cancelled').length ?? 0;

    // this.MetricsAmount = this.Scheduled + this.Rescheduled + this.RepCancelled;
    // ToDo: ...
  }
}
