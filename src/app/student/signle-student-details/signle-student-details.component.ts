import { Component , Input } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-signle-student-details',
  templateUrl: './signle-student-details.component.html',
  styleUrls: ['./signle-student-details.component.css']
})
export class SignleStudentDetailsComponent {

  @Input() singleStudent:Student = new Student(33,"Dummy", 33) ;

}
