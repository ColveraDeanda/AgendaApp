import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovemberCalendarComponent } from './november-calendar.component';

describe('NovemberCalendarComponent', () => {
  let component: NovemberCalendarComponent;
  let fixture: ComponentFixture<NovemberCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovemberCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovemberCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
