import { InjectionToken } from '@angular/core';
import { CreateCourseCommand } from './create-course.command';

export const CREATE_COURSE_COMMAND = new InjectionToken<CreateCourseCommandPort>('CREATE_COURSE_COMMAND');

export interface CreateCourseCommandPort {
  createCourse(command: CreateCourseCommand): void;
}
