import { InjectionToken } from '@angular/core';
import { CourseDTO } from './course.dto';

export const ADDS_COURSE_DTO = new InjectionToken<AddsCourseDtoPort>('ADDS_COURSE_DTO');

export interface AddsCourseDtoPort {
  add(item: Partial<CourseDTO>): void;
}
