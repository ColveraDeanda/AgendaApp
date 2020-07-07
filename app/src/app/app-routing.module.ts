import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { JanuaryCalendarComponent } from './components/calendar/january-calendar/january-calendar.component';
import { JulyCalendarComponent } from './components/calendar/july-calendar/july-calendar.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create/:month/:day', component: CreateTaskComponent},
  {path: 'update/:id', component: UpdateTaskComponent},
  {path: 'january-calendar', component: JanuaryCalendarComponent},
  {path: 'july-calendar', component: JulyCalendarComponent},
  {path: '**', component: ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
