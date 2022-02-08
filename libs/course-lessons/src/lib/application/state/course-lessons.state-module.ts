import { NgModule } from '@angular/core';
import { CourseLessonsState } from './course-lessons.state';
import { UPDATE_COURSE_LESSONS_COMMAND } from '../ports/primary/update-course-lessons-command.port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [CourseLessonsState, { provide: UPDATE_COURSE_LESSONS_COMMAND, useExisting: CourseLessonsState }],
  	exports: [] })
export class CourseLessonsStateModule {
}
