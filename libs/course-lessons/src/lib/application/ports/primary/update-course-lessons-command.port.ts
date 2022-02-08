import { InjectionToken } from '@angular/core';
import { UpdateCourseLessonsCommand } from './update-course-lessons.command';

export const UPDATE_COURSE_LESSONS_COMMAND = new InjectionToken<UpdateCourseLessonsCommandPort>('UPDATE_COURSE_LESSONS_COMMAND');

export interface UpdateCourseLessonsCommandPort {
  updateCourseLessons(command: UpdateCourseLessonsCommand): void;
}
