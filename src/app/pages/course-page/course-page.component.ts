import { Component, OnInit } from '@angular/core';
import { CoursesComponent } from "../../component/courses/courses.component";
import { ICourseProfile } from '../../models/course-profile';
// import { courses as dataCourse } from '../../data/courses';
import { CommonModule } from '@angular/common';
import { CoursesService } from '../../services/courses.service';
import { GlobalErrorComponent } from "../../component/global-error/global-error.component";

@Component({
  selector: 'app-course-page',
  imports: [CoursesComponent, CommonModule, GlobalErrorComponent],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.scss'
})
export class CoursePageComponent implements OnInit {
  titleOfCourse = 'Courses Title';
  courses: ICourseProfile[] = []
  loadingCourses = false;
  
  constructor(private coursesService: CoursesService) { }
  ngOnInit(): void {
    this.loadingCourses = true;
    this.coursesService.getCourses().subscribe((courses) => {
    this.courses = courses})
    this.loadingCourses = false;
  }
}
