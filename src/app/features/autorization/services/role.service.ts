import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../shared/services/base-http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleModel } from '../models/role.model';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { BaseAutorizationService } from './base-autorization.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends BaseAutorizationService {

  constructor(protected httpClient: HttpClient) { super(httpClient); }

  protected apiUrl = 'roles';

  getRole(pageIndex: number = 0, pageSize: number = this.maxPageSize): Observable<RoleModel[]> {
    return this.get<RoleModel>(pageIndex, pageSize);
  }

  getRolesCount(): Observable<number> {
    return this.get<RoleModel>().pipe(
      map(x => x.length)
    );
  }

  getRoleById(id: string): Observable<RoleModel> {
    return this.getById<RoleModel>(id);
  }

  deleteRole(role: RoleModel): Observable<any> {
    return this.delete<RoleModel>(role);
  }

  updateRole(role: RoleModel): Observable<any> {
    return this.update<RoleModel>(role);
  }

  createRole(role: RoleModel): Observable<any> {
    return this.create<RoleModel>(role);
  }
}
