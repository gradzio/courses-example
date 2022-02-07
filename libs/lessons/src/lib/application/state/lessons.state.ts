import { Inject, Injectable } from '@angular/core';
import {
  ADDS_LESSON_DTO,
  AddsLessonDtoPort,
} from '../ports/secondary/adds-lesson-dto.port';
import { AddLessonCommandPort } from '../ports/primary/add-lesson-command.port';
import { AddLessonCommand } from '../ports/primary/add-lesson.command';
import {
  GETS_ALL_LESSON_DTO,
  GetsAllLessonDtoPort,
} from '../ports/secondary/gets-all-lesson-dto.port';
import { GetsAllLessonQueryPort } from '../ports/primary/gets-all-lesson-query.port';
import { LessonQuery } from '../ports/primary/lesson.query';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LessonDTO } from '../ports/secondary/lesson.dto';
import { LoadAllLessonsCommandPort } from '../ports/primary/load-all-lessons-command.port';
import { LoadAllLessonsCommand } from '../ports/primary/load-all-lessons.command';

@Injectable()
export class LessonsState
  implements LoadAllLessonsCommandPort, GetsAllLessonQueryPort, AddLessonCommandPort
{
  private _allLessonDtoSubject: ReplaySubject<LessonDTO[]> = new ReplaySubject<
    LessonDTO[]
  >();

  constructor(
    @Inject(GETS_ALL_LESSON_DTO) private _getsAllLesson: GetsAllLessonDtoPort, @Inject(ADDS_LESSON_DTO) private _addsLesson: AddsLessonDtoPort
  ) {
    this.loadAllLessons(new LoadAllLessonsCommand)

  }

  // addLesson(command: AddLessonCommand): void {
  //   this._addsLesson.add({title:command.title, description:command.description})
  // }

  // getAllLessonQuery(): Observable<LessonQuery[]> {
  //   return this._getsAllLesson.getAll({}).pipe(
  //     map(dtos => dtos.map(item => new LessonQuery(item.title)))
  //   )
  // }
  loadAllLessons(command: LoadAllLessonsCommand): void {
    this._getsAllLesson
      .getAll({})
      .subscribe((dtos: LessonDTO[]) => this._allLessonDtoSubject.next(dtos));
  }

  getAllLessonQuery(): Observable<LessonQuery[]> {
    return this._allLessonDtoSubject.pipe(
      map((dtos: LessonDTO[]) =>
        dtos.map((dto: LessonDTO) => new LessonQuery(dto.title))
      )
    );
  }

  addLesson(command: AddLessonCommand): void {
    this._addsLesson.add({title:command.title, description:command.description});
  }
}
