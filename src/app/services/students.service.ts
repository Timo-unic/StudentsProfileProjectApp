import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudentProfile } from '../models/student-profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getAllStudentProfiles(): Observable<IStudentProfile[]>{
    return this.http.get<IStudentProfile[]>('https://localhost:44317/api/StudentProfile/students'); // Replace with your API endpoint
  }
}
