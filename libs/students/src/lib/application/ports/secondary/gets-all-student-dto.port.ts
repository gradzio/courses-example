import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentDTO } from './student.dto';

export const GETS_ALL_STUDENT_DTO = new InjectionToken<GetsAllStudentDtoPort>('GETS_ALL_STUDENT_DTO');

export interface GetsAllStudentDtoPort {
  getAll(criterion?: Partial<StudentDTO>): Observable<StudentDTO[]>;
}
