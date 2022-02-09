import { InjectionToken } from '@angular/core';
import { SetCourseIdCommand } from './set-course-id.command';

export const SET_COURSE_ID_COMMAND = new InjectionToken<SetCourseIdCommandPort>('SET_COURSE_ID_COMMAND');

export interface SetCourseIdCommandPort {
  setCourseId(command: SetCourseIdCommand): void;
}
