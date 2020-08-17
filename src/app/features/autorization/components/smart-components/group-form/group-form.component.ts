import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../../../services/group.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Subscription } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';
import { GroupModel } from '../../../models/group.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoWhitespaceValidator } from '../../../../../shared/validators/no-whitespace.validator';
import { BaseAutorizationComponent } from '../../base-autorization.component';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent extends BaseAutorizationComponent implements OnInit, OnDestroy {

  constructor(
    private groupService: GroupService,
    protected materialSnackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    super(materialSnackBar);
  }

  private subscriptions: Subscription = new Subscription();

  formGroup: FormGroup = {} as FormGroup;
  formSubmitMode: FormSubmitMode = FormSubmitMode.Create;
  routeId = '';

  ngOnInit(): void {
    this.createForm();
    const snapshot = this.activatedRoute.snapshot;
    if (snapshot?.routeConfig?.path === 'update/:id') {
      this.routeId = snapshot?.paramMap?.get('id') ?? '';
      this.fillForm(this.routeId);
      this.formSubmitMode = FormSubmitMode.Update;
    } else {
      this.formSubmitMode = FormSubmitMode.Create;
    }
    // this.materialSnackBarOpen('error message test');
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      groupName: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(1),
        NoWhitespaceValidator()
      ])]
    });
  }

  fillForm(id: string): void {
    this.groupService.getGroupById(id)
      .pipe(
        catchError(err => {
          this.materialSnackBarOpen(err);
          return EMPTY;
        }))
      .subscribe(group => this.formGroup.controls.groupName.setValue(group.name));
  }

  onSubmit(): void {

    if (this.formSubmitMode === FormSubmitMode.Create) {
      this.subscriptions.add(
        this.groupService.createGroup(new GroupModel('0', this.formGroup.controls.groupName.value))
          .subscribe(() => this.onCancel()));
    }

    if (this.formSubmitMode === FormSubmitMode.Update) {
      this.subscriptions.add(
        this.groupService.getGroupById(this.routeId)
          .pipe(
            concatMap(group => {
              group.name = this.formGroup.controls.groupName.value;
              return this.groupService.updateGroup(group);
            }))
          .subscribe(() => this.onCancel()));
    }
  }

  onCancel(): void {
    this.router.navigateByUrl('autorization');
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

enum FormSubmitMode {
  Update,
  Create
}
