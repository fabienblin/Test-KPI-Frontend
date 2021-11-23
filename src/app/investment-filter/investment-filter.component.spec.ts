import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentFilterComponent } from './investment-filter.component';

describe('InvestmentFilterComponent', () => {
  let component: InvestmentFilterComponent;
  let fixture: ComponentFixture<InvestmentFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
