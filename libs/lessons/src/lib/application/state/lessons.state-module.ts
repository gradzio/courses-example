import { NgModule } from '@angular/core';
import { LessonsState } from './lessons.state';
import { ADD_LESSON_COMMAND } from '../ports/primary/add-lesson-command.port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [LessonsState, { provide: ADD_LESSON_COMMAND, useExisting: LessonsState }],
  	exports: [] })
export class LessonsStateModule {
}
