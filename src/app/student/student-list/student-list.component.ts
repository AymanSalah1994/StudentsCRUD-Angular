import { Component } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

//
export class StudentListComponent {

  students : Student[] = [
    // A List Of Students
    new Student(1,"Ayman" , 28) ,
    new Student(2,"Khaled" , 26),
    new Student(3,"Suzan" , 30)
  ] ;

  outPutStudentDetails:Student = new Student(6,"outStd" ,6) ;
  singleDetailFlag = false  ; // This is the initial Value So that the Details Section is Not Shown
  showDetails(id:number)
  {
     this.students
     .forEach(eachStudent => {
        if (eachStudent.id == id)
        {
          this.outPutStudentDetails = eachStudent ;
          this.singleDetailFlag = true ;
        }
     });
  }

  toggleHide()
  {
    this.singleDetailFlag = !this.singleDetailFlag ;
  }

}
