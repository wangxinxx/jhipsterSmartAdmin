import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSmartAdminBaseQuestionExamModule } from './base-question-exam/base-question-exam.module';
import { JhipsterSmartAdminBaseAnswerExamModule } from './base-answer-exam/base-answer-exam.module';
import { JhipsterSmartAdminUserAnswerExamModule } from './user-answer-exam/user-answer-exam.module';
import { JhipsterSmartAdminUserAnswerStatisticsExamModule } from './user-answer-statistics-exam/user-answer-statistics-exam.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterSmartAdminBaseQuestionExamModule,
        JhipsterSmartAdminBaseAnswerExamModule,
        JhipsterSmartAdminUserAnswerExamModule,
        JhipsterSmartAdminUserAnswerStatisticsExamModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSmartAdminEntityModule {}
