import { Component ,EventEmitter,Input, Output} from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {

  @Output() onSaveClick:EventEmitter<Student> = new EventEmitter() ;
  @Input() updateSingleStudent:Student = new Student(33,"Dummy", 33) ;

  saveUpdate()
  {
    this.onSaveClick.emit(this.updateSingleStudent) ;
  }

  clear()
  {
    this.onSaveClick.emit(new Student(-777,"",-777)) ;
  }
}
