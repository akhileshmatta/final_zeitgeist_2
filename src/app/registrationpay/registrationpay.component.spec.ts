import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationpayComponent } from './registrationpay.component';

describe('RegistrationpayComponent', () => {
  let component: RegistrationpayComponent;
  let fixture: ComponentFixture<RegistrationpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationpayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
