import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { LessonDTO } from './lesson.dto';

export const GETS_ALL_LESSON_DTO = new InjectionToken<GetsAllLessonDtoPort>('GETS_ALL_LESSON_DTO');

export interface GetsAllLessonDtoPort {
  getAll(criterion: Partial<LessonDTO>): Observable<LessonDTO[]>;
}
