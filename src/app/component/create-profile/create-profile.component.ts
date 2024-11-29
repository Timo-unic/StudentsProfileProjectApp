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

  constructor(private studentService: StudentsService, private modalService: ModalService) { }

  form = new FormGroup({
    name: new FormControl<string>('',[Validators.required]),
    surname: new FormControl<string>('', [Validators.required]),
    login: new FormControl<string>('', [Validators.required]),
    cardnumber: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    age: new FormControl<number>(0, [Validators.required]),
    dateOfBirth: new FormControl<Date>(new Date(), [Validators.required]), 
  })
  ngOnInit(): void {
    
  }

  submit(): void {
    console.log(this.form.value);
  //   this.studentService.createStudentProfile(
  //   {
  //     id: '',
  //     firstName: this.form.value.name as string,
  //     lastName: this.form.value.surname as string,
  //     studentLogin: this.form.value.login as string,
  //     studentCardNumber: this.form.value.cardnumber as string,
  //     description: this.form.value.description as string,
  //     age: this.form.value.age as number,
  //     image: '',
  //     dateOfBirth: '',
  //     isGraduated: false,
  //     isProfileVisible: false,
  //     additionalInfo: ''
  //   }
  // ).subscribe(() => {
  //   this.modalService.close();
  // })
  }

}
