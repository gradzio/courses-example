import { Injectable, Inject } from '@angular/core';
import {
  SETS_COURSE_LESSONS_DTO,
  SetsCourseLessonsDtoPort,
} from '../ports/secondary/sets-course-lessons-dto.port';
import { UpdateCourseLessonsCommandPort } from '../ports/primary/update-course-lessons-command.port';
import { UpdateCourseLessonsCommand } from '../ports/primary/update-course-lessons.command';
import { LessonDTO } from '../../../../../lessons/src/lib/application/ports/secondary/lesson.dto';
import {
  GETS_ALL_LESSON_DTO,
  GetsAllLessonDtoPort,
} from '../../../../../lessons/src/lib/application/ports/secondary/gets-all-lesson-dto.port';
import { LoadAllLessonsCommandPort } from '../ports/primary/load-all-lessons-command.port';
import { LoadAllLessonsCommand } from '../ports/primary/load-all-lessons.command';
import {
  Observable,
  BehaviorSubject,
  ReplaySubject,
  combineLatest,
} from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { GetsAllLessonOptionQueryPort } from '../ports/primary/gets-all-lesson-option-query.port';
import { LessonOptionQuery } from '../ports/primary/lesson-option.query';
import { SetCourseIdCommandPort } from '../ports/primary/set-course-id-command.port';
import { SetCourseIdCommand } from '../ports/primary/set-course-id.command';
import { GetsAllCourseLessonQueryPort } from '../ports/primary/gets-all-course-lesson-query.port';
import { CourseLessonsDTO } from '../ports/secondary/course-lessons.dto';
import {
  GETS_ONE_COURSE_LESSONS_DTO,
  GetsOneCourseLessonsDtoPort,
} from '../ports/secondary/gets-one-course-lessons-dto.port';
import { CourseLessonQuery } from '../ports/primary/course-lesson.query';

const mapToCourseLessons = (
  courseLessonsDTO: CourseLessonsDTO,
  lessonIds: string[],
  allLessons: LessonDTO[]
): CourseLessonsDTO => ({
  id: courseLessonsDTO.id,
  lessons: lessonIds.map((lessonId) => ({
    id: lessonId,
    name: allLessons.find((l) => l.id === lessonId)?.title as string,
  })),
});

@Injectable()
export class CourseLessonsState
  implements
    UpdateCourseLessonsCommandPort,
    LoadAllLessonsCommandPort,
    GetsAllLessonOptionQueryPort,
    SetCourseIdCommandPort,
    GetsAllCourseLessonQueryPort
{
  private _allLessonDtoSubject: BehaviorSubject<LessonDTO[]> =
    new BehaviorSubject<LessonDTO[]>([]);
  private _currentCourseLessonsDtoSubject: ReplaySubject<CourseLessonsDTO> =
    new ReplaySubject<CourseLessonsDTO>();

  constructor(
    @Inject(SETS_COURSE_LESSONS_DTO)
    private _setsCourseLessons: SetsCourseLessonsDtoPort,
    @Inject(GETS_ALL_LESSON_DTO) private _getsAllLesson: GetsAllLessonDtoPort,
    @Inject(GETS_ONE_COURSE_LESSONS_DTO)
    private _getsOneCourseLessons: GetsOneCourseLessonsDtoPort
  ) {
    this.loadAllLessons(new LoadAllLessonsCommand());
    this.setCourseId(new SetCourseIdCommand('maGj6iB6aBTko3aqsLxK'));
  }

  updateCourseLessons(command: UpdateCourseLessonsCommand): void {
    combineLatest([
      this._currentCourseLessonsDtoSubject,
      this._allLessonDtoSubject,
    ])
      .pipe(
        take(1),
        tap(([courseLessonsDTO, allLessons]) => {
          this._setsCourseLessons.set(
            mapToCourseLessons(courseLessonsDTO, command.lessonIds, allLessons)
          );
        })
      )
      .subscribe();
  }

  loadAllLessons(command: LoadAllLessonsCommand): void {
    this._getsAllLesson
      .getAll({})
      .subscribe((dtos: LessonDTO[]) => this._allLessonDtoSubject.next(dtos));
  }

  getAllLessonOptionQuery(): Observable<LessonOptionQuery[]> {
    return this._allLessonDtoSubject.pipe(
      map((dtos: LessonDTO[]) =>
        dtos.map((dto: LessonDTO) => new LessonOptionQuery(dto.title, dto.id))
      )
    );
  }

  setCourseId(command: SetCourseIdCommand): void {
    this._getsOneCourseLessons
      .getOne(command.courseId)
      .subscribe((dto: CourseLessonsDTO | undefined) => {
        if (!dto) return;
        this._currentCourseLessonsDtoSubject.next(dto);
      });
  }

  getAllCourseLessonQuery(): Observable<CourseLessonQuery[]> {
    return this._currentCourseLessonsDtoSubject.pipe(
      map((dto: CourseLessonsDTO) =>
        dto.lessons.map((l) => new CourseLessonQuery(l.id))
      )
    );
  }
}
