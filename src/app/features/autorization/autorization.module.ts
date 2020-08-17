import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorizationComponent } from './components/smart-components/autorization/autorization.component';
import { AutorizationRoutingModule } from './autorization-routing.module';
import { MaterialDesignModule } from './material-design.module';
import { GroupsComponent } from './components/presentation-components/groups/groups.component';
import { RolesComponent } from './components/presentation-components/roles/roles.component';
import { GroupFormComponent } from './components/smart-components/group-form/group-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule, InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';
import { InMemoryWebApiService } from '../../core/in-memory-web-api.service';

@NgModule({
  declarations: [
    AutorizationComponent,
    GroupsComponent,
    RolesComponent,
    GroupFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutorizationRoutingModule,
    MaterialDesignModule
  ],
  providers: []
})
export class AutorizationModule {}
