import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Case3InnerComponent } from './case3-inner.component';

describe('Case3InnerComponent', () => {
    let component: Case3InnerComponent;
    let fixture: ComponentFixture<Case3InnerComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [Case3InnerComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Case3InnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
