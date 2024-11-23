import { Component, Input } from '@angular/core';
import { IStudentProfile } from '../../models/student-profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  @Input() student: IStudentProfile
}
