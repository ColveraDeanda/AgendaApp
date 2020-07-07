import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanuaryCalendarComponent } from './january-calendar.component';

describe('JanuaryCalendarComponent', () => {
  let component: JanuaryCalendarComponent;
  let fixture: ComponentFixture<JanuaryCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanuaryCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanuaryCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
