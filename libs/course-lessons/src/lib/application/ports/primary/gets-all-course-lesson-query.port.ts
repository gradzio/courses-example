import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseLessonQuery } from './course-lesson.query';

export const GETS_ALL_COURSE_LESSON_QUERY = new InjectionToken<GetsAllCourseLessonQueryPort>('GETS_ALL_COURSE_LESSON_QUERY');

export interface GetsAllCourseLessonQueryPort {
  getAllCourseLessonQuery(): Observable<CourseLessonQuery[]>;
}
