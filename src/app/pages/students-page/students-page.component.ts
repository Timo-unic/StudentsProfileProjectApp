import { Component, OnInit } from '@angular/core';
import { StudentsComponent } from "../../component/students/students.component";
import { CommonModule } from '@angular/common';
import { StudentsService } from '../../services/students.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from "../../component/modal/modal.component";
import { CreateProfileComponent } from "../../component/create-profile/create-profile.component";
import { ModalService } from '../../services/modal.service';
import { FormsModule } from '@angular/forms';
import { FilterStudentsPipe } from "../../pipes/filter-students.pipe";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { students } from '../../data/students';



@Component({
  selector: 'app-students-page',
  imports: [StudentsComponent, CommonModule, MatDialogModule, MatButtonModule, 
    ModalComponent, CreateProfileComponent, FormsModule, FilterStudentsPipe,
     MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss'
})
export class StudentsPageComponent implements OnInit {
  // students: IStudentProfile[] = data
  loading = false;
  term = ''
  
  // students: IStudentProfile[] = []   
  // students$: Observable<IStudentProfile[]>  //implements OnInit

  constructor(public studentsService: StudentsService, public modalService: ModalService){} 

  ngOnInit(): void {
    this.loading = true;
    // this.students$ = this.studentsService.getAllStudentProfiles().pipe(tap(() => this.loading = false));


    this.studentsService.getAllStudentProfiles().subscribe(students =>{
      this.studentsService.students = students; 
      console.log(students); 
      this.loading = false;
    })
  }
}

// {next: (response) => {this.studentProfiles = response;}}
// (res) =>{console.log(res); this.loading = false;}