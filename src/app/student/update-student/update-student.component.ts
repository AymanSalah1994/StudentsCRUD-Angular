import { Component ,Input} from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {

  @Input() updateSingleStudent:Student = new Student(33,"Dummy", 33) ;
}
