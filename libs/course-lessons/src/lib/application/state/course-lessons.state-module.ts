import { NgModule } from '@angular/core';
import { CourseLessonsState } from './course-lessons.state';
import { UPDATE_COURSE_LESSONS_COMMAND } from '../ports/primary/update-course-lessons-command.port';
import { LOAD_ALL_LESSONS_COMMAND } from '../ports/primary/load-all-lessons-command.port';
import { GETS_ALL_LESSON_OPTION_QUERY } from '../ports/primary/gets-all-lesson-option-query.port';
import { SET_COURSE_ID_COMMAND } from '../ports/primary/set-course-id-command.port';
import { GETS_ALL_COURSE_LESSON_QUERY } from '../ports/primary/gets-all-course-lesson-query.port';
import { GETS_CURRENT_COURSE_LESSON_QUERY } from '../ports/primary/gets-current-course-lesson-query.port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [CourseLessonsState, { provide: UPDATE_COURSE_LESSONS_COMMAND, useExisting: CourseLessonsState }, { provide: LOAD_ALL_LESSONS_COMMAND, useExisting: CourseLessonsState }, { provide: GETS_ALL_LESSON_OPTION_QUERY, useExisting: CourseLessonsState }, { provide: SET_COURSE_ID_COMMAND, useExisting: CourseLessonsState }, { provide: GETS_ALL_COURSE_LESSON_QUERY, useExisting: CourseLessonsState }, { provide: SET_COURSE_ID_COMMAND, useExisting: CourseLessonsState }, { provide: GETS_CURRENT_COURSE_LESSON_QUERY, useExisting: CourseLessonsState }, { provide: SET_COURSE_ID_COMMAND, useExisting: CourseLessonsState }, { provide: GETS_ALL_COURSE_LESSON_QUERY, useExisting: CourseLessonsState }],
  	exports: [] })
export class CourseLessonsStateModule {
}
