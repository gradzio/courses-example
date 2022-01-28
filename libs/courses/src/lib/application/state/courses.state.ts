import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GetsCourseQueryPort } from '../ports/primary/gets-course-query.port';
import { CourseQuery } from '../ports/primary/course.query';
import {
  GetsAllCourseDtoPort,
  GETS_ALL_COURSE_DTO,
} from '../ports/secondary/gets-all-course-dto.port';
import { AddsCourseDtoPort, ADDS_COURSE_DTO } from '../ports/secondary/adds-course-dto.port';
import { CreatesCourseCommandPort } from '../ports/primary/creates-course-command.port';
import { DeletesCourseCommandPort } from '../ports/primary/deletes-course-command.port';
import { RemovesCourseDtoPort, REMOVES_COURSE_DTO } from '../ports/secondary/removes-course-dto.port';

@Injectable()
export class CoursesState implements GetsCourseQueryPort, CreatesCourseCommandPort, DeletesCourseCommandPort {
  constructor(
    @Inject(GETS_ALL_COURSE_DTO) private _getsAllCourseDto: GetsAllCourseDtoPort,
    @Inject(ADDS_COURSE_DTO) private _addsCourseDto: AddsCourseDtoPort,
    @Inject(REMOVES_COURSE_DTO) private _removesCourseDto: RemovesCourseDtoPort
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

  createCourse(title: string, paragraph: string): void {
    this._addsCourseDto.add({name: title, description: paragraph});
  }

  deleteCourse(id: string): void {
    this._removesCourseDto.remove(id);
  }
}
