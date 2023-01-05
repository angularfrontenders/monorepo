import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Case2OuterComponent } from './case2-outer.component';

describe('Case2OuterComponent', () => {
  let component: Case2OuterComponent;
  let fixture: ComponentFixture<Case2OuterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Case2OuterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Case2OuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
