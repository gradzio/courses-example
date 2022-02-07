import { InjectionToken } from '@angular/core';
import { StudentDTO } from './student.dto';

export const ADDS_STUDENT_DTO = new InjectionToken<AddsStudentDtoPort>('ADDS_STUDENT_DTO');

export interface AddsStudentDtoPort {
  add(student: Partial<StudentDTO>): void;
}
