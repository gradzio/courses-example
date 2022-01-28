import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GetsCourseQueryPort, GETS_COURSE_QUERY } from '../../../../application/ports/primary/gets-course-query.port';
import { CourseQuery } from '../../../../application/ports/primary/course.query';
import { CREATES_COURSE_COMMAND, CreatesCourseCommandPort } from '../../../../application/ports/primary/creates-course-command.port';
import { FormControl, FormGroup } from '@angular/forms';
import { DELETES_COURSE_COMMAND, DeletesCourseCommandPort } from '../../../../application/ports/primary/deletes-course-command.port';

@Component({
  selector: 'lib-courses-list',
  templateUrl: './courses-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListComponent {
  courses$: Observable<CourseQuery[]> = this._getsCourse.getCoursesQuery();

  form = new FormGroup({
    title: new FormControl(),
    description: new FormControl()
  });

  constructor(@Inject(GETS_COURSE_QUERY) private _getsCourse: GetsCourseQueryPort, @Inject(CREATES_COURSE_COMMAND) private _createsCourse: CreatesCourseCommandPort, @Inject(DELETES_COURSE_COMMAND) private _deletesCourse: DeletesCourseCommandPort) {
  }

  onCourseSubmited(form: FormGroup): void {
    if (form.invalid) {
      return;
    }
    this._createsCourse.createCourse(
      form.get('title')?.value,
      form.get('description')?.value  
    );
    this.form.reset();
  }

  onCourseClicked(id: string): void {
    this._deletesCourse.deleteCourse(id);
  }
}
