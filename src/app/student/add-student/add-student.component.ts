import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  @Output() onAddClick:EventEmitter<Student> = new EventEmitter() ;
  newAddStudent:Student = new Student(44,"Add newSTD" , 44) ;
  // Dummy Data To Check Connection

  addNewStudent()
  {
    this.onAddClick.emit(this.newAddStudent) ; //newAddStudent Object is always Connected
    // It is Connected using the the ngModel
  }
}
