import { InjectionToken } from '@angular/core';
import { AddLessonCommand } from './add-lesson.command';

export const ADD_LESSON_COMMAND = new InjectionToken<AddLessonCommandPort>('ADD_LESSON_COMMAND');

export interface AddLessonCommandPort {
  addLesson(command: AddLessonCommand): void;
}
