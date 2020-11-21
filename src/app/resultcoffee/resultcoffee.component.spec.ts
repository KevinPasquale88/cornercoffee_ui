import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultcoffeeComponent } from './resultcoffee.component';

describe('ResultcoffeeComponent', () => {
  let component: ResultcoffeeComponent;
  let fixture: ComponentFixture<ResultcoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultcoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultcoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
