import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { UPDATE_COURSE_LESSONS_COMMAND, UpdateCourseLessonsCommandPort } from '../../../application/ports/primary/update-course-lessons-command.port';
import { UpdateCourseLessonsCommand } from '../../../application/ports/primary/update-course-lessons.command';

@Component({
  selector: 'lib-manage-course-lessons',
  templateUrl: './manage-course-lessons.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageCourseLessonsComponent {
  readonly form: FormGroup = new FormGroup({
    courseId: new FormControl(),
    courseName: new FormControl(),
    lessons: new FormArray([]),
  });

  constructor(@Inject(UPDATE_COURSE_LESSONS_COMMAND) private _updateCourseLessons: UpdateCourseLessonsCommandPort) {
  }

  onFormSubmited(form:FormGroup): void {
    this._updateCourseLessons.updateCourseLessons(new UpdateCourseLessonsCommand(form.get('courseId')?.value, form.get('courseName')?.value, form.get('lesson')?.value);
  }
}
