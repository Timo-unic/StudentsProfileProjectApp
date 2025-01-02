import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudentProfile } from '../models/student-profile';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: IStudentProfile[] = []

  private deleteApiUrl = 'https://localhost:7099/api/StudentProfile/student'

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  getAllStudentProfiles(): Observable<IStudentProfile[]>{
    return this.http.get<IStudentProfile[]>('https://localhost:7099/api/StudentProfile/students').pipe(
      catchError(this.errorHandler.bind(this)),
      tap((students) => this.students = students),
    ) // Replace with your API endpoint
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message)
  }

  createStudentProfile(students: IStudentProfile): Observable<IStudentProfile> {
    return this.http.post<IStudentProfile>('https://localhost:7099/api/StudentProfile/profile', students).pipe(
      catchError(this.errorHandler.bind(this)),
      tap((std) => this.students.push(std)),
    ) 
  }

  removeStudentProfile(students: IStudentProfile): Observable<IStudentProfile> {
    const url = `${this.deleteApiUrl}/${students.id}`
    return this.http.delete<IStudentProfile>(url).pipe(
      catchError(this.errorHandler.bind(this)),
    )
  }
}
