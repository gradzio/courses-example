import { InjectionToken } from '@angular/core';
import { CourseLessonsDTO } from './course-lessons.dto';

export const SETS_COURSE_LESSONS_DTO = new InjectionToken<SetsCourseLessonsDtoPort>('SETS_COURSE_LESSONS_DTO');

export interface SetsCourseLessonsDtoPort {
  set(courseLessons: Partial<CourseLessonsDTO>): void;
}
