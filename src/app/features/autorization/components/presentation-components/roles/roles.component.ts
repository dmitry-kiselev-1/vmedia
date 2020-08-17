import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';
import { BehaviorSubject, EMPTY, ReplaySubject, Subject, Subscription } from 'rxjs';
import { RoleModel } from '../../../models/role.model';
import { environment } from '../../../../../../environments/environment';
import { catchError, take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseAutorizationComponent } from '../../base-autorization.component';
import { GroupModel } from '../../../models/group.model';
import { MatSelectChange } from '@angular/material/select';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RolesComponent extends BaseAutorizationComponent implements OnInit, OnChanges {

  constructor(protected materialSnackBar: MatSnackBar) {
    super(materialSnackBar);
  }

  @Input() roles: RoleModel[] | undefined | null;
  @Input() rolesCount: number | undefined | null;
  @Input() groupSelected?: GroupModel | undefined | null = null;

  @Output() pageChange = new EventEmitter<PageEvent>();
  @Output() save = new EventEmitter<RoleModel[]>();

  rolesFiltered$ = new BehaviorSubject<RoleModel[]>([] as RoleModel[]);

  ngOnChanges(changes: SimpleChanges): void {
    if (!environment.production) { console.log('RolesComponent OnChanges'); }

    if (!this.groupSelected?.id) {
      this.rolesFiltered$.next([]);
      return;
    }

    this.textFilterInputChange('');

    this.roles?.forEach(role => {
      role.selected = false;
      if (this.groupSelected?.roles?.find(selected => selected.id === role.id)) {
        role.selected = true;
      }
    });

    this.rolesFiltered$.next(this.roles || []);
  }

  ngOnInit(): void {
    // this.materialSnackBarOpen('error message test');
  }

  textFilterInputChange(filterValue: string): void {
    if (filterValue === '') {
      this.rolesFiltered$.next(this.roles || []);
    } else {
      this.rolesFiltered$.next(this.roles?.filter(role => role.name.includes(filterValue)) || []);
    }
  }

  propertyFilterSelectionChange(value: MatSelectChange): void {
    // debugger;
    switch (value.value) {
      case 'Show All':
        this.rolesFiltered$.next(this.roles || []);
        break;
      case 'Show Checked':
        this.rolesFiltered$.next(this.roles?.filter(role => role.selected) || []);
        break;
      case 'Show Unchecked':
        this.rolesFiltered$.next(this.roles?.filter(role => !role.selected) || []);
        break;
    }
  }

  selectAll(): void {
    this.roles?.forEach(role => role.selected = true);
  }

  deselectAll(): void {
    this.roles?.forEach(role => role.selected = false);
  }

  onSave(): void {
    this.save.emit(this.roles?.filter(role => role?.selected));
  }

  onPageChange(pageEvent: PageEvent): void {
    this.pageChange.emit(pageEvent);
  }
}
