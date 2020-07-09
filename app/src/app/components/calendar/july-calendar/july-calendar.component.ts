import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task/task.service';

@Component({
  selector: 'app-july-calendar',
  templateUrl: './july-calendar.component.html',
  styleUrls: ['./july-calendar.component.css'],
  providers: [TaskService]
})
export class JulyCalendarComponent implements OnInit {
  day_1: Array<Object> = [];
  day_2: Array<Object> = [];
  day_3: Array<Object> = [];
  day_4: Array<Object> = [];
  day_5: Array<Object> = [];
  day_6: Array<Object> = [];
  day_7: Array<Object> = [];
  day_8: Array<Object> = [];
  day_9: Array<Object> = [];
  day_10: Array<Object> = [];
  day_11: Array<Object> = []; 
  day_12: Array<Object> = [];
  day_13: Array<Object> = [];
  day_14: Array<Object> = [];
  day_15: Array<Object> = [];
  day_16: Array<Object> = [];
  day_17: Array<Object> = [];
  day_18: Array<Object> = [];
  day_19: Array<Object> = [];
  day_20: Array<Object> = [];
  day_21: Array<Object> = [];
  day_22: Array<Object> = [];
  day_23: Array<Object> = [];
  day_24: Array<Object> = [];
  day_25: Array<Object> = [];
  day_26: Array<Object> = [];
  day_27: Array<Object> = [];
  day_28: Array<Object> = [];
  day_29: Array<Object> = [];
  day_30: Array<Object> = [];
  day_31: Array<Object> = [];

  show_day_1: boolean = false;
  show_day_2: boolean = false;
  show_day_3: boolean = false;
  show_day_4: boolean = false;
  show_day_5: boolean = false;
  show_day_6: boolean = false;
  show_day_7: boolean = false;
  show_day_8: boolean = false;
  show_day_9: boolean = false;
  show_day_10: boolean = false;
  show_day_11: boolean = false;
  show_day_12: boolean = false;
  show_day_13: boolean = false;
  show_day_14: boolean = false;
  show_day_15: boolean = false;
  show_day_16: boolean = false;
  show_day_17: boolean = false;
  show_day_18: boolean = false;
  show_day_19: boolean = false;
  show_day_20: boolean = false;
  show_day_21: boolean = false;
  show_day_22: boolean = false;
  show_day_23: boolean = false;
  show_day_24: boolean = false;
  show_day_25: boolean = false;
  show_day_26: boolean = false;
  show_day_27: boolean = false;
  show_day_28: boolean = false;
  show_day_29: boolean = false;
  show_day_30: boolean = false;
  show_day_31: boolean = false;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.getByDayAndMonth(1, 'Julio');
    this.getByDayAndMonth(2, 'Julio');
    this.getByDayAndMonth(3, 'Julio');
    this.getByDayAndMonth(4, 'Julio');
    this.getByDayAndMonth(5, 'Julio');
    this.getByDayAndMonth(6, 'Julio');
    this.getByDayAndMonth(7, 'Julio');
    this.getByDayAndMonth(8, 'Julio');
    this.getByDayAndMonth(9, 'Julio');
    this.getByDayAndMonth(10, 'Julio');
    this.getByDayAndMonth(11, 'Julio');
    this.getByDayAndMonth(12, 'Julio');
    this.getByDayAndMonth(13, 'Julio');
    this.getByDayAndMonth(14, 'Julio');
    this.getByDayAndMonth(15, 'Julio');
    this.getByDayAndMonth(16, 'Julio');
    this.getByDayAndMonth(17, 'Julio');
    this.getByDayAndMonth(18, 'Julio');
    this.getByDayAndMonth(19, 'Julio');
    this.getByDayAndMonth(20, 'Julio');
    this.getByDayAndMonth(21, 'Julio');
    this.getByDayAndMonth(22, 'Julio');
    this.getByDayAndMonth(23, 'Julio');
    this.getByDayAndMonth(24, 'Julio');
    this.getByDayAndMonth(25, 'Julio');
    this.getByDayAndMonth(26, 'Julio');
    this.getByDayAndMonth(27, 'Julio');
    this.getByDayAndMonth(28, 'Julio');
    this.getByDayAndMonth(29, 'Julio');
    this.getByDayAndMonth(30, 'Julio');
    this.getByDayAndMonth(31, 'Julio');
  }


  async getByDayAndMonth(day: number, month: string) {
    this.taskService.getByDayAndAmonth(day, month).subscribe(res => {
      let empty: number = 0;
      let categories: Array<any> = [];
      let length_tasks: number = 0;
      let length_projects: number = 0;
      let length_notes: number = 0;
      let length_birthday: number = 0;

      length_tasks = res.tasks.filter((x) => x.category === 'Tarea').length;
      length_projects = res.tasks.filter((x) => x.category === 'Proyecto').length;
      length_notes = res.tasks.filter((x) => x.category === 'Nota').length;
      length_birthday = res.tasks.filter((x) => x.category === 'Cumpleaños').length;

      categories = [{ category: "Tarea", quantity: length_tasks },
      { category: "Proyecto", quantity: length_projects },
      { category: "Nota", quantity: length_notes },
      { category: "Cumpleaños", quantity: length_birthday }];

      // 1
      if (day === 1) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_1 = false : this.show_day_1 = true; return this.day_1 = categories;
      }
      //2
      if (day === 2) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_2 = false : this.show_day_2 = true; return this.day_2 = categories;
      }
      //3
      if (day === 3) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_3 = false : this.show_day_3 = true; return this.day_3 = categories;
      }
      //4
      if (day === 4) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_4 = false : this.show_day_4 = true; return this.day_4 = categories;
      }
      //5
      if (day === 5) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_5 = false : this.show_day_5 = true; return this.day_5 = categories;
      }
      //6
      if (day === 6) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_6 = false : this.show_day_6 = true; return this.day_6 = categories;
      }
      //7
      if (day === 7) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_7 = false : this.show_day_7 = true; return this.day_7 = categories;
      }
      //8
      if (day === 8) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_8 = false : this.show_day_8 = true; return this.day_8 = categories;
      }
      //9
      if (day === 9) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_9 = false : this.show_day_9 = true; return this.day_9 = categories;
      }
      //10
      if (day === 10) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_10 = false : this.show_day_10 = true; return this.day_10 = categories;
      }
      //11
      if (day === 11) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_11 = false : this.show_day_11 = true; return this.day_11 = categories;
      }
      //12
      if (day === 12) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_12 = false : this.show_day_12 = true; return this.day_12 = categories;
      }
      //13
      if (day === 13) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_13 = false : this.show_day_13 = true; return this.day_13 = categories;
      }
      //14
      if (day === 14) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_14 = false : this.show_day_14 = true; return this.day_14 = categories;
      }
      //15
      if (day === 15) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_15 = false : this.show_day_15 = true; return this.day_15 = categories;
      }
      //16
      if (day === 16) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_16 = false : this.show_day_16 = true; return this.day_16 = categories;
      }
      //17
      if (day === 17) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_17 = false : this.show_day_17 = true; return this.day_17 = categories;
      }
      //18
      if (day === 18) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_18 = false : this.show_day_18 = true; return this.day_18 = categories;
      }
      //19
      if (day === 19) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_19 = false : this.show_day_19 = true; return this.day_19 = categories;
      }
      //20
      if (day === 20) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_20 = false : this.show_day_20 = true; return this.day_20 = categories;
      }
      //21
      if (day === 21) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_21 = false : this.show_day_21 = true; return this.day_21 = categories;
      }
      //22
      if (day === 22) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_22 = false : this.show_day_22 = true; return this.day_22 = categories;
      }
      //23
      if (day === 23) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_23 = false : this.show_day_23 = true; return this.day_23 = categories;
      }
      //24
      if (day === 24) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_24 = false : this.show_day_24 = true; return this.day_24 = categories;
      }
      //25
      if (day === 25) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_25 = false : this.show_day_25 = true; return this.day_25 = categories;
      }
      //26
      if (day === 26) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_26 = false : this.show_day_26 = true; return this.day_26 = categories;
      }
      //27
      if (day === 27) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_27 = false : this.show_day_27 = true; return this.day_27 = categories;
      }
      //28
      if (day === 28) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_28 = false : this.show_day_28 = true; return this.day_28 = categories;
      }
      //29
      if (day === 29) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_29 = false : this.show_day_29 = true; return this.day_29 = categories;
      }
      //30
      if (day === 30) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_30 = false : this.show_day_30 = true; return this.day_30 = categories;
      }
      //31
      if (day === 31) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        empty === 4 ? this.show_day_31 = false : this.show_day_31= true; return this.day_31 = categories;
      }
    }, err => {
      console.log(err);
    })
  }

}
