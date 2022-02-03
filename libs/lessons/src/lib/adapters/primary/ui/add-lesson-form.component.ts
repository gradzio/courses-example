import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADD_LESSON_COMMAND, AddLessonCommandPort } from '../../../application/ports/primary/add-lesson-command.port';
import { AddLessonCommand } from '../../../application/ports/primary/add-lesson.command';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-add-lesson-form', templateUrl: './add-lesson-form.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AddLessonFormComponent {
  readonly form: FormGroup = new FormGroup({title: new FormControl(), description: new FormControl()});
  constructor(@Inject(ADD_LESSON_COMMAND) private _addLesson: AddLessonCommandPort) {
  }

  onLessonAdded(form:FormGroup): void {
    this._addLesson.addLesson(new AddLessonCommand("title","description"));
  }

}
