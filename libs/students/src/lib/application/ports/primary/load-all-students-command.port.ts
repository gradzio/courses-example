import { InjectionToken } from '@angular/core';
import { LoadAllStudentsCommand } from './load-all-students.command';

export const LOAD_ALL_STUDENTS_COMMAND = new InjectionToken<LoadAllStudentsCommandPort>('LOAD_ALL_STUDENTS_COMMAND');

export interface LoadAllStudentsCommandPort {
  loadAllStudents(command: LoadAllStudentsCommand): void;
}
