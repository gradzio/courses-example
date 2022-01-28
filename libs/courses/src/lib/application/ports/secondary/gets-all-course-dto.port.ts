import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { CourseDTO } from './course.dto';

export const GETS_ALL_COURSE_DTO = new InjectionToken<GetsAllCourseDtoPort>('GETS_ALL_COURSE_DTO');

export interface GetsAllCourseDtoPort {
  getAll(criterion: Partial<CourseDTO>): Observable<CourseDTO[]>;
}
