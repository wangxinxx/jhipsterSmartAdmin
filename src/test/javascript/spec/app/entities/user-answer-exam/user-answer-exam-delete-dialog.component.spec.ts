/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { JhipsterSmartAdminTestModule } from '../../../test.module';
import { UserAnswerExamDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/user-answer-exam/user-answer-exam-delete-dialog.component';
import { UserAnswerExamService } from '../../../../../../main/webapp/app/entities/user-answer-exam/user-answer-exam.service';

describe('Component Tests', () => {

    describe('UserAnswerExam Management Delete Component', () => {
        let comp: UserAnswerExamDeleteDialogComponent;
        let fixture: ComponentFixture<UserAnswerExamDeleteDialogComponent>;
        let service: UserAnswerExamService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSmartAdminTestModule],
                declarations: [UserAnswerExamDeleteDialogComponent],
                providers: [
                    UserAnswerExamService
                ]
            })
            .overrideTemplate(UserAnswerExamDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(UserAnswerExamDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(UserAnswerExamService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
