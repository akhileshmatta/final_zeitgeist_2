import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodewarsComponent } from './codewars.component';

describe('CodewarsComponent', () => {
  let component: CodewarsComponent;
  let fixture: ComponentFixture<CodewarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodewarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodewarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
