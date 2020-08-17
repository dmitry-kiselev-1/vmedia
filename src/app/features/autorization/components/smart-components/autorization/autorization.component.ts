import { ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { GroupService } from '../../../services/group.service';
import { BehaviorSubject, EMPTY, Observable, Subscription } from 'rxjs';
import { GroupModel } from '../../../models/group.model';
import { catchError, concatMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RoleModel } from '../../../models/role.model';
import { RoleService } from '../../../services/role.service';
import { BaseAutorizationComponent } from '../../base-autorization.component';
import { PageEvent } from '@angular/material/paginator';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutorizationComponent extends BaseAutorizationComponent implements OnInit, OnDestroy {

  constructor(
    private groupService: GroupService,
    private roleService: RoleService,
    protected materialSnackBar: MatSnackBar,
    private router: Router) {
    super(materialSnackBar);
  }

  private subscriptions: Subscription = new Subscription();

  groups$ = new Observable<GroupModel[]>();
  groupSelected$ = new BehaviorSubject<GroupModel>({} as GroupModel);

  roles$ = new Observable<RoleModel[]>();
  rolesCount$ = new Observable<number>();
  rolesPage$ = new BehaviorSubject<PageEvent>({pageIndex: 0, pageSize: this.defaultPageSize} as PageEvent);

  ngOnInit(): void {
    // this.materialSnackBarOpen('error message test');
    this.groups$ = this.groupService.getGroup()
      .pipe(
        catchError(err => {
          this.materialSnackBarOpen(err);
          return EMPTY;
        }));

    this.roles$ = this.roleService.getRole(0, this.defaultPageSize)
      .pipe(
        catchError(err => {
          this.materialSnackBarOpen(err);
          return EMPTY;
        }));

    this.roles$ = this.rolesPage$
      .pipe(
        concatMap(page =>
          this.roleService.getRole(page.pageIndex, page.pageSize)),
        catchError(err => {
          this.materialSnackBarOpen(err);
          return EMPTY;
        }));

    this.rolesCount$ = this.roleService.getRolesCount()
      .pipe(
      catchError(err => {
        this.materialSnackBarOpen(err);
        return EMPTY;
      }));
  }

  rolesPageChange(pageEvent: PageEvent): void {
    if (!environment.production) { console.log('rolesPageChange'); }
    this.rolesPage$.next(pageEvent);
  }

  groupSelected(group: GroupModel): void {
    this.groupSelected$.next(group);
  }

  groupDelete(group: GroupModel): void {
    this.subscriptions.add(
      this.groupService.deleteGroup(group)
        .pipe(
          catchError(err => {
            this.materialSnackBarOpen(err);
            return EMPTY;
          }))
        .subscribe(() => this.ngOnInit())
    );
  }

  groupCreate(): void {
    this.router.navigateByUrl('autorization/group/create');
  }

  groupEdit(group: GroupModel): void {
    this.router.navigateByUrl(`autorization/group/update/${group.id}`);
  }

  selectedRolesSave(roles: RoleModel[]): void {
    // debugger;
    const group = this.groupSelected$.getValue();
    group.roles = roles;
    this.subscriptions.add(
      this.groupService.updateGroup(group)
        .pipe(
          catchError(err => {
            this.materialSnackBarOpen(err);
            return EMPTY;
          }))
        .subscribe(() => this.materialSnackBarOpen('Selected roles saved successfully'))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
