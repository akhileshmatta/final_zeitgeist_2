import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomdationComponent } from './accomdation.component';

describe('AccomdationComponent', () => {
  let component: AccomdationComponent;
  let fixture: ComponentFixture<AccomdationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomdationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
