import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroupModel } from '../models/group.model';
import { from, Observable } from 'rxjs';
import { BaseAutorizationService } from './base-autorization.service';
import { catchError, concatMap, skip, take, toArray } from 'rxjs/operators';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService extends BaseAutorizationService {

  constructor(protected httpClient: HttpClient, private roleService: RoleService) { super(httpClient); }

  protected apiUrl = 'groups';

  getGroup(): Observable<GroupModel[]> {
    return this.get<GroupModel>();
  }

  getGroupById(id: string): Observable<GroupModel> {
    return this.getById<GroupModel>(id);
  }

  deleteGroup(group: GroupModel): Observable<any> {
    return this.delete<GroupModel>(group);
  }

  updateGroup(group: GroupModel, pageIndex: number = 0, pageSize = this.maxPageSize): Observable<any> {
    /*
    // Update with respect to Paging (must be implemented on real API):
    const rolesExceptPage$ = this.roleService.getRole()
      .pipe(
        concatMap(entity => from(entity)
          .pipe(
            take((pageIndex - 1) * pageSize),
            skip((pageIndex + 1) * pageSize),
            toArray())),
        catchError(this.handleError)
      );
      ...
    */
    return this.update<GroupModel>(group);
  }

  createGroup(group: GroupModel): Observable<any> {
    return this.create<GroupModel>(group);
  }
}
