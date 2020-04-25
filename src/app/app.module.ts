import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import {Model} from './model/model';
import { ServiceService } from './service/service.service';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HobbiesComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [Model],
  bootstrap: [AppComponent]
})
export class AppModule { }
