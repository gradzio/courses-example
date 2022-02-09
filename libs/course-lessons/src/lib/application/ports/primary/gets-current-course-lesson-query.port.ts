import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseLessonQuery } from './course-lesson.query';

export const GETS_CURRENT_COURSE_LESSON_QUERY =
  new InjectionToken<GetsCurrentCourseLessonQueryPort>(
    'GETS_CURRENT_COURSE_LESSON_QUERY'
  );

export interface GetsCurrentCourseLessonQueryPort {
  getCurrentCourseLessonQuery(): Observable<CourseLessonQuery>;
}
