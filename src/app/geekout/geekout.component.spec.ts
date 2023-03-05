import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeekoutComponent } from './geekout.component';

describe('GeekoutComponent', () => {
  let component: GeekoutComponent;
  let fixture: ComponentFixture<GeekoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeekoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeekoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
