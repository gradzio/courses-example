import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentQuery } from './student.query';

export const GETS_ALL_STUDENT_QUERY = new InjectionToken<GetsAllStudentQueryPort>('GETS_ALL_STUDENT_QUERY');

export interface GetsAllStudentQueryPort {
  getAllStudentQuery(): Observable<StudentQuery[]>;
}
