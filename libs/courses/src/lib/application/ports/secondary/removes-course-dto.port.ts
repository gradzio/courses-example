import { InjectionToken } from '@angular/core';

export const REMOVES_COURSE_DTO = new InjectionToken<RemovesCourseDtoPort>('REMOVES_COURSE_DTO');

export interface RemovesCourseDtoPort {
  remove(id: string): void;
}
