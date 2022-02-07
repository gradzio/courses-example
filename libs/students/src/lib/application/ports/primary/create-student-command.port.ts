import { InjectionToken } from '@angular/core';
import { CreateStudentCommand } from './create-student.command';

export const CREATE_STUDENT_COMMAND = new InjectionToken<CreateStudentCommandPort>('CREATE_STUDENT_COMMAND');

export interface CreateStudentCommandPort {
  createStudent(command: CreateStudentCommand): void;
}
