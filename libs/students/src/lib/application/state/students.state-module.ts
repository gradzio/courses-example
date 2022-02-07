import { NgModule } from '@angular/core';
import { StudentsState } from './students.state';
import { CREATE_STUDENT_COMMAND } from '../ports/primary/create-student-command.port';
import { GETS_ALL_STUDENT_QUERY } from '../ports/primary/gets-all-student-query.port';
import { LOAD_ALL_STUDENTS_COMMAND } from '../ports/primary/load-all-students-command.port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [StudentsState, { provide: CREATE_STUDENT_COMMAND, useExisting: StudentsState }, { provide: GETS_ALL_STUDENT_QUERY, useExisting: StudentsState }, { provide: LOAD_ALL_STUDENTS_COMMAND, useExisting: StudentsState }],
  	exports: [] })
export class StudentsStateModule {
}
