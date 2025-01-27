import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FocusDirective } from '../../directives/focus.directive';
import { StudentsService } from '../../services/students.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [MatButtonModule, ReactiveFormsModule, CommonModule, FormsModule, FocusDirective],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.scss'
})
export class CreateProfileComponent implements OnInit {

  constructor(private studentsService: StudentsService, private modalService: ModalService) { }

  form = new FormGroup({
    firstName: new FormControl<string>('',Validators.required),
    lastName: new FormControl<string>('', Validators.required),
    studentLogin: new FormControl<string>('', Validators.required),
    description: new FormControl<string>(''),
    dateOfBirth: new FormControl<Date>( new Date()), 
  })

  get firstName(){
    return this.form.controls.firstName as FormControl;
  }

  get lastName(){
    return this.form.controls.lastName as FormControl;
  }

  get studentLogin(){
    return this.form.controls.studentLogin as FormControl;
  }
  ngOnInit(): void {
    
  }

  submit(): void {
    // console.log(this.form.value);
    this.studentsService.createStudentProfile(
    {
      firstName: this.form.value.firstName as string,
      lastName: this.form.value.lastName as string,
      studentLogin: this.form.value.studentLogin as string,
      description: this.form.value.description as string,
      dateOfBirth: this.form.value.dateOfBirth as Date
    }
  ).subscribe({
    next: () => {
      console.log('This was successful!');
      this.modalService.close();
    },
    error: (err) => {
      console.error('There was an error!', err);
    }
  })
  }

}

// subscribe({next: (response) => {console.log('This was successful!');this.modalService.close();}})