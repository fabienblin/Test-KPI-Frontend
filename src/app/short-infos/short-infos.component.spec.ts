import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortInfosComponent } from './short-infos.component';

describe('ShortInfosComponent', () => {
  let component: ShortInfosComponent;
  let fixture: ComponentFixture<ShortInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
