import { Component ,EventEmitter,Input, Output} from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {

  @Output() onSaveClick:EventEmitter<void> = new EventEmitter() ;
  @Input() updateSingleStudent:Student = new Student(33,"Dummy", 33) ;

  saveUpdate()
  {
    this.onSaveClick.emit() ; 
  }
}
