import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IStudentProfile } from '../../models/student-profile';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardAppearance, MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-students',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  @Input() student: IStudentProfile
  appearence: MatCardAppearance
  align: 'start' | 'end'
}
