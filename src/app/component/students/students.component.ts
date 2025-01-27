import { Component, Input, OnInit } from '@angular/core';
import { IStudentProfile } from '../../models/student-profile';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardAppearance, MatCardModule} from '@angular/material/card';
import { StudentsService } from '../../services/students.service';


@Component({
  selector: 'app-students',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {
  
  @Input() student: IStudentProfile
  appearence: MatCardAppearance
  align: 'start' | 'end'

  constructor(private studentsService: StudentsService) { }

  removeStudentCard(students: IStudentProfile): void {
    this.studentsService.removeStudentProfile(students).subscribe(() => {
      this.studentsService.students = this.studentsService.students.filter(std =>std.id !== students.id)
    });
  }

  ngOnInit(): void {

  }
}
