import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSmartAdminSharedModule } from '../../shared';
import {
    UserAnswerStatisticsExamService,
    UserAnswerStatisticsExamPopupService,
    UserAnswerStatisticsExamComponent,
    UserAnswerStatisticsExamDetailComponent,
    UserAnswerStatisticsExamDialogComponent,
    UserAnswerStatisticsExamPopupComponent,
    UserAnswerStatisticsExamDeletePopupComponent,
    UserAnswerStatisticsExamDeleteDialogComponent,
    userAnswerStatisticsRoute,
    userAnswerStatisticsPopupRoute,
    UserAnswerStatisticsExamResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...userAnswerStatisticsRoute,
    ...userAnswerStatisticsPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSmartAdminSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        UserAnswerStatisticsExamComponent,
        UserAnswerStatisticsExamDetailComponent,
        UserAnswerStatisticsExamDialogComponent,
        UserAnswerStatisticsExamDeleteDialogComponent,
        UserAnswerStatisticsExamPopupComponent,
        UserAnswerStatisticsExamDeletePopupComponent,
    ],
    entryComponents: [
        UserAnswerStatisticsExamComponent,
        UserAnswerStatisticsExamDialogComponent,
        UserAnswerStatisticsExamPopupComponent,
        UserAnswerStatisticsExamDeleteDialogComponent,
        UserAnswerStatisticsExamDeletePopupComponent,
    ],
    providers: [
        UserAnswerStatisticsExamService,
        UserAnswerStatisticsExamPopupService,
        UserAnswerStatisticsExamResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSmartAdminUserAnswerStatisticsExamModule {}
