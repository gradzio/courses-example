import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  OnInit,
} from '@angular/core';
import {
  UPDATE_COURSE_LESSONS_COMMAND,
  UpdateCourseLessonsCommandPort,
} from '../../../application/ports/primary/update-course-lessons-command.port';
import { UpdateCourseLessonsCommand } from '../../../application/ports/primary/update-course-lessons.command';
import { Observable, tap } from 'rxjs';
import { LessonOptionQuery } from '../../../application/ports/primary/lesson-option.query';
import {
  GETS_ALL_LESSON_OPTION_QUERY,
  GetsAllLessonOptionQueryPort,
} from '../../../application/ports/primary/gets-all-lesson-option-query.port';
import { CourseLessonQuery } from '../../../application/ports/primary/course-lesson.query';
import {
  GETS_ALL_COURSE_LESSON_QUERY,
  GetsAllCourseLessonQueryPort,
} from '../../../application/ports/primary/gets-all-course-lesson-query.port';

@Component({
  selector: 'lib-manage-course-lessons',
  templateUrl: './manage-course-lessons.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageCourseLessonsComponent implements OnInit {
  form = new FormGroup({});
  options$: Observable<LessonOptionQuery[]> =
    this._getsAllLessonOptionQuery.getAllLessonOptionQuery();
  currentLessons$: Observable<CourseLessonQuery[]> =
    this._getsAllCourseLessonQuery.getAllCourseLessonQuery();

  constructor(
    @Inject(UPDATE_COURSE_LESSONS_COMMAND)
    private _updateCourseLessons: UpdateCourseLessonsCommandPort,
    @Inject(GETS_ALL_LESSON_OPTION_QUERY)
    private _getsAllLessonOptionQuery: GetsAllLessonOptionQueryPort,
    @Inject(GETS_ALL_COURSE_LESSON_QUERY)
    private _getsAllCourseLessonQuery: GetsAllCourseLessonQueryPort
  ) {}

  ngOnInit() {
    this.currentLessons$.subscribe(
      (lessonQueries) =>
        (this.form = new FormGroup({
          lessonIds: new FormArray(
            lessonQueries.map((lessonQuery) => new FormControl(lessonQuery.id))
          ),
        }))
    );
  }

  onFormSubmited(form: FormGroup): void {
    this._updateCourseLessons.updateCourseLessons(
      new UpdateCourseLessonsCommand(form.get('lessonIds')?.value)
    );
  }

  addOption(formArrayKey: string): void {
    const formArray = this.form.get(formArrayKey) as FormArray;
    formArray.push(new FormControl());
  }

  removeOption(formArrayKey: string, i: number): void {
    const formArray = this.form.get(formArrayKey) as FormArray;
    formArray.removeAt(i);
  }

  moveOption(formArrayKey: string, curIdx: number, nextIdx: number): void {
    const formArray = this.form.get(formArrayKey) as FormArray;
    const option = formArray.at(curIdx);
    formArray.removeAt(curIdx);
    formArray.insert(nextIdx, option);
  }

  get lessonIds(): FormArray {
    return this.form.get('lessonIds') as FormArray;
  }
}
