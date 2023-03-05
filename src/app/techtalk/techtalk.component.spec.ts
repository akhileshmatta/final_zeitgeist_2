import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechtalkComponent } from './techtalk.component';

describe('TechtalkComponent', () => {
  let component: TechtalkComponent;
  let fixture: ComponentFixture<TechtalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechtalkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechtalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
