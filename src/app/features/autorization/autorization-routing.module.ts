import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorizationComponent } from './components/smart-components/autorization/autorization.component';
import { GroupFormComponent } from './components/smart-components/group-form/group-form.component';

const routes: Routes = [
  { path: '', component: AutorizationComponent },
  { path: 'group', children: [
      { path: '', redirectTo: 'create', pathMatch: 'full'},
      { path: 'create', component: GroupFormComponent },
      { path: 'update/:id', component: GroupFormComponent }
    ]}

  /*
      { path: 'product', children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ProductListComponent },
          { path: 'create', component: ProductFormComponent },
          { path: 'update/:id', component: ProductFormComponent },
        ]},
      { path: '**', component: PageNotFoundComponent }
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorizationRoutingModule {}
