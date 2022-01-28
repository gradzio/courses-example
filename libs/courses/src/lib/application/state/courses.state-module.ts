import { NgModule } from '@angular/core';
import { GETS_COURSE_QUERY } from '../ports/primary/gets-course-query.port';
import { CoursesState } from './courses.state';
import { CREATES_COURSE_COMMAND } from '../ports/primary/creates-course-command.port';
import { DELETES_COURSE_COMMAND } from '../ports/primary/deletes-course-command.port';

@NgModule({
  declarations: [],
  providers: [
    CoursesState,
    { provide: GETS_COURSE_QUERY, useExisting: CoursesState },
    { provide: CREATES_COURSE_COMMAND, useExisting: CoursesState },
    { provide: DELETES_COURSE_COMMAND, useExisting: CoursesState }
  ],
  exports: [],
})
export class CoursesStateModule {}
