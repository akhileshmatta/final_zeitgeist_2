import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineeventsComponent } from './onlineevents.component';

describe('OnlineeventsComponent', () => {
  let component: OnlineeventsComponent;
  let fixture: ComponentFixture<OnlineeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineeventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
