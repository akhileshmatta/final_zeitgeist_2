import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BughuntComponent } from './bughunt.component';

describe('BughuntComponent', () => {
  let component: BughuntComponent;
  let fixture: ComponentFixture<BughuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BughuntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BughuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
