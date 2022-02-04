import { Inject, Injectable } from '@angular/core';
import { ADDS_LESSON_DTO, AddsLessonDtoPort } from '../ports/secondary/adds-lesson-dto.port';
import { AddLessonCommandPort } from '../ports/primary/add-lesson-command.port';
import { AddLessonCommand } from '../ports/primary/add-lesson.command';
import { GETS_ALL_LESSON_DTO, GetsAllLessonDtoPort } from '../ports/secondary/gets-all-lesson-dto.port';
import { map, Observable } from 'rxjs';
import { GetsAllLessonQueryPort } from '../ports/primary/gets-all-lesson-query.port';
import { LessonQuery } from '../ports/primary/lesson.query';

@Injectable()
export class LessonsState implements AddLessonCommandPort, GetsAllLessonQueryPort {
  constructor(@Inject(ADDS_LESSON_DTO) private _addsLesson: AddsLessonDtoPort, @Inject(GETS_ALL_LESSON_DTO) private _getsAllLesson: GetsAllLessonDtoPort) {
  }

  addLesson(command: AddLessonCommand): void {
    this._addsLesson.add({title:command.title, description:command.description})
  }

  getAllLessonQuery(): Observable<LessonQuery[]> {
    return this._getsAllLesson.getAll({}).pipe(
      map(dtos => dtos.map(item => new LessonQuery(item.title)))
    )
  }
}
