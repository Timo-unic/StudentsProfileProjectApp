import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudentProfile } from '../models/student-profile';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';
import { IAddStudentProfile } from '../models/add-student-profile';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  students: IStudentProfile[] = []

  // getAllStudentProfiles(): Observable<IStudentProfile[]>{
  //   return this.http.get<IStudentProfile[]>('https://localhost:7099/api/StudentProfile/students').pipe(
  //     retry(2),
  //     tap((students) => this.students = students,
  //     catchError(this.errorHandler.bind(this))
  //   )) // Replace with your API endpoint
  // }

  // private errorHandler(error: HttpErrorResponse) {
  //   this.errorService.handle(error.message);
  //   return throwError(() => error.message)
  // }

  // createStudentProfile(student: IStudentProfile): Observable<IAddStudentProfile[]> {
  //   return this.http.post<IAddStudentProfile[]>('https://localhost:7099/api/StudentProfile/profile', student)
  //   .pipe(tap((person) => this.students.push(person))) 
  // }
}
