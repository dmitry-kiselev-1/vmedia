import { Injectable } from '@angular/core';
import { BaseAutorizationService } from './base-autorization.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RightModel } from '../models/right.model';

@Injectable({
  providedIn: 'root'
})
export class RigthService extends BaseAutorizationService {

  constructor(protected httpClient: HttpClient) { super(httpClient); }

  protected apiUrl = 'rigths';

  getRigth(): Observable<RightModel[]> {
    return this.get<RightModel>();
  }

  getRigthById(id: string): Observable<RightModel> {
    return this.getById<RightModel>(id);
  }

  deleteRigth(rigth: RightModel): Observable<any> {
    return this.delete<RightModel>(rigth);
  }

  updateRigth(rigth: RightModel): Observable<any> {
    return this.update<RightModel>(rigth);
  }

  createRigth(rigth: RightModel): Observable<any> {
    return this.create<RightModel>(rigth);
  }
}
