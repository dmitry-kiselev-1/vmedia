import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
    path: '', redirectTo: 'autorization', pathMatch: 'full'
  },
  {
    path: 'autorization',
    loadChildren: () => import('./features/autorization/autorization.module').then(m => m.AutorizationModule)
  },
  {
    path: '**', redirectTo: 'autorization'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
