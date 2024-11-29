import { Component, OnInit } from '@angular/core';
import { StudentsComponent } from "../../component/students/students.component";
import { IStudentProfile } from '../../models/student-profile';
import { CommonModule } from '@angular/common';
import { StudentsService } from '../../services/students.service';
import { Observable } from 'rxjs';
import { students as data } from '../../data/students';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from "../../component/modal/modal.component";
import { CreateProfileComponent } from "../../component/create-profile/create-profile.component";
import { ModalService } from '../../services/modal.service';
import { FormsModule } from '@angular/forms';
import { FilterStudentsPipe } from "../../pipes/filter-students.pipe";


@Component({
  selector: 'app-students-page',
  imports: [StudentsComponent, CommonModule, MatDialogModule, MatButtonModule, 
    ModalComponent, CreateProfileComponent, FormsModule, FilterStudentsPipe], //DialogComponent
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss'
})
export class StudentsPageComponent implements OnInit {
  students: IStudentProfile[] = data
  loading = false;
  term = ''
  
  // students: IStudentProfile[] = []   
  students$: Observable<IStudentProfile[]>  //implements OnInit

  constructor(public modalService: ModalService){} //public studentService: StudentsService,

  ngOnInit(): void {
  //   this.loading = true;
    // this.students$ = this.studentService.getAllStudentProfiles();


    // this.studentService.getAllStudentProfiles().subscribe((students) =>{
    //     console.log(students);
    //   // this.students = students
    // //   this.loading = false;
    // })
  }
}
