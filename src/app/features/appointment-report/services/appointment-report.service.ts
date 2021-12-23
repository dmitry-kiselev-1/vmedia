import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { AppointmentReportModel } from '../models/appointment-report.model';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { BaseHttpService } from '../../../shared/services/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentReportService extends BaseHttpService {

  constructor(protected httpClient: HttpClient) {
    super();
  }

  protected apiUrl = 'api/appointment-reports';

  get(): Observable<AppointmentReportModel[]> {
    return this.httpClient.get<{ data: AppointmentReportModel[] }>(this.apiUrl)
      .pipe(
        tap(entities => environment.production ? null : console.log(`http get`, entities)),
        map(response => response.data),
        catchError(this.handleError)
    );
  }
}
