import { NgModule } from '@angular/core';
import { LessonsState } from './lessons.state';
import { ADD_LESSON_COMMAND } from '../ports/primary/add-lesson-command.port';
import { GETS_ALL_LESSON_QUERY } from '../ports/primary/gets-all-lesson-query.port';
import { LOAD_ALL_LESSONS_COMMAND } from '../ports/primary/load-all-lessons-command.port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [LessonsState, { provide: ADD_LESSON_COMMAND, useExisting: LessonsState }, { provide: GETS_ALL_LESSON_QUERY, useExisting: LessonsState }, { provide: LOAD_ALL_LESSONS_COMMAND, useExisting: LessonsState }, { provide: GETS_ALL_LESSON_QUERY, useExisting: LessonsState }, { provide: ADD_LESSON_COMMAND, useExisting: LessonsState }],
  	exports: [] })
export class LessonsStateModule {
}
