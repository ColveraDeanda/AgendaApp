import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [TaskService]
})
export class CreateTaskComponent implements OnInit {

  task: Task;
  day: number;
  month: string;
  categories: Array<Object> = [];
  errors: Array<String> = [];
  error_msj: string = "";
  success_msj: string = "";
  
  constructor(private taskService: TaskService,
              private _route: ActivatedRoute) {
    this._route.params.subscribe((res) => {
      this.day = +res.day;
      this.month = res.month
    });
    this.task = new Task('', '', '', '' , this.day, this.month);
  }

  ngOnInit(): void {
    this.categories = [
      {id: "NOT", name: "Note"},
      {id: "CMP", name: "Birthday"},
      {id: "TAR", name: "Task"},
      {id: "PRO", name: "Project"}
    ]
  }

  saveTask(form) {
    this.errors = [];
    this.taskService.saveTask(this.task).subscribe((res) => {
      this.success_msj = 'Saved';
      setTimeout(() => {
        this.success_msj = '';
      }, 7000);
    }, err => {
      console.log(err);
      this.success_msj = 'Not saved';
      if(err.error.errors) {
        this.errors.push(err.error.errors);
        this.error_msj = this.errors.join()
        this.error_msj = this.error_msj.slice(0,2).toUpperCase() + this.error_msj.slice(2) + ".";
        setTimeout(() => {
          this.error_msj = '';
        }, 7000);
      } else {
        this.errors.push(err.error.repeated);
        this.error_msj = this.errors.join()
        this.error_msj = this.error_msj.slice(0, 1).toUpperCase() + this.error_msj.slice(1) + ".";
        setTimeout(() => {
          this.error_msj = '';
        }, 7000);
      }
    });
    form.reset();
  }


}
