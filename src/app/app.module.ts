import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OptionComponent } from './option/option.component';
import { PassengerFormComponent } from './passenger-form/passenger-form.component';
import { DriverFormComponent } from './driver-form/driver-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OptionComponent,
    PassengerFormComponent,
    DriverFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }