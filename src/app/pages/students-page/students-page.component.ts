import { Component, OnInit } from '@angular/core';
import { StudentsComponent } from "../../component/students/students.component";
import { IStudentProfile } from '../../models/student-profile';
import { CommonModule } from '@angular/common';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students-page',
  imports: [StudentsComponent, CommonModule],
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss'
})
export class StudentsPageComponent implements OnInit {
  loading = false;
  
  students: IStudentProfile[] = []

  constructor(private studentService: StudentsService){}

  ngOnInit(): void {
    this.loading = true;
    this.studentService.getAllStudentProfiles().subscribe(students =>{
      this.students = students
      this.loading = false;
    })
  }
}
