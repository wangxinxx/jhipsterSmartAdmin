import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterSmartAdminSharedModule, UserRouteAccessService } from './shared';
import { JhipsterSmartAdminAppRoutingModule} from './app-routing.module';
import { JhipsterSmartAdminHomeModule } from './home/home.module';
import { JhipsterSmartAdminAdminModule } from './admin/admin.module';
import { JhipsterSmartAdminAccountModule } from './account/account.module';
import { JhipsterSmartAdminEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { routing } from './smartadmin/smartadmin.routing';
import { SmartAdminModule } from "./smartadmin/smartadmin.module";

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterSmartAdminAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSmartAdminSharedModule,
        JhipsterSmartAdminHomeModule,
        JhipsterSmartAdminAdminModule,
        JhipsterSmartAdminAccountModule,
        JhipsterSmartAdminEntityModule,
        SmartAdminModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSmartAdminAppModule {}
