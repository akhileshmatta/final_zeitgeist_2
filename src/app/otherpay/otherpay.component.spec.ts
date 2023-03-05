import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherpayComponent } from './otherpay.component';

describe('OtherpayComponent', () => {
  let component: OtherpayComponent;
  let fixture: ComponentFixture<OtherpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherpayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
