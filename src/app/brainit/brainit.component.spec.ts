import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainitComponent } from './brainit.component';

describe('BrainitComponent', () => {
  let component: BrainitComponent;
  let fixture: ComponentFixture<BrainitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrainitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrainitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
