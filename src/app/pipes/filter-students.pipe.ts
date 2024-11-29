import { Pipe, PipeTransform } from '@angular/core';
import { IStudentProfile } from '../models/student-profile';

@Pipe({
  name: 'filterStudents'
})
export class FilterStudentsPipe implements PipeTransform {

  transform(students: IStudentProfile[], search: string): IStudentProfile[] {
    return students.filter(student => student.lastName.toLowerCase().includes(search.toLowerCase()));
  }

}
