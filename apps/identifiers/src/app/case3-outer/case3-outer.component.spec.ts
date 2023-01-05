import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Case3OuterComponent } from './case3-outer.component';

describe('Case3OuterComponent', () => {
  let component: Case3OuterComponent;
  let fixture: ComponentFixture<Case3OuterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Case3OuterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Case3OuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
