import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { LessonQuery } from './lesson.query';

export const GETS_ALL_LESSON_QUERY = new InjectionToken<GetsAllLessonQueryPort>('GETS_ALL_LESSON_QUERY');

export interface GetsAllLessonQueryPort {
  getAllLessonQuery(): Observable<LessonQuery[]>;
}
