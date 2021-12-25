import { Component, Input, OnInit } from '@angular/core';
import { AppointmentReportModel } from '../../models/appointment-report.model';
import { BehaviorSubject, EMPTY, from, Observable } from 'rxjs';
import { count, tap } from 'rxjs/operators';
import { AppointmentSummaryModel} from '../../models/appointment-summary.model';

@Component({
  selector: 'app-appointment-summary',
  templateUrl: './appointment-summary.component.html',
  styleUrls: ['./appointment-summary.component.scss']
})
export class AppointmentSummaryComponent implements OnInit {

  @Input() input: AppointmentReportModel[] | undefined | null;
  model = new AppointmentSummaryModel();

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.model = await this.calculateMetricsAsync();
  }

  private async calculateMetricsAsync(): Promise<AppointmentSummaryModel> {

    const model = new AppointmentSummaryModel();

    const promise = new Promise<AppointmentSummaryModel>(resolve => {
      model.Verified = this.input?.filter(item => item.Status === 'Verified').length ?? 0;
      model.Scheduled = this.input?.filter(item => item.Status === 'Scheduled').length ?? 0;
      model.Rescheduled = this.input?.filter(item => item.Status === 'Rescheduled').length ?? 0;
      model.NotVerified = this.input?.filter(item => item.Status === 'Not Verified').length ?? 0;
      model.Cancelled = this.input?.filter(item => item.Status === 'Cancelled').length ?? 0;
      model.NotQualified = this.input?.filter(item => item.Status === 'Not Qualified').length ?? 0;
      model.RepCancelled = this.input?.filter(item => item.Status === 'Rep Cancelled').length ?? 0;
      model.DoctorCancelled = this.input?.filter(item => item.Status === 'Doctor Cancelled').length ?? 0;
      model.Confirmed = this.input?.filter(item => item.Status === 'Confirmed').length ?? 0;
      model.Completed = this.input?.filter(item => item.Status === 'Completed').length ?? 0;
      model.Interested = this.input?.filter(item => item.Status === 'Interested').length ?? 0;
      model.NotInterested = this.input?.filter(item => item.Status === 'Not Interested').length ?? 0;
      model.Producing = this.input?.filter(item => item.Status === 'Producing').length ?? 0;
      let metricsAmount = 0;
      Object.values(model).forEach(metric => metricsAmount += metric);
      model.MetricsAmount = metricsAmount;
      resolve(model);
      });

    return promise;
  }
}
