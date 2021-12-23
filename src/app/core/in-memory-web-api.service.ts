import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RequestInfo } from 'angular-in-memory-web-api/interfaces';

import { GroupModel } from '../features/autorization/models/group.model';
import { RightModel } from '../features/autorization/models/right.model';
import { RoleModel } from '../features/autorization/models/role.model';
import { environment } from '../../environments/environment';

import { AppointmentReportModel } from '../features/appointment-report/models/appointment-report.model';
import AppointmentReportsData from '../../assets/appointment-reports-data.json';

@Injectable({
  providedIn: 'root'
})
export class InMemoryWebApiService implements InMemoryDbService {

  createDb(reqInfo?: RequestInfo): {} {
    const entityCount = 50;

    const rights: RightModel[] = [];
    const roles: RoleModel[] = [];
    const groups: GroupModel[] = [];
    const appointmentReports: AppointmentReportModel[] = AppointmentReportsData;

    for (let i = 1; i <= entityCount; i++) {
      const right = new RightModel(`${i}`, `Right ${i}`);
      rights.push(right);
    }

    for (let i = 1; i <= entityCount; i++) {
      const role = new RoleModel(`${i}`, `Role ${i}`);
      role.rights = rights.slice(this.randomBetween(0, entityCount / 2), this.randomBetween(entityCount / 2 + 1, entityCount - 1));
      roles.push(role);
    }

    for (let i = 1; i <= entityCount; i++) {
      const group = new GroupModel(`${i}`, `Group ${i}`);
      group.roles = roles.slice(this.randomBetween(0, entityCount / 2), this.randomBetween(entityCount / 2 + 1, entityCount - 1));
      groups.push(group);
    }

    // if (!environment.production) { console.log(groups, roles, rights, appointmentReports); }

    return {groups, roles, permissions: rights, 'appointment-reports': appointmentReports};
  }

  private randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
