import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDetailFormComponent } from './employee-details/employee-detail-form/employee-detail-form.component';
import {HttpClientModule} from  '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeDetailFormComponent,
    HttpClientModule

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
