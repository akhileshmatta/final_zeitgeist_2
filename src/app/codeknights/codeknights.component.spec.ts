import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeknightsComponent } from './codeknights.component';

describe('CodeknightsComponent', () => {
  let component: CodeknightsComponent;
  let fixture: ComponentFixture<CodeknightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeknightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeknightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
