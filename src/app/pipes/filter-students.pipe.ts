import { Pipe, PipeTransform } from '@angular/core';
import { IStudentProfile } from '../models/student-profile';

@Pipe({
  name: 'filterStudents'
})
export class FilterStudentsPipe implements PipeTransform {

  transform(students: IStudentProfile[], search: string): IStudentProfile[] {
    if (search.length === 0) return students;
    return students.filter(student => student.lastName.toLowerCase().includes(search.toLowerCase()));
  }

}
