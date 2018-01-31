import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSmartAdminSharedModule } from '../../shared';
import {
    UserAnswerExamService,
    UserAnswerExamPopupService,
    UserAnswerExamComponent,
    UserAnswerExamDetailComponent,
    UserAnswerExamDialogComponent,
    UserAnswerExamPopupComponent,
    UserAnswerExamDeletePopupComponent,
    UserAnswerExamDeleteDialogComponent,
    userAnswerRoute,
    userAnswerPopupRoute,
    UserAnswerExamResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...userAnswerRoute,
    ...userAnswerPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSmartAdminSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        UserAnswerExamComponent,
        UserAnswerExamDetailComponent,
        UserAnswerExamDialogComponent,
        UserAnswerExamDeleteDialogComponent,
        UserAnswerExamPopupComponent,
        UserAnswerExamDeletePopupComponent,
    ],
    entryComponents: [
        UserAnswerExamComponent,
        UserAnswerExamDialogComponent,
        UserAnswerExamPopupComponent,
        UserAnswerExamDeleteDialogComponent,
        UserAnswerExamDeletePopupComponent,
    ],
    providers: [
        UserAnswerExamService,
        UserAnswerExamPopupService,
        UserAnswerExamResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSmartAdminUserAnswerExamModule {}
