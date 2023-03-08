import { Component , EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-signle-student-details',
  templateUrl: './signle-student-details.component.html',
  styleUrls: ['./signle-student-details.component.css']
})
export class SignleStudentDetailsComponent {


  // In a Child Component to Deal with Parent (Parent = a Component that uses it )
  // Dealing with it Means Sending Data to it
  @Output() onHideButtonClick:EventEmitter<void> = new EventEmitter() ;
  // void is the type Of the Event , Because Emitter Fire an Event !!
  // IF WE WILL SEND DATA , THEN WE NEED TO SPECIFY TYPE 
  @Input() singleStudent:Student = new Student(33,"Dummy", 33) ;

  emitHide()
  {
    this.onHideButtonClick.emit() ;
  }
}
