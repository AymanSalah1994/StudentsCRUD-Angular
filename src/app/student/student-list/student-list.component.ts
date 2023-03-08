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
  tempUpdateDetails:Student = new Student(-1,"update" ,-1) ;
  singleDetailFlag = false  ;
   // This is the initial Value So that the Details Section is Not Shown
  updateDetailFlag = false  ;

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

  pushNewStudent(newSTD:Student)
  {
    this.students.push(new Student(newSTD.id , newSTD.name , newSTD.age));
  }

  deleteStudent(id:number)
  {
  let toDeleteStd = new Student(0,"",0) ;
    for (let index = 0; index < this.students.length; index++) {
      if (id == this.students[index].id)
      {
        toDeleteStd = this.students[index] ;
      }
    } // End of For
    this.students = this.students.filter(function name(eachItem) {
      return eachItem != toDeleteStd ;
    }) ;
  }

  updateTempDataShowForm(id:number)
  {
    // tempUpdateDetails << Change His data in the Form
    this.updateDetailFlag = true ; // Show the Form
    let toUpdateStd = new Student(0,"",0) ;
    for (let index = 0; index < this.students.length; index++) {
      if (id == this.students[index].id)
      {
        toUpdateStd = this.students[index] ;
      }
    } // End of For

    this.tempUpdateDetails = toUpdateStd ;
    // Reference is the SAME
    // NO NEED TO EMIT DATA Of Student Object
    // AND SAVE IT when Save Button is Clicked
    // I think only Removing Update Form is OK !
    // But We Can Do the Emit Part If we Want

    // We will Only Emit the Click Event so that the Form Is Hidden 
  }

  updateStudent()
  {}
}
