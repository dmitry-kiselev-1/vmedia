import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientInMemoryWebApiModule, InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';
import { InMemoryWebApiService } from './in-memory-web-api.service';
import { HttpClientModule } from '@angular/common/http';

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string): void {
  if (parentModule) {
    const msg = `${moduleName} has already been loaded. Import Core modules in the AppModule only.`;
    throw new Error(msg);
  }
}

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryWebApiService,
      { delay: 0, dataEncapsulation: true } as InMemoryBackendConfigArgs)
  ],
  exports: [],
  providers: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
