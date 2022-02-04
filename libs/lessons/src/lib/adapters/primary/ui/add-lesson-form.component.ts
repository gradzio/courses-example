import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADD_LESSON_COMMAND, AddLessonCommandPort } from '../../../application/ports/primary/add-lesson-command.port';
import { AddLessonCommand } from '../../../application/ports/primary/add-lesson.command';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-add-lesson-form', templateUrl: './add-lesson-form.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AddLessonFormComponent {
  readonly form: FormGroup = new FormGroup({title: new FormControl(), description: new FormControl()});
  constructor(@Inject(ADD_LESSON_COMMAND) private _addLesson: AddLessonCommandPort) {
  }


  onLessonSubmited(form: FormGroup): void {
    if (form.invalid) {
      return;
    }
    this._addLesson.addLesson(new AddLessonCommand(form.get("title")?.value,form.get("description")?.value));
  }
}
