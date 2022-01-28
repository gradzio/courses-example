import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { CourseQuery } from './course.query';

export const GETS_COURSE_QUERY = new InjectionToken<GetsCourseQueryPort>('GETS_COURSE_QUERY');

export interface GetsCourseQueryPort {
  getCoursesQuery(): Observable<CourseQuery[]>;
}
