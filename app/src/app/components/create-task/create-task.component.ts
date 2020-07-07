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
  repetead: boolean;
  temp: string;
  
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
    this.temp = this.task.title;
    this.taskService.saveTask(this.task).subscribe((res) => {
      if(res.message) {
        this.repetead = true;
      } else {
        this.repetead = false;
        console.log(res);
      }
    });
    form.reset();
  }


}
