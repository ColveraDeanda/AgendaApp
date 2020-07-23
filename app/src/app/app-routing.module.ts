import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTaskComponent } from './components/create-task/create-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { JulyCalendarComponent } from './components/calendar/july-calendar/july-calendar.component';
import { AugustComponent } from './components/calendar/august-calendar/august.component';
import { SeptemberCalendarComponent } from './components/calendar/september-calendar/september-calendar.component';
import { OctoberCalendarComponent } from './components/calendar/october-calendar/october-calendar.component';


const routes: Routes = [
  {path: '',  pathMatch: 'full', redirectTo: 'july'},
  {path: 'create/:month/:day', component: CreateTaskComponent},
  {path: 'update/:id', component: UpdateTaskComponent},
  {path: 'july', component: JulyCalendarComponent},
  {path: 'august', component: AugustComponent},
  {path: 'september', component: SeptemberCalendarComponent},
  {path: 'october', component: OctoberCalendarComponent},
  {path: '**', component: JulyCalendarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
