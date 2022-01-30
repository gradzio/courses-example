import { InjectionToken } from '@angular/core';
import { DeleteCourseCommand } from './delete-course.command';

export const DELETE_COURSE_COMMAND = new InjectionToken<DeleteCourseCommandPort>('DELETE_COURSE_COMMAND');

export interface DeleteCourseCommandPort {
  deleteCourse(command: DeleteCourseCommand): void;
}
