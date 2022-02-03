import { NgModule } from '@angular/core';
import { GETS_COURSE_QUERY } from '../ports/primary/gets-course-query.port';
import { CoursesState } from './courses.state';
import { CREATE_COURSE_COMMAND } from '../ports/primary/create-course-command.port';
import { DELETE_COURSE_COMMAND } from '../ports/primary/delete-course-command.port';

@NgModule({
  declarations: [],
  providers: [
    CoursesState,
    { provide: GETS_COURSE_QUERY, useExisting: CoursesState },
    { provide: CREATE_COURSE_COMMAND, useExisting: CoursesState },
    { provide: DELETE_COURSE_COMMAND, useExisting: CoursesState }
  ],
  exports: [],
})
export class CoursesStateModule {}
