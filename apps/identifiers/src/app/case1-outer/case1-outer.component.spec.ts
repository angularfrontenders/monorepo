import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Case1OuterComponent } from './case1-outer.component';

describe('Case1OuterComponent', () => {
  let component: Case1OuterComponent;
  let fixture: ComponentFixture<Case1OuterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Case1OuterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Case1OuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
