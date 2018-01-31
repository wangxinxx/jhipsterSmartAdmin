import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './smartadmin.routing'
// App is our top level component
import { AppComponent } from './smartadmin.component';
import { APP_RESOLVER_PROVIDERS } from './smartadmin.resolver';
import { AppState, InternalStateType } from './smartadmin.service';

// Core providers
import {CoreModule} from './core/core.module';
import {SmartadminLayoutModule} from './shared/layout/layout.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import {HomeModule} from './+home/home.module';
import {JhipsterSmartAdminBaseQuestionExamModule} from '../entities/base-question-exam/base-question-exam.module';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,

  ],
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule,
    CoreModule,
    SmartadminLayoutModule,
    HomeModule,
      JhipsterSmartAdminBaseQuestionExamModule,
    routing
  ],
  exports: [
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class SmartAdminModule {
  //constructor(public appRef: ApplicationRef, public appState: AppState) {}
}
