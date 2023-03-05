import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicalhackingComponent } from './ethicalhacking.component';

describe('EthicalhackingComponent', () => {
  let component: EthicalhackingComponent;
  let fixture: ComponentFixture<EthicalhackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthicalhackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EthicalhackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
