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
  day_12: Array<Object> = [];

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
    this.getByDayAndMonth(12, 'Julio');

    setTimeout(() => {
      console.log(this.day_1);
      console.log(this.day_2);

    }, 2000);


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
        if (empty === 4) {
          this.show_day_1 = false;
        } else {
          this.show_day_1 = true;
          return this.day_1 = categories;
        }
      }
      //2
      if (day === 2) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        if (empty === 4) {
          this.show_day_2 = false;
        } else {
          this.show_day_2 = true;
          return this.day_2 = categories;
        }
      }
      //3
      if (day === 3) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        if (empty === 4) {
          this.show_day_3 = false;
        } else {
          this.show_day_3 = true;
          return this.day_3 = categories;
        }
      }
      //4
      if (day === 4) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        if (empty === 4) {
          this.show_day_4 = false;
        } else {
          this.show_day_4 = true;
          return this.day_4 = categories;
        }
      }
      //5
      if (day === 5) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        if (empty === 4) {
          this.show_day_5 = false;
        } else {
          this.show_day_5 = true;
          return this.day_5 = categories;
        }
      }
      //6
      if (day === 6) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        if (empty === 4) {
          this.show_day_6 = false;
        } else {
          this.show_day_6 = true;
          return this.day_6 = categories;
        }
      }
      //7
      if (day === 7) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        if (empty === 4) {
          this.show_day_7 = false;
        } else {
          this.show_day_7 = true;
          return this.day_7 = categories;
        }
      }
      //8
      if (day === 8) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        if (empty === 4) {
          this.show_day_8 = false;
        } else {
          this.show_day_8 = true;
          return this.day_8 = categories;
        }
      }
      //9
      if (day === 9) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        if (empty === 4) {
          this.show_day_9 = false;
        } else {
          this.show_day_9 = true;
          return this.day_9 = categories;
        }
      }
      //10
      if (day === 10) {
        categories.map((x) => {
          if (x.quantity == 0) {
            empty++
          }
        });
        if (empty === 4) {
          this.show_day_10 = false;
        } else {
          this.show_day_10 = true;
          return this.day_10 = categories;
        }
      }


      if (day === 12) return this.day_12 = categories;

    }, err => {
      console.log(err);
      // if(day === 1) this.day_1.push(0,0,0,0);
    })
  }

}
