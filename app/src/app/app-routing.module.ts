import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { JulyCalendarComponent } from './components/calendar/july-calendar/july-calendar.component';
import { AugustComponent } from './components/calendar/august-calendar/august.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create/:month/:day', component: CreateTaskComponent},
  {path: 'update/:id', component: UpdateTaskComponent},
  {path: 'july-calendar', component: JulyCalendarComponent},
  {path: 'august-calendar', component: AugustComponent},
  {path: '**', component: ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
