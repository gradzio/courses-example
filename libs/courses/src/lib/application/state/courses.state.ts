import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GetsCourseQueryPort } from '../ports/primary/gets-course-query.port';
import { CourseQuery } from '../ports/primary/course.query';
import {
  GetsAllCourseDtoPort,
  GETS_ALL_COURSE_DTO,
} from '../ports/secondary/gets-all-course-dto.port';
import {
  AddsCourseDtoPort,
  ADDS_COURSE_DTO,
} from '../ports/secondary/adds-course-dto.port';
import { CreateCourseCommandPort } from '../ports/primary/create-course-command.port';
import { DeleteCourseCommandPort } from '../ports/primary/delete-course-command.port';
import {
  RemovesCourseDtoPort,
  REMOVES_COURSE_DTO,
} from '../ports/secondary/removes-course-dto.port';
import { CreateCourseCommand } from '../ports/primary/create-course.command';
import { DeleteCourseCommand } from '../ports/primary/delete-course.command';
import {
  GETS_ONE_COURSE_DTO,
  GetsOneCourseDtoPort,
} from '../ports/secondary/gets-one-course-dto.port';

@Injectable()
export class CoursesState
  implements
    GetsCourseQueryPort,
    CreateCourseCommandPort,
    DeleteCourseCommandPort
{
  constructor(
    @Inject(GETS_ALL_COURSE_DTO)
    private _getsAllCourseDto: GetsAllCourseDtoPort,
    @Inject(ADDS_COURSE_DTO) private _addsCourseDto: AddsCourseDtoPort,
    @Inject(REMOVES_COURSE_DTO) private _removesCourseDto: RemovesCourseDtoPort,
    @Inject(GETS_ONE_COURSE_DTO) private _getsOneCourse: GetsOneCourseDtoPort
  ) {}

  getCoursesQuery(): Observable<CourseQuery[]> {
    return this._getsAllCourseDto
      .getAll({})
      .pipe(
        map((dtos) =>
          dtos.map((dto) => new CourseQuery(dto.name, dto.description, dto.id))
        )
      );
  }

  createCourse(command: CreateCourseCommand): void {
    this._addsCourseDto.add({
      name: command.title,
      description: command.description,
    });
  }

  deleteCourse(command: DeleteCourseCommand): void {
    this._removesCourseDto.remove(command.courseId);
  }
}
