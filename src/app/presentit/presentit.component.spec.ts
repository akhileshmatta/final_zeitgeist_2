import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentitComponent } from './presentit.component';

describe('PresentitComponent', () => {
  let component: PresentitComponent;
  let fixture: ComponentFixture<PresentitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
