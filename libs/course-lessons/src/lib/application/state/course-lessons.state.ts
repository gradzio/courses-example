import { Injectable, Inject } from '@angular/core';
import {
  SETS_COURSE_LESSONS_DTO,
  SetsCourseLessonsDtoPort,
} from '../ports/secondary/sets-course-lessons-dto.port';
import { UpdateCourseLessonsCommandPort } from '../ports/primary/update-course-lessons-command.port';
import { UpdateCourseLessonsCommand } from '../ports/primary/update-course-lessons.command';

@Injectable()
export class CourseLessonsState implements UpdateCourseLessonsCommandPort {
  constructor(
    @Inject(SETS_COURSE_LESSONS_DTO)
    private _setsCourseLessons: SetsCourseLessonsDtoPort
  ) {}

  updateCourseLessons(command: UpdateCourseLessonsCommand): void {
    this._setsCourseLessons.set({
      id: command.courseId,
      courseName: command.courseName,
      lessons: command.lessons.map((lessonName) => ({ lessonName })),
    });
  }
}
