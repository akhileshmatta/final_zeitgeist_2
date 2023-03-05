import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTechnicalEventsComponent } from './non-technical-events.component';

describe('NonTechnicalEventsComponent', () => {
  let component: NonTechnicalEventsComponent;
  let fixture: ComponentFixture<NonTechnicalEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonTechnicalEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonTechnicalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
