import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { LessonQuery } from '../../../application/ports/primary/lesson.query';
import {
  GETS_ALL_LESSON_QUERY,
  GetsAllLessonQueryPort,
} from '../../../application/ports/primary/gets-all-lesson-query.port';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-lessons-list',
  templateUrl: './lessons-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonsListComponent {
  lessons$: Observable<LessonQuery[]> =
    this._getsAllLessonQuery.getAllLessonQuery();


    form = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
    });

  constructor(
    @Inject(GETS_ALL_LESSON_QUERY)
    private _getsAllLessonQuery: GetsAllLessonQueryPort
  ) {}


}
