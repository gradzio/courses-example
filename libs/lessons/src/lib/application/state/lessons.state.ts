import { Inject, Injectable } from '@angular/core';
import { ADDS_LESSON_DTO, AddsLessonDtoPort } from '../ports/secondary/adds-lesson-dto.port';
import { AddLessonCommandPort } from '../ports/primary/add-lesson-command.port';
import { AddLessonCommand } from '../ports/primary/add-lesson.command';

@Injectable()
export class LessonsState implements AddLessonCommandPort {
  constructor(@Inject(ADDS_LESSON_DTO) private _addsLesson: AddsLessonDtoPort) {
  }

  addLesson(command: AddLessonCommand): void {
    this._addsLesson.add({title:command.title, description:command.description})
  }
}
