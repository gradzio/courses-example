import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { CourseDTO } from './course.dto';

export const GETS_ONE_COURSE_DTO = new InjectionToken<GetsOneCourseDtoPort>('GETS_ONE_COURSE_DTO');

export interface GetsOneCourseDtoPort {
  getOne(id: string): Observable<CourseDTO | undefined>;
}
