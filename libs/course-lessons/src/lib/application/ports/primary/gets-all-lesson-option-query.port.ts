import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { LessonOptionQuery } from './lesson-option.query';

export const GETS_ALL_LESSON_OPTION_QUERY = new InjectionToken<GetsAllLessonOptionQueryPort>('GETS_ALL_LESSON_OPTION_QUERY');

export interface GetsAllLessonOptionQueryPort {
  getAllLessonOptionQuery(): Observable<LessonOptionQuery[]>;
}
