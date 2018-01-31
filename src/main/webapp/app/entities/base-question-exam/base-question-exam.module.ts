import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSmartAdminSharedModule } from '../../shared';
import {
    BaseQuestionExamService,
    BaseQuestionExamPopupService,
    BaseQuestionExamComponent,
    BaseQuestionExamDetailComponent,
    BaseQuestionExamDialogComponent,
    BaseQuestionExamPopupComponent,
    BaseQuestionExamDeletePopupComponent,
    BaseQuestionExamDeleteDialogComponent,
    baseQuestionRoute,
    baseQuestionPopupRoute,
    BaseQuestionExamResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...baseQuestionRoute,
    ...baseQuestionPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSmartAdminSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        BaseQuestionExamComponent,
        BaseQuestionExamDetailComponent,
        BaseQuestionExamDialogComponent,
        BaseQuestionExamDeleteDialogComponent,
        BaseQuestionExamPopupComponent,
        BaseQuestionExamDeletePopupComponent,
    ],
    entryComponents: [
        BaseQuestionExamComponent,
        BaseQuestionExamDialogComponent,
        BaseQuestionExamPopupComponent,
        BaseQuestionExamDeleteDialogComponent,
        BaseQuestionExamDeletePopupComponent,
    ],
    providers: [
        BaseQuestionExamService,
        BaseQuestionExamPopupService,
        BaseQuestionExamResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSmartAdminBaseQuestionExamModule {}
