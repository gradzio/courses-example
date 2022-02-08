import { InjectionToken } from '@angular/core';
import { LoadCourseLessonsCommand } from './load-course-lessons.command';

export const LOAD_COURSE_LESSONS_COMMAND = new InjectionToken<LoadCourseLessonsCommandPort>('LOAD_COURSE_LESSONS_COMMAND');

export interface LoadCourseLessonsCommandPort {
  loadCourseLessons(command: LoadCourseLessonsCommand): void;
}
