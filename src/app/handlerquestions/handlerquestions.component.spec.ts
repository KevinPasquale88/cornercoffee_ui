import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlerquestionsComponent } from './handlerquestions.component';

describe('HandlerquestionsComponent', () => {
  let component: HandlerquestionsComponent;
  let fixture: ComponentFixture<HandlerquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandlerquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlerquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
