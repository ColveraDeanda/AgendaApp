import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task/task.service';
import {ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
  providers: [TaskService]
})
export class UpdateTaskComponent implements OnInit {

  id: string;
  task: Task;

  categories: Array<Object> = [];
  errors: Array<String> = [];
  error_msj: string = "";
  success_msj: string = "";

  constructor(private taskService: TaskService, 
              private _route: ActivatedRoute) { 
      this.task = new Task('','','','',0,'');
  }

  ngOnInit(): void {
    this._route.params.subscribe(res => {
      this.id = res.id;
    });
    this.getTask();

    this.categories = [
      {id: "NOT", name: "Nota"},
      {id: "CMP", name: "Cumpleaños"},
      {id: "TAR", name: "Tarea"},
      {id: "PRO", name: "Proyecto"}
    ]
  }


  getTask() {
    this.taskService.getTask(this.id).subscribe(res => {
      this.task = res.task;
      console.log(this.task);
    }, err => {
      console.log(err);
    });
  }

  updateTask(form: NgForm) {
    this.errors = [];
    this.taskService.updateTask(this.id, this.task).subscribe((res) => {
      console.log(res);
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
        console.log(this.error_msj);
      } else {
        this.errors.push(err.error.repeated);
        this.error_msj = this.errors.join()
        this.error_msj = this.error_msj.slice(0, 1).toUpperCase() + this.error_msj.slice(1) + ".";
        setTimeout(() => {
          this.error_msj = '';
        }, 3000);
        console.log(this.error_msj);
      }
    });
  }

}
