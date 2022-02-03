import { InjectionToken } from '@angular/core';
import { LessonDTO } from './lesson.dto';

export const ADDS_LESSON_DTO = new InjectionToken<AddsLessonDtoPort>('ADDS_LESSON_DTO');

export interface AddsLessonDtoPort {
  add(item: Omit<LessonDTO,"id">): void;
}
