import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { SignleStudentDetailsComponent } from './student/signle-student-details/signle-student-details.component';
import { AddStudentComponent } from './student/add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    SignleStudentDetailsComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
