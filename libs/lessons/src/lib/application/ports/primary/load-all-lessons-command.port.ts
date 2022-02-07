import { InjectionToken } from '@angular/core';
import { LoadAllLessonsCommand } from './load-all-lessons.command';

export const LOAD_ALL_LESSONS_COMMAND = new InjectionToken<LoadAllLessonsCommandPort>('LOAD_ALL_LESSONS_COMMAND');

export interface LoadAllLessonsCommandPort {
  loadAllLessons(command: LoadAllLessonsCommand): void;
}
