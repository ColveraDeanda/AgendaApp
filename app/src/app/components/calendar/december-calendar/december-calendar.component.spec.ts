import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecemberCalendarComponent } from './december-calendar.component';

describe('DecemberCalendarComponent', () => {
  let component: DecemberCalendarComponent;
  let fixture: ComponentFixture<DecemberCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecemberCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecemberCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
