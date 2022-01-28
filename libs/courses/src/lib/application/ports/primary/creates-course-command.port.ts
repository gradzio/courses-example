import { InjectionToken } from '@angular/core';

export const CREATES_COURSE_COMMAND = new InjectionToken<CreatesCourseCommandPort>('CREATES_COURSE_COMMAND');

export interface CreatesCourseCommandPort {
  createCourse(title: string, paragraph: string): void;
}
