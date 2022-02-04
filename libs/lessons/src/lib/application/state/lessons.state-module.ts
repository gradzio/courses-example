import { NgModule } from '@angular/core';
import { LessonsState } from './lessons.state';
import { ADD_LESSON_COMMAND } from '../ports/primary/add-lesson-command.port';
import { GETS_ALL_LESSON_QUERY } from '../ports/primary/gets-all-lesson-query.port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [LessonsState, { provide: ADD_LESSON_COMMAND, useExisting: LessonsState }, { provide: GETS_ALL_LESSON_QUERY, useExisting: LessonsState }],
  	exports: [] })
export class LessonsStateModule {
}
