import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseLessonsDTO } from './course-lessons.dto';

export const GETS_ONE_COURSE_LESSONS_DTO =
  new InjectionToken<GetsOneCourseLessonsDtoPort>(
    'GETS_ONE_COURSE_LESSONS_DTO'
  );

export interface GetsOneCourseLessonsDtoPort {
  getOne(id: string): Observable<CourseLessonsDTO | undefined>;
}
