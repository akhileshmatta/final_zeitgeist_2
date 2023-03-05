import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredeventsComponent } from './registeredevents.component';

describe('RegisteredeventsComponent', () => {
  let component: RegisteredeventsComponent;
  let fixture: ComponentFixture<RegisteredeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredeventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
