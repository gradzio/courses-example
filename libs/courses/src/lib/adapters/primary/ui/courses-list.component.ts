import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateCourseCommandPort, CREATE_COURSE_COMMAND } from '../../../application/ports/primary/create-course-command.port';
import { CourseQuery } from '../../../application/ports/primary/course.query';
import { DeleteCourseCommandPort, DELETE_COURSE_COMMAND } from '../../../application/ports/primary/delete-course-command.port';
import { GetsCourseQueryPort, GETS_COURSE_QUERY } from '../../../application/ports/primary/gets-course-query.port';
import { CreateCourseCommand } from '../../../application/ports/primary/create-course.command';
import { DeleteCourseCommand } from '../../../application/ports/primary/delete-course.command';

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

  constructor(@Inject(GETS_COURSE_QUERY) private _getsCourse: GetsCourseQueryPort, @Inject(CREATE_COURSE_COMMAND) private _createCourse: CreateCourseCommandPort, @Inject(DELETE_COURSE_COMMAND) private _deleteCourse: DeleteCourseCommandPort) {
  }

  onCourseSubmited(form: FormGroup): void {
    if (form.invalid) {
      return;
    }
    this._createCourse.createCourse(
      new CreateCourseCommand( form.get('title')?.value,
      form.get('description')?.value  )
    
    );
    this.form.reset();
  }

  onCourseClicked(id: string): void {
    this._deleteCourse.deleteCourse(new DeleteCourseCommand(id));
  }
}
