/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {ModuleWithProviders} from "@angular/core";
import { HomeComponent } from './+home/home.component';
import {JhipsterSmartAdminBaseQuestionExamModule} from '../entities/base-question-exam/base-question-exam.module';

export const routes: Routes = [
    {
        path: 'smartadmin',
        component: MainLayoutComponent,
        children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent,
                data: {
                    pageTitle: 'Home'
                }
            },
            {
                path: 'test',
                loadChildren: 'app/entities/base-question-exam/base-question-exam.module#JhipsterSmartAdminBaseQuestionExamModule'
            }
        ]
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
