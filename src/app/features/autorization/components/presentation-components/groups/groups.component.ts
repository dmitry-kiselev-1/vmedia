import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GroupModel } from '../../../models/group.model';
import { environment } from '../../../../../../environments/environment';
import { BaseAutorizationComponent } from '../../base-autorization.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsComponent extends BaseAutorizationComponent implements OnInit, OnChanges {

  constructor(protected materialSnackBar: MatSnackBar) {
    super(materialSnackBar);
  }

  @Input() groups: GroupModel[] | undefined | null;

  @Output() delete = new EventEmitter<GroupModel>();
  @Output() create = new EventEmitter<GroupModel>();
  @Output() edit = new EventEmitter<GroupModel>();
  @Output() selected = new EventEmitter<GroupModel>();

  groupsFiltered$ = new BehaviorSubject<GroupModel[]>([] as GroupModel[]);
  groupSelected$ = new BehaviorSubject<GroupModel>({} as GroupModel);

  ngOnChanges(changes: SimpleChanges): void {
    if (!environment.production) { console.log('GroupsComponent OnChanges'); }
    this.textFilterInputChange('');
  }

  ngOnInit(): void {
    // this.materialSnackBarOpen('error message test');
  }

  textFilterInputChange(filterValue: string): void {
    if (filterValue === '') {
      this.groupsFiltered$.next([...this.groups || []]);
    } else {
      this.groupsFiltered$.next([...this.groups?.filter(group => group.name.includes(filterValue)) || []]);
    }
  }

  groupSelected(group: GroupModel): void {
    this.groupSelected$.next(group);
    this.selected.emit(this.groupSelected$.getValue());
    if (!environment.production) { console.log('group selected', group); }
  }

  onEdit(): void {
    this.edit.emit(this.groupSelected$.getValue());
    this.clearSelection();
  }

  onCreate(): void {
    this.create.emit();
    this.clearSelection();
  }

  onDelete(): void {
    this.delete.emit(this.groupSelected$.getValue());
    this.clearSelection();
  }

  clearSelection(): void {
    this.groupSelected$.next({} as GroupModel);
  }

}
