import { InjectionToken } from '@angular/core';

export const DELETES_COURSE_COMMAND = new InjectionToken<DeletesCourseCommandPort>('DELETES_COURSE_COMMAND');

export interface DeletesCourseCommandPort {
  deleteCourse(id: string): void;
}
