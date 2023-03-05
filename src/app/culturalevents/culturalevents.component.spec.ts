import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaleventsComponent } from './culturalevents.component';

describe('CulturaleventsComponent', () => {
  let component: CulturaleventsComponent;
  let fixture: ComponentFixture<CulturaleventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturaleventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturaleventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
