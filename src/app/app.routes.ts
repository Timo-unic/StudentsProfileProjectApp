import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'course', component: CoursePageComponent},
    {path: 'students', component: StudentsPageComponent}
];
