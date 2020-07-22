import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptemberCalendarComponent } from './september-calendar.component';

describe('SeptemberCalendarComponent', () => {
  let component: SeptemberCalendarComponent;
  let fixture: ComponentFixture<SeptemberCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeptemberCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeptemberCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
