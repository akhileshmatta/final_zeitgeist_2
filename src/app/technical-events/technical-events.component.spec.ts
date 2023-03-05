import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalEventsComponent } from './technical-events.component';

describe('TechnicalEventsComponent', () => {
  let component: TechnicalEventsComponent;
  let fixture: ComponentFixture<TechnicalEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
