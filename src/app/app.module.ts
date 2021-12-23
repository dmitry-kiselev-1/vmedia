import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';
import { InMemoryWebApiService } from './core/in-memory-web-api.service';
import { environment } from '../environments/environment';
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
    imports: [
        CoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MatListModule,
        // HttpClientInMemoryWebApiModule.forRoot(InMemoryWebApiService,
        //    { delay: 0, dataEncapsulation: true } as InMemoryBackendConfigArgs)
        /*
        environment.production
          ? []
          : HttpClientInMemoryWebApiModule.forRoot(InMemoryWebApiService,
            { delay: 500, dataEncapsulation: true } as InMemoryBackendConfigArgs)
        */
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
