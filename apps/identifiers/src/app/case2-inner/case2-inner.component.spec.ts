import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Case2InnerComponent } from './case2-inner.component';

describe('Case2InnerComponent', () => {
  let component: Case2InnerComponent;
  let fixture: ComponentFixture<Case2InnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Case2InnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Case2InnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
