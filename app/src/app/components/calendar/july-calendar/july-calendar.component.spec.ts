import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JulyCalendarComponent } from './july-calendar.component';

describe('JulyCalendarComponent', () => {
  let component: JulyCalendarComponent;
  let fixture: ComponentFixture<JulyCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JulyCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JulyCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
