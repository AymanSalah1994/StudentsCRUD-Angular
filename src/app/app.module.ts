import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { SignleStudentDetailsComponent } from './student/signle-student-details/signle-student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    SignleStudentDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
