import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Case1InnerComponent } from './case1-inner.component';

describe('Case1InnerComponent', () => {
  let component: Case1InnerComponent;
  let fixture: ComponentFixture<Case1InnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Case1InnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Case1InnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
