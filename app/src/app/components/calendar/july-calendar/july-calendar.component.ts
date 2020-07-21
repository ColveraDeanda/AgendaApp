import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task/task.service';
import { Task } from '../../../models/task.model';
import Swal from 'sweetalert2'

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

  tasks_detail: Array<Task> = [];
  day_detail: number;
  month_detail: string;
  message_data: string;
  birthdays: number;
  notes: number;
  projects: number;
  tasks: number;

  date = new Date();
  actual_day: number;
  actual_day_1: boolean = false;
  actual_day_2: boolean = false;
  actual_day_3: boolean = false;
  actual_day_4: boolean = false;
  actual_day_5: boolean = false;
  actual_day_6: boolean = false;
  actual_day_7: boolean = false;
  actual_day_8: boolean = false;
  actual_day_9: boolean = false;
  actual_day_10: boolean = false;
  actual_day_11: boolean = false;
  actual_day_12: boolean = false;
  actual_day_13: boolean = false;
  actual_day_14: boolean = false;
  actual_day_15: boolean = false;
  actual_day_16: boolean = false;
  actual_day_17: boolean = false;
  actual_day_18: boolean = false;
  actual_day_19: boolean = false;
  actual_day_20: boolean = false;
  actual_day_21: boolean = false;
  actual_day_22: boolean = false;
  actual_day_23: boolean = false;
  actual_day_24: boolean = false;
  actual_day_25: boolean = false;
  actual_day_26: boolean = false;
  actual_day_27: boolean = false;
  actual_day_28: boolean = false;
  actual_day_29: boolean = false;
  actual_day_30: boolean = false;
  actual_day_31: boolean = false;

  constructor(private taskService: TaskService) {
    this.actual_day = this.date.getDate();
  }

  ngOnInit(): void {
    this.getCategories();
    this.actualDay();
    this.getByDayAndMonth(1, 'July');
    this.getByDayAndMonth(2, 'July');
    this.getByDayAndMonth(3, 'July');
    this.getByDayAndMonth(4, 'July');
    this.getByDayAndMonth(5, 'July');
    this.getByDayAndMonth(6, 'July');
    this.getByDayAndMonth(7, 'July');
    this.getByDayAndMonth(8, 'July');
    this.getByDayAndMonth(9, 'July');
    this.getByDayAndMonth(10, 'July');
    this.getByDayAndMonth(11, 'July');
    this.getByDayAndMonth(12, 'July');
    this.getByDayAndMonth(13, 'July');
    this.getByDayAndMonth(14, 'July');
    this.getByDayAndMonth(15, 'July');
    this.getByDayAndMonth(16, 'July');
    this.getByDayAndMonth(17, 'July');
    this.getByDayAndMonth(18, 'July');
    this.getByDayAndMonth(19, 'July');
    this.getByDayAndMonth(20, 'July');
    this.getByDayAndMonth(21, 'July');
    this.getByDayAndMonth(22, 'July');
    this.getByDayAndMonth(23, 'July');
    this.getByDayAndMonth(24, 'July');
    this.getByDayAndMonth(25, 'July');
    this.getByDayAndMonth(26, 'July');
    this.getByDayAndMonth(27, 'July');
    this.getByDayAndMonth(28, 'July');
    this.getByDayAndMonth(29, 'July');
    this.getByDayAndMonth(30, 'July');
    this.getByDayAndMonth(31, 'July');
  }


  // Main screen
  async getByDayAndMonth(day: number, month: string) {
    this.taskService.getByDayAndAmonth(day, month).subscribe(res => {
      let empty: number = 0;
      let categories: Array<any> = [];
      let length_tasks: number = 0;
      let length_projects: number = 0;
      let length_notes: number = 0;
      let length_birthday: number = 0;

      length_tasks = res.tasks.filter((x) => x.category === 'Task').length;
      length_projects = res.tasks.filter((x) => x.category === 'Project').length;
      length_notes = res.tasks.filter((x) => x.category === 'Note').length;
      length_birthday = res.tasks.filter((x) => x.category === 'Birthday').length;

      categories = [{ category: "Tasks", quantity: length_tasks },
      { category: "Projects", quantity: length_projects },
      { category: "Notes", quantity: length_notes },
      { category: "Birthdays", quantity: length_birthday }];

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
        empty === 4 ? this.show_day_31 = false : this.show_day_31 = true; return this.day_31 = categories;
      }
    }, err => {
      console.log(err);
    })
  }

  // Charging data in modal
  getByDayAndMonthDetail(day: number, month: string) {
    this.taskService.getByDayAndAmonth(day, month).subscribe(res => {
      if (res.tasks.length === 0) {
        this.message_data = 'No records have been kept';
      } else {
        this.message_data = null;
        this.tasks_detail = res.tasks;
        this.day_detail = this.tasks_detail[0].day;
        this.month_detail = this.tasks_detail[0].month;
      }
    }, err => {
      console.log(err);
    })
  }

  deleteTask(id: string, day: number) {
    Swal.fire({
      title: 'Do you really want to eliminate it?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.taskService.deleteTask(id).subscribe(res => {
          this.getCategories();
          this.taskService.getByDayAndAmonth(this.day_detail, this.month_detail)
            .subscribe(res => {
              this.tasks_detail = res.tasks;
            }, err => {
              console.log(err);
            });
            // All days.. Again
            if(day === 1) this.getByDayAndMonth(1, 'July');
            if(day === 2) this.getByDayAndMonth(2, 'July');
            if(day === 3) this.getByDayAndMonth(3, 'July');
            if(day === 4) this.getByDayAndMonth(4, 'July');
            if(day === 5) this.getByDayAndMonth(5, 'July');
            if(day === 6) this.getByDayAndMonth(6, 'July');
            if(day === 7) this.getByDayAndMonth(7, 'July');
            if(day === 8) this.getByDayAndMonth(8, 'July');
            if(day === 9) this.getByDayAndMonth(9, 'July');
            if(day === 10) this.getByDayAndMonth(10, 'July');
            if(day === 11) this.getByDayAndMonth(11, 'July');
            if(day === 12) this.getByDayAndMonth(12, 'July');
            if(day === 13) this.getByDayAndMonth(13, 'July');
            if(day === 14) this.getByDayAndMonth(14, 'July');
            if(day === 15) this.getByDayAndMonth(15, 'July');
            if(day === 16) this.getByDayAndMonth(16, 'July');
            if(day === 17) this.getByDayAndMonth(17, 'July');
            if(day === 18) this.getByDayAndMonth(18, 'July');
            if(day === 19) this.getByDayAndMonth(19, 'July');
            if(day === 20) this.getByDayAndMonth(20, 'July');
            if(day === 21) this.getByDayAndMonth(21, 'July');
            if(day === 22) this.getByDayAndMonth(22, 'July');
            if(day === 23) this.getByDayAndMonth(23, 'July');
            if(day === 24) this.getByDayAndMonth(24, 'July');
            if(day === 25) this.getByDayAndMonth(25, 'July');
            if(day === 26) this.getByDayAndMonth(26, 'July');
            if(day === 27) this.getByDayAndMonth(27, 'July');
            if(day === 28) this.getByDayAndMonth(28, 'July');
            if(day === 29) this.getByDayAndMonth(29, 'July');
            if(day === 30) this.getByDayAndMonth(30, 'July');
            if(day === 31) this.getByDayAndMonth(31, 'July');
        }, err => {
          console.log(err);
        });
      } else {
        // console.log('Petición cancelada.');
      }
    })
  }

  getCategories() {
    this.taskService.getCategoriesByMonth('July').subscribe(res => {
      if (!res.message) {
        this.birthdays = res.birthday;
        this.notes = res.notes;
        this.projects = res.projects;
        this.tasks = res.tasks;
      } else {
        this.birthdays = 0;
        this.notes = 0;
        this.projects = 0;
        this.tasks = 0;
      }
    }, err => {
      console.log(err);
    });
  }

  // Showing actual day
  actualDay() {
    switch(this.actual_day) {
      case 1: return this.actual_day_1 = true;
      case 2: return this.actual_day_2 = true;
      case 3: return this.actual_day_3 = true;
      case 4: return this.actual_day_4 = true;
      case 5: return this.actual_day_5 = true;
      case 6: return this.actual_day_6 = true;
      case 7: return this.actual_day_7 = true;
      case 8: return this.actual_day_8 = true;
      case 9: return this.actual_day_9 = true;
      case 10: return this.actual_day_10 = true;
      case 11: return this.actual_day_11 = true;
      case 12: return this.actual_day_12 = true;
      case 13: return this.actual_day_13 = true;
      case 14: return this.actual_day_14 = true;
      case 15: return this.actual_day_15 = true;
      case 16: return this.actual_day_16 = true;
      case 17: return this.actual_day_17 = true;
      case 18: return this.actual_day_18 = true;
      case 19: return this.actual_day_19 = true;
      case 20: return this.actual_day_20 = true;
      case 21: return this.actual_day_21 = true;
      case 22: return this.actual_day_22 = true;
      case 23: return this.actual_day_23 = true;
      case 24: return this.actual_day_24 = true;
      case 25: return this.actual_day_25 = true;
      case 26: return this.actual_day_26 = true;
      case 27: return this.actual_day_27 = true;
      case 28: return this.actual_day_28 = true;
      case 29: return this.actual_day_29 = true;
      case 30: return this.actual_day_30 = true;
      case 31: return this.actual_day_31 = true;
    }

  }
}
