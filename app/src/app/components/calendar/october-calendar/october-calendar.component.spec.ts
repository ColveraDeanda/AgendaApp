import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoberCalendarComponent } from './october-calendar.component';

describe('OctoberCalendarComponent', () => {
  let component: OctoberCalendarComponent;
  let fixture: ComponentFixture<OctoberCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctoberCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctoberCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
