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
      {id: "NOT", name: "Nota"},
      {id: "CMP", name: "Cumpleaños"},
      {id: "TAR", name: "Tarea"},
      {id: "PRO", name: "Proyecto"}
    ]
  }

  saveTask(form) {
    this.errors = [];
    this.taskService.saveTask(this.task).subscribe((res) => {
      console.log(res);
      this.success_msj = 'Saved';
    }, err => {
      console.log(err);
      this.success_msj = 'Not saved';
      if(err.error.errors) {
        this.errors.push(err.error.errors);
        this.error_msj = this.errors.join()
        this.error_msj = this.error_msj.slice(0,2).toUpperCase() + this.error_msj.slice(2) + ".";
        console.log(this.error_msj);
      } else {
        this.errors.push(err.error.repeated);
        this.error_msj = this.errors.join()
        this.error_msj = this.error_msj.slice(0, 1).toUpperCase() + this.error_msj.slice(1) + ".";
        console.log(this.error_msj);
      }
    });
    form.reset();
  }


}
