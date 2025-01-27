import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, throwError } from 'rxjs';
import { ICourseProfile } from '../models/course-profile';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  errorServiceCourse: any;

  constructor(private http: HttpClient, public errorService: ErrorService) { }

  getCourses(): Observable<ICourseProfile[]> {
    return this.http.get<ICourseProfile[]>('https://localhost:7099/api/Course/courses').pipe(
      delay(1000),
      catchError(this.errorHandler.bind(this))
    )
  }
  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message);
    return throwError(() => error.message)
  }
}
