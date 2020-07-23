import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { JulyCalendarComponent } from './components/calendar/july-calendar/july-calendar.component';
import { AugustComponent } from './components/calendar/august-calendar/august.component';
import { SeptemberCalendarComponent } from './components/calendar/september-calendar/september-calendar.component';
import { OctoberCalendarComponent } from './components/calendar/october-calendar/october-calendar.component';
import { NovemberCalendarComponent } from './components/calendar/november-calendar/november-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    JulyCalendarComponent,
    AugustComponent,
    SeptemberCalendarComponent,
    OctoberCalendarComponent,
    NovemberCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
