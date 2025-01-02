import { Component, Input } from '@angular/core';
import { ICourseProfile } from '../../models/course-profile';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-courses',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  @Input() course: ICourseProfile;

}
